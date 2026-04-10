"use client";
import { useState } from "react";

export default function AdminTabs({ active, setActive }) {
  return (
    <div className="bg-white shadow p-4 flex gap-6">
      <button
        className={active === "post" ? "font-bold" : ""}
        onClick={() => setActive("post")}
      >
        Post
      </button>

      <button
        className={active === "projects" ? "font-bold" : ""}
        onClick={() => setActive("projects")}
      >
        Projects
      </button>
    </div>
  );
}