using Resend;

namespace Backend.Email;

/// <summary>
/// Thin wrapper around Resend. All email sending goes through here.
/// </summary>
public class EmailService(IResend resend, IConfiguration config, ILogger<EmailService> logger)
{
    private string From =>
        config["Resend:FromAddress"] ?? "khouding <khouding@tszuk.co.za>";

    public async Task SendPasswordResetAsync(string toEmail, string resetUrl)
    {
        var msg = new EmailMessage
        {
            From    = From,
            Subject = "Reset your khouding password",
            HtmlBody = $"""
                <p>Hi,</p>
                <p>Click the link below to reset your password. It expires in 1 hour.</p>
                <p><a href="{resetUrl}">{resetUrl}</a></p>
                <p>If you did not request this, ignore this email.</p>
                """,
        };
        msg.To.Add(toEmail);

        try
        {
            await resend.EmailSendAsync(msg);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Failed to send password reset email to {Email}", toEmail);
            throw;
        }
    }
}
