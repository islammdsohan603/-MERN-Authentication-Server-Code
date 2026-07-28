import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyMail = async (token, email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailConfigurations = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `
      

<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <title>Email Verification</title>
  </head>
  <body
    style='font-family: Arial, sans-serif; background:#f5f5f5; padding:20px;'
  >
    <div
      style='max-width:600px; margin:auto; background:#fff; padding:30px; border-radius:10px;'
    >

      <h1 style='color:#2563eb;'>Welcome 🎉</h1>

      <p>Thanks for creating your account.</p>

      <p>Please verify your email by clicking the button below.</p>

      <a href='http://localhost:5173/verify/${token}'>
        <button
          style='
              background:#2563eb;
              color:white;
              border:none;
              padding:12px 20px;
              border-radius:5px;
              cursor:pointer;
            '
        >
          Verify Email
        </button>
      </a>

    </div>
  </body>
</html>

      `,
    };

    await transporter.sendMail(mailConfigurations);

    console.log("Email Sent Successfully");
  } catch (error) {
    console.log(error);
  }
};