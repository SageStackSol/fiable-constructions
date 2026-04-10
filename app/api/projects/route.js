import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import cloudinary from "@/lib/cloudinary";


// ✅ GET (ALL + PINNED FILTER + LIMIT)
export async function GET(req) {
  await connectDB();

  const { searchParams } = new URL(req.url);

  const pinned = searchParams.get("pinned");
  const limit = searchParams.get("limit");

  let query = {};

  if (pinned === "true") {
    query.pinned = true;
  }

  let projectsQuery = Project.find(query).sort({ createdAt: -1 });

  if (limit) {
    projectsQuery = projectsQuery.limit(Number(limit));
  }

  const projects = await projectsQuery;

  return Response.json(projects);
}


// ✅ POST (CREATE PROJECT)
export async function POST(req) {
  const body = await req.json();
  await connectDB();

  // limit pinned to 4
  if (body.pinned) {
    const count = await Project.countDocuments({ pinned: true });
    if (count >= 4) {
      return Response.json(
        { error: "Max 4 pinned allowed" },
        { status: 400 }
      );
    }
  }

  const project = await Project.create(body);
  return Response.json(project);
}