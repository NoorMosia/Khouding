using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

/// <summary>
/// The single EF Core context. Holds Identity tables plus progress and submissions.
/// Content is never stored here — it lives in the in-memory manifest (ContentIngester).
/// </summary>
public class AppDbContext(DbContextOptions<AppDbContext> options)
    : IdentityDbContext<IdentityUser>(options)
{
    public DbSet<ProgressEntry> Progress => Set<ProgressEntry>();
    public DbSet<SubmissionRow> Submissions => Set<SubmissionRow>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<ProgressEntry>(e =>
        {
            e.HasKey(p => p.Id);
            e.HasIndex(p => new { p.UserId, p.CourseId, p.SectionId, p.ProblemId, p.Kind })
             .IsUnique();
        });

        builder.Entity<SubmissionRow>(e =>
        {
            e.HasKey(s => s.Id);
            e.HasIndex(s => new { s.UserId, s.ProblemId, s.CreatedAt });
        });
    }
}
