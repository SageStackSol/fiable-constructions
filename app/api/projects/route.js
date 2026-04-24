import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import cloudinary from "@/lib/cloudinary";

// ✅ CREATE PROJECT


// export async function GET() {
//   await connectDB();

//   const projects = await Project.find().sort({ createdAt: -1 });

//   return Response.json(projects);
// }

export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const pinned = searchParams.get("pinned");

  let query = {};

  if (pinned === "true") {
    query.pinned = true;
  }

  const projects = await Project.find(query).sort({ createdAt: -1 });

  return Response.json(projects);
}