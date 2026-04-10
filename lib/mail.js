import nodemailer from "nodemailer";

export async function sendMail({ name, email, phone, message, service }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    html: `
      <h2>New Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Service:</b> ${service}</p>   <!-- ✅ added -->
      <p><b>Message:</b> ${message}</p>
    `,
  });
}