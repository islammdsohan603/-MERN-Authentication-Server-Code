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
      subject: "Testing Nodemailer",
      html: `
    <h1>Hello ${email}</h1>
    <p>This is a test email from Nodemailer.</p>
  `,
    };

    await transporter.sendMail(mailConfigurations);



    console.log("Email Sent Successfully");
  } catch (error) {
    console.log(error);
  }
};