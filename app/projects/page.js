"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Page() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    setProjects(data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);
  return (
    <div className="lg:px-16 lg:py-20 md:px-16 md:py-20 p-4">
      <h1 className="text-[#002f67] font-black text-5xl lg:py-12 md:py-12 py-18">
        PROJECTS
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <p className="lg:text-3xl md:text-3xl text-xl lg:col-span-1 md:col-span-1 col-span-2">
          We partner with clients to transform ideas into well-planned,
          high-quality structures that deliver lasting value and real-world
          functionality.
        </p>
        <p className="lg:text-xl md:text-xl lg:col-span-1 md:col-span-1 col-span-2">
          Across residential and commercial projects, we combine thoughtful
          design, precise planning, and quality execution to deliver spaces that
          are durable, efficient, and built for long-term performance.
        </p>
      </div>

      {/* <div className="flex my-12 gap-2">
        <p className=" text-black/68 font-medium">Filter projects:</p>
        <select className="text-[#002f67] font-semibold">
          <option>Services</option>
        </select>
      </div> */}

      <div className="grid grid-cols-4 gap-2">
        {projects.length === 0 ? (
          <p className="col-span-4">NO PROJECTS</p>
        ) : (
          projects.map((i) => {
            return (
              <Link href={`/projects/${i._id}`} className="lg:col-span-1 md:col-span-1 col-span-4 " key={i._id}>
              <div className="group relative overflow-hidden  w-full h-56 cursor-pointer">
                <img
                  src={i.mainImage}
                  className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-700 group-hover:opacity-0"></div>

                <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                  <h2 className="text-2xl font-light leading-tight">
                    <span className="text-xs font-semibold text-[#FFC800]">
                      {i.title}
                      {console.log(i.title)}
                    </span>
                    <br /> {i.overview}
                  </h2>
                </div>
              </div></Link>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Page;
