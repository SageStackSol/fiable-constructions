import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function GET() {
  await connectDB();
  const projects = await Project.find().sort({ createdAt: -1 });

  return Response.json(projects);
}

export async function POST(req) {
  const body = await req.json();

  await connectDB();
  const project = await Project.create(body);

  return Response.json(project);
}
