import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";

export async function PUT(req, { params }) {
  const body = await req.json();

  await connectDB();
  const updated = await Project.findByIdAndUpdate(params.id, body, {
    new: true,
  });

  return Response.json(updated);
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Project.findByIdAndDelete(params.id);

  return Response.json({ message: "Deleted" });
}