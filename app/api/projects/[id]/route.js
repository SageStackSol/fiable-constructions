import { connectDB } from "@/lib/mongodb";
import Project from "@/models/Project";
import cloudinary from "@/lib/cloudinary";


// ✅ GET ONE
export async function GET(req, { params }) {
  await connectDB();
  const project = await Project.findById(params.id);
  return Response.json(project);
}


// ✅ UPDATE
export async function PUT(req, { params }) {
  const body = await req.json();
  await connectDB();

  if (body.pinned) {
    const count = await Project.countDocuments({
      pinned: true,
      _id: { $ne: params.id },
    });

    if (count >= 4) {
      return Response.json(
        { error: "Max 4 pinned allowed" },
        { status: 400 }
      );
    }
  }

  const updated = await Project.findByIdAndUpdate(
    params.id,
    body,
    { new: true }
  );

  return Response.json(updated);
}


// ✅ DELETE (WITH CLOUDINARY CLEANUP)
export async function DELETE(req, { params }) {
  await connectDB();

  const project = await Project.findById(params.id);

  if (!project) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  // delete main image
  if (project.imagePublicId) {
    await cloudinary.uploader.destroy(project.imagePublicId);
  }

  // delete gallery
  for (let id of project.galleryPublicIds || []) {
    await cloudinary.uploader.destroy(id);
  }

  // delete video
  if (project.videoPublicId) {
    await cloudinary.uploader.destroy(project.videoPublicId, {
      resource_type: "video",
    });
  }

  // delete logo
  if (project.clientLogoPublicId) {
    await cloudinary.uploader.destroy(project.clientLogoPublicId);
  }

  await Project.findByIdAndDelete(params.id);

  return Response.json({ message: "Deleted" });
}