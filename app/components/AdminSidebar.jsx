"use client";
import { useState } from "react";

export default function AdminSidebar({ active, setActive }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MENU BUTTON */}
      <button
        className="fixed top-4 left-4 z-50 bg-black text-white px-3 py-2"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <button
            className={`block ${active === "projects" && "font-bold"}`}
            onClick={() => {
              setActive("projects");
              setOpen(false);
            }}
          >
            Projects
          </button>

          <button
            className={`block ${active === "contacts" && "font-bold"}`}
            onClick={() => {
              setActive("contacts");
              setOpen(false);
            }}
          >
            Contacts
          </button>
        </div>
      </div>
    </>
  );
}