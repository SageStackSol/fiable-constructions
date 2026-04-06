import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { sendMail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();

    await connectDB();

    // Save to DB
    const saved = await Contact.create(body);

    // Send Email
    await sendMail(body);

    return Response.json({
      success: true,
      data: saved,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}