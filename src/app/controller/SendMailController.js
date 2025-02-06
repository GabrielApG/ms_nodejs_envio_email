import SendMailService from "./../services/SendMailService.js";

class SendMailController {
  async send(req, res) {
    const { to = null, subject = null, body = null } = req.body;

    const missingFields = Object.entries({ to, subject, body })
      .filter(([key, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return res.status(400).json({ error: "Missing required fields", missingFields });
    }

    try {
      await SendMailService.sendMail(to, subject, body); // Adicionado await
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Failed to send email", details: error.message });
    }
  }
}

export default new SendMailController();
