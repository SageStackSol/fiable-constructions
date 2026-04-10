"use client";
import { useState } from "react";

export default function UploadBox({ onUpload, multiple = false }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFiles = async (files) => {
    setUploading(true);

    const fileArray = multiple ? Array.from(files) : [files[0]];
    const results = [];

    for (let file of fileArray) {
      const base64 = await toBase64(file);

      const res = await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify({
          file: base64,
          type: file.type.startsWith("video") ? "video" : "image",
          uploadOnly: true,
        }),
      });

      const data = await res.json();
      results.push(data);

      setProgress((prev) => prev + 100 / fileArray.length);
    }

    setUploading(false);
    onUpload(multiple ? results : results[0]);
  };

  return (
    <div
      className="border-2 border-dashed p-6 text-center cursor-pointer"
      onDrop={(e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <p>Drag & Drop or Click to Upload</p>

      <input
        type="file"
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {uploading && (
        <div className="mt-2">
          <div className="bg-gray-300 h-2 rounded">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// helper
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });