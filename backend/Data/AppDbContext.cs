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
    public DbSet<DraftRow> Drafts => Set<DraftRow>();
    public DbSet<UserProfile> UserProfiles => Set<UserProfile>();
    public DbSet<ChapterTestAttempt> ChapterTestAttempts => Set<ChapterTestAttempt>();

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

        builder.Entity<DraftRow>(e =>
        {
            e.HasKey(d => d.Id);
            e.HasIndex(d => new { d.UserId, d.ProblemId, d.Language })
             .IsUnique();
        });

        builder.Entity<UserProfile>(e =>
        {
            e.HasKey(p => p.Id);
            e.HasIndex(p => p.UserId).IsUnique();
        });

        builder.Entity<ChapterTestAttempt>(e =>
        {
            e.HasKey(a => a.Id);
            // One active attempt per user per test (latest by StartedAt)
            e.HasIndex(a => new { a.UserId, a.TestId, a.StartedAt });
        });
    }
}
