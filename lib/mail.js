import nodemailer from "nodemailer";

export async function sendMail({ name, email, phone, message, service }) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",   // ✅ better than service: gmail
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact - ${service}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ Mail sent:", info.messageId);

  } catch (error) {
    console.error("❌ Mail failed:", error.message);
    // ❗ don't throw → keeps API stable
  }
}