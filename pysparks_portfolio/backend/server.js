import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend.vercel.app"],
    methods: ["POST"],
  })
);
app.use(bodyParser.json());

// Multer setup (store file in memory)
const upload = multer({ storage: multer.memoryStorage() });

// ---- Contact form ----
app.post("/api/sendMail", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `New message from ${firstName} ${lastName}`,
      text: message,
      html: `
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false });
  }
});

// ---- Careers form ----
app.post("/api/careerApply", upload.single("cv"), async (req, res) => {
  const { name, email, contact, field } = req.body;
  const cvFile = req.file;

  if (!cvFile) {
    return res.status(400).json({ success: false, error: "CV not uploaded" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `Job Application - ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Field of Interest:</b> ${field}</p>
      `,
      attachments: [
        {
          filename: cvFile.originalname,
          content: cvFile.buffer,
        },
      ],
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Career email error:", err);
    res.status(500).json({ success: false });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
