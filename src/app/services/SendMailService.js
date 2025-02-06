import nodemailer from "nodemailer";

class SendMailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAILHOG_HOST || "mailhog",
      port: process.env.MAILHOG_PORT || 1025,
      secure: false,
      auth: null,
    });
  }

  async sendMail(to, subject, body) {
    const mailOptions = {
      from: "no-reply@example.com",
      to,
      subject,
      text: body,
    };

    return this.transporter.sendMail(mailOptions);
  }
}

export default new SendMailService();
