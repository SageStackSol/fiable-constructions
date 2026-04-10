"use client";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project, refresh }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this project?");
    if (!confirmDelete) return;

    await fetch(`/api/projects/${project._id}`, {
      method: "DELETE",
    });

    refresh();
  };

  return (
    <div className="border p-4 rounded shadow">
      {/* Image */}
      {project.image && (
        <img src={project.image} className="w-full h-40 object-cover" />
      )}

      {/* Video */}
      {project.video && (
        <video src={project.video} controls className="mt-2 w-full" />
      )}

      <h2 className="font-bold mt-2">{project.title}</h2>
      <p>{project.description}</p>

      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-3 py-1"
          onClick={() =>
            router.push(`/admin/projects/edit/${project._id}`)
          }
        >
          Edit
        </button>

        <button
          className="bg-red-500 text-white px-3 py-1"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}