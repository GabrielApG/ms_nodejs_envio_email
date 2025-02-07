import request from "supertest";
import express from "express";
import SendMailController from "./../src/app/controller/SendMailController.js";
import SendMailService from "./../src/app/services/SendMailService.js";

// Mock do SendMailService
jest.mock("./../src/app/services/SendMailService.js");

const app = express();
app.use(express.json());
app.post("/send-mail", SendMailController.send);

describe("SendMailController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return 400 if required fields are missing", async () => {
    const response = await request(app)
      .post("/send-mail")
      .send({ to: "test@example.com" });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Missing required fields");
    expect(response.body.missingFields).toEqual(["subject", "body"]);
  });

  it("should return 200 and send email if all fields are provided", async () => {
    SendMailService.sendMail.mockResolvedValue(true);

    const response = await request(app)
      .post("/send-mail")
      .send({
        to: "test@example.com",
        subject: "Test Subject",
        body: "Test Body",
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Email sent successfully");
    expect(SendMailService.sendMail).toHaveBeenCalledWith(
      "test@example.com",
      "Test Subject",
      "Test Body"
    );
  });

  it("should return 500 if email sending fails", async () => {
    SendMailService.sendMail.mockRejectedValue(new Error("Failed to send email"));

    const response = await request(app)
      .post("/send-mail")
      .send({
        to: "test@example.com",
        subject: "Test Subject",
        body: "Test Body",
      });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Failed to send email");
    expect(response.body.details).toBe("Failed to send email");
  });
});
