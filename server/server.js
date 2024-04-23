const nodemailer = require("nodemailer");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(cors());

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.APP_PASS,
  },
});

app.post("/send-email", (req, res) => {
  const { subject, text, from } = req.body;



  const mailOptions = {
    from: from,
    to: process.env.USER_MAIL,
    subject: subject || "Test Email",
    html: text || "This is a test email sent from Node.js using nodemailer.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error occurred:", error.message);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    } else {
      console.log("Email sent successfully:", info.response);
      res.status(200).json({ message: "Email sent successfully." });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
