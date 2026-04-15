"use client";
import { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import UploadBox from "../components/UploadBox";
import ProjectCard from "../components/ProjectCard";
import ContactsTable from "../components/ContactsTable";

export default function AdminProjects() {
 const [active, setActive] = useState("projects");
  const [tab, setTab] = useState("post");

  // ✅ LOAD SAVED STATE ON FIRST RENDER

  // ✅ SAVE WHEN CHANGED
  useEffect(() => {
    localStorage.setItem("admin_active", active);
  }, [active]);

  useEffect(() => {
    localStorage.setItem("admin_tab", tab);
  }, [tab]);

  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    imagePublicId: "",
    gallery: [],
    galleryPublicIds: [],
    video: "",
    videoPublicId: "",
    pinned: false,
  });

  // FETCH PROJECTS
  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  useEffect(() => {
    if (tab === "projects") fetchProjects();
  }, [tab]);

  // CREATE
  const handleSubmit = async () => {
    await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Created!");
    setTab("projects");
  };

  return (
    <div className="h-screen flex items-center">
      <AdminSidebar active={active} setActive={setActive} />

      {/* PROJECT SECTION */}
      {active === "projects" && (
        <div className="pt-20">
          {/* TOP BAR */}
          <div className="bg-white shadow p-4 flex gap-6">
            <button onClick={() => setTab("post")}>Post</button>
            <button onClick={() => setTab("projects")}>
              Projects
            </button>
          </div>

          {/* POST */}
          {tab === "post" && (
            <div className="p-6 space-y-4">
              <input
                placeholder="Title"
                className="border p-2 w-full"
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <textarea
                placeholder="Description"
                className="border p-2 w-full"
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
              />
<p>Image</p>
              <UploadBox
                onUpload={(d) =>
                  setForm({
                    ...form,
                    image: d.url,
                    imagePublicId: d.public_id,
                  })
                }
              />
<p>Gallery</p>

              <UploadBox
                multiple
                onUpload={(d) =>
                  setForm({
                    ...form,
                    gallery: d.map((i) => i.url),
                    galleryPublicIds: d.map((i) => i.public_id),
                  })
                }
              />
<p>video</p>

              <UploadBox
                onUpload={(d) =>
                  setForm({
                    ...form,
                    video: d.url,
                    videoPublicId: d.public_id,
                  })
                }
              />

              <button
                onClick={handleSubmit}
                className="bg-black text-white px-4 py-2"
              >
                Create
              </button>
            </div>
          )}

          {/* PROJECT LIST */}
          {tab === "projects" && (
            <div className="p-6 grid grid-cols-3 gap-4">
              {projects.map((p) => (
                <ProjectCard
                  key={p._id}
                  project={p}
                  refresh={fetchProjects}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* CONTACT SECTION */}
      {active === "contacts" && <ContactsTable />}
    </div>
  );
}