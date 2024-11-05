const mailgun = require("mailgun-js");
const {
  EmailService,
} = require("../../application/repository/email.repository.js");

/**
 * MailgunService is an implementation of EmailService using Mailgun as the provider.
 */
class MailgunService extends EmailService {
  /**
   * Initializes the MailgunService with the necessary credentials.
   * @param {string} apiKey - The Mailgun API key.
   * @param {string} domain - The Mailgun domain used to send emails.
   */
  constructor(apiKey, domain) {
    super();
    this.mailgunClient = mailgun({ apiKey, domain });
  }

  /**
   * Sends an email using Mailgun.
   * @param {Object} emailData - The data required to send the email.
   * @param {string} emailData.to - The recipient's email address.
   * @param {string} emailData.subject - The subject of the email.
   * @param {string} emailData.body - The body content of the email.
   * @returns {Promise<Object>} Response data from Mailgun.
   * @throws {Error} If email sending fails.
   */
  async sendEmail({ to, subject, body }) {
    const emailOptions = {
      from: `noreply@${this.mailgunClient.domain}`, // You can customize the sender's address here
      to,
      subject,
      text: body, // For plaintext emails; you could add an HTML option if needed
    };

    try {
      const response = await this.mailgunClient.messages().send(emailOptions);
      return response;
    } catch (error) {
      console.error("Failed to send email:", error);
      throw new Error("Email sending failed.");
    }
  }
}

module.exports = { MailgunService };
