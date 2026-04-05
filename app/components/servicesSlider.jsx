"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const services = [
  {
    title: "Architectural Design",
    heading:
      "We create innovative and practical designs that combine functionality, aesthetics, and structural safety.",
    image: "/architecture.png",
    listTitle: "Our design services include:",
    list: [
      "House plans and layout design",
      "2D floor plans and working drawings",
      "3D elevation designs",
      "Interior space planning",
      "Structural drawings",
      "Building approval drawings",
    ],
    text: "Our goal is to design spaces that are efficient, modern, and tailored to your lifestyle or business needs.",
  },
  {
    title: "Construction Consultation",
    heading:
      "Expert advice to ensure smarter decisions and smoother construction.",
    image: "/consultation.png",
    text: "We ensure your project follows quality standards, safety regulations, and budget limits.",
    listTitle: "Consultation includes:",
    list: [
      "Site analysis and feasibility study",
      "Construction planning",
      "Material selection guidance",
      "Cost estimation and budgeting",
      "Structural advice",
      "Contractor coordination",
    ],
  },
  {
    title: "Construction Execution",
    heading: "Seamless construction execution from foundation to completion.",
    image: "/execution.png",
    listTitle: "Our execution services include:",
    list: [
      "Residential building construction",
      "Commercial building construction",
      "Renovation and remodeling",
      "Turnkey project management",
      "Quality supervision",
      "Labor and contractor coordination",
    ],
    text: "We focus on timely delivery, quality workmanship, and cost efficiency.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-8 items-center">
      {/* LEFT MENU */}
      <div className="bg-[#002F67] col-span-3  rounded-xl flex flex-col justify-center p-8 space-y-5 h-96">
        {services.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative block text-left w-full cursor-pointer transition
${
  active === i
    ? "font-semibold text-xl text-white"
    : "text-white/70 hover:text-white after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
}`}
          >
            {`0${i + 1}`} {item.title}
          </button>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      {/* <div className="col-span-9 grid grid-cols-10 gap-8 items-center">

        <div className="col-span-6 h-96">
          <AnimatePresence mode="wait">
            <motion.img
              key={services[active].image}
              src={services[active].image}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl w-full h-96 object-cover"
            />
          </AnimatePresence>
        </div>


        <div className="col-span-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={services[active].title}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4
                className="text-[#002F67] text-sm font-semibold 
              relative inline-block after:absolute after:left-0 after:bottom-0 
after:h-[2px] after:w-full after:bg-[#002F67] 
after:scale-x-0 after:origin-left 
after:transition-transform after:duration-300 
hover:after:scale-x-100"
              >
                {services[active].title}
              </h4>

              <h2 className="text-xl font-extralight ml-4 my-2">
                {services[active].heading}
              </h2>
              <p className="font-semibold text-sm">
                {services[active].listTitle}
              </p>
              <ul className="list-disc">
                {services[active].list.map((i) => {
                  return <li className="text-sm ml-6">{i}</li>;
                })}{" "}
              </ul>
              <p className="text-gray-600 mt-2">{services[active].text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div> */}
      {/* RIGHT CONTENT */}
<div className="col-span-9 overflow-hidden">
  <motion.div
    className="flex w-full"
    animate={{ x: `-${active * 100}%` }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {services.map((service, index) => (
      <div
        key={index}
        className="min-w-full grid grid-cols-10 gap-8 items-center"
      >
        {/* IMAGE */}
        <div className="col-span-6 h-96">
          <img
            src={service.image}
            className="rounded-xl w-full h-96 object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="col-span-4">
          <h4 className="text-[#002F67] text-sm font-semibold">
            {service.title}
          </h4>

          <h2 className="text-xl font-extralight ml-4 my-2">
            {service.heading}
          </h2>

          <p className="font-semibold text-sm">
            {service.listTitle}
          </p>

          <ul className="list-disc">
            {service.list.map((item, i) => (
              <li key={i} className="text-sm ml-6">
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 mt-2">{service.text}</p>
        </div>
      </div>
    ))}
  </motion.div>
</div>
    </div>
  );
}
