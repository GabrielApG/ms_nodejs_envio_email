import express from 'express';
import HealthCheckController from "../app/controller/HealthCheckController.js";
import SendMailController from "../app/controller/SendMailController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// health
router.get("/health", HealthCheckController.health);

// send mail
router.post("/send-mail", SendMailController.send)

export default router;
