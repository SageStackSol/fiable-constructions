"use client";

import { motion, useScroll,useTransform} from "framer-motion";
import ServicesSection from "../components/servicesSlider";
import { useRef, useEffect, useState } from "react";
import HomeHero from "../components/HomeHero";

export default function Page() {
 const [current, setCurrent] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);

  const data = [
    {
      img: "/architecture.png",
      title: "Architectural Design",
      desc: "We create innovative and practical designs that combine functionality, aesthetics, and structural safety.",
      points: [
        "House plans and layout design",
         "2D floor plans and working drawings",
      "3D elevation designs",
      "Interior space planning",
      "Structural drawings",
      "Building approval drawings",
      ],
    },
    {
      img:"/consultation.png",
      title:  "Construction Consultation",
      desc: "Expert advice to ensure smarter decisions and smoother construction.",
      points: [
         "Site analysis and feasibility study",
      "Construction planning",
      "Material selection guidance",
      "Cost estimation and budgeting",
      "Structural advice",
      "Contractor coordination",
      ],
    },
    {
      img: "/execution.png",
      title: "Construction Execution",
      desc: "Seamless construction execution from foundation to completion.",
      points: [
        "Residential building construction",
      "Commercial building construction",
      "Renovation and remodeling",
      "Turnkey project management",
      "Quality supervision",
      "Labor and contractor coordination",
      ],
    },
  ];
  
// TOUCH EVENTS
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) {
      // swipe left
      setCurrent((prev) => (prev + 1) % data.length);
    } else if (diff < -50) {
      // swipe right
      setCurrent((prev) => (prev - 1 + data.length) % data.length);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-28 ">

<HomeHero />




         {/* hero-img-ani*/}
{/* <div ref={ref} className="h-[200vh] relative">
 <div className="sticky top-0 lg:px-16 md:px-12 px-4 h-screen w-full overflow-hidden lg:grid md:grid hidden pt-40 grid-cols-5 gap-6 items-center justify-center">
          <div className="relative z-10 col-span-3">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="w-24 border border-[#FFC800]"></hr>
              <h1 className="text-7xl font-black my-8">
                <span className=" text-[#002f67]">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-[#002f67] text-xl mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-[#FFC800] text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-[#002f67] text-[#002f67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
   <motion.img
  src="/hero-bg-ani.jpg"
  style={{ y, scale }}
  className="absolute top-0 left-0 w-full h-[120%] object-cover will-change-transform"
/>
        </div>
</div> */}
         
        
     

           
        {/* hero */}
        {/* <div className="relative h-screen w-full px-16 py-20 overflow-hidden bg-[#002F67] lg:grid md:grid hidden grid-cols-5 items-center justify-center">
          <div className="col-span-3 ">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="lg:w-24 md:w-24 w-12 border border-[#FFC800]"></hr>
              <h1 className="lg:text-7xl md:text-7xl text-3xl font-black lg:my-8 md:my-8 my-2">
                <span className=" text-white">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-white/68 lg:text-xl md:text-xl lg:mr-40 md:mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="lg:flex md:flex  gap-4 lg:mt-6 md:mt-6">
                <button className="bg-[#FFC800] text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-white/52 text-white px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 col-span-5">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <img
                className="h-[76vh] relative transition duration-700 hover:scale-105"
                src="home-hero-2.jpg"
              />
              <div className="bg-white shadow-xl transition hover:scale-105 w-fit px-8 py-4 text-center text-black/60 absolute right-0 bottom-10">
                <p>
                  <span className="text-[#002F67] font-black text-5xl">8+</span>
                  <br />
                  YEARS EXCELLENCE
                </p>
              </div>
            </motion.div>
          </div>
        </div> */}
        {/* hero mobile */}
        <div className="relative p-4 w-full overflow-hidden bg-[#002F67] lg:hidden md:hidden grid grid-cols-5 items-center justify-center">
          <div className="lg:col-span-2 md:col-span-2 col-span-5 pt-24">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <img className="h-[60vh] relative " src="home-hero-2.jpg" />
              <div className="bg-white w-fit px-8 py-4 text-center text-black/60 absolute right-0 bottom-10">
                <p>
                  <span className="text-[#002F67] font-black text-3xl">8+</span>
                  <br />
                  YEARS EXCELLENCE
                </p>
              </div>
            </motion.div>
          </div>
          <div className=" col-span-5 pt-4">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="lg:w-24 md:w-24 w-12 border border-[#FFC800]"></hr>
              <h1 className="lg:text-7xl md:text-7xl text-3xl font-black lg:my-8 md:my-8 my-2">
                <span className=" text-white">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-white/68 lg:text-xl md:text-xl lg:mr-40 md:mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="lg:flex md:flex  gap-4 lg:mt-6 md:mt-6">
                <button className="bg-[#FFC800] text-[#002F67] w-full mt-2 px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-white/52 w-full mt-2 text-white px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* hero */}
        {/* <div className="relative lg:px-16 md:px-12 px-4 h-screen w-full overflow-hidden lg:grid md:grid hidden  grid-cols-5 items-center justify-center">
          <div className=" col-span-3">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="w-24 border border-[#FFC800]"></hr>
              <h1 className="text-7xl font-black my-8">
                <span className=" text-[#002f67]">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-[#002f67] text-xl mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="flex gap-4 mt-6">
                <button className="bg-[#FFC800] text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-[#002f67] text-[#002f67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
          <div className="col-span-2">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <img
                className="h-[76vh] relative transition duration-700 hover:scale-105"
                src="home-hero-2.jpg"
              />
              <div className="bg-[#002F67] w-fit shadow-xl transition hover:scale-105 px-8 py-4 text-center text-white absolute right-0 bottom-10">
                <p>
                  <span className="text-white font-black text-5xl">8+</span>
                  <br />
                  YEARS EXCELLENCE
                </p>
              </div>
            </motion.div>
          </div>
        </div> */}
        {/* hero mobile */}
        <div className="relative p-4 w-full overflow-hidden lg:hidden md:hidden grid grid-cols-5 items-center justify-center">
          <div className="lg:col-span-2 md:col-span-2 col-span-5 pt-24">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <img className="h-[60vh] relative " src="home-hero-2.jpg" />
              <div className="bg-white w-fit px-8 py-4 text-center text-black/60 absolute right-0 bottom-10">
                <p>
                  <span className="text-[#002F67] font-black text-3xl">8+</span>
                  <br />
                  YEARS EXCELLENCE
                </p>
              </div>
            </motion.div>
          </div>
          <div className=" col-span-5 pt-4">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="lg:w-24 md:w-24 w-12 border border-[#FFC800]"></hr>
              <h1 className="lg:text-7xl md:text-7xl text-3xl font-black lg:my-8 md:my-8 my-2">
                <span className=" text-[#002F67]">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-[#002F67] lg:text-xl md:text-xl lg:mr-40 md:mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="lg:flex md:flex  gap-4 lg:mt-6 md:mt-6">
                <button className="bg-[#FFC800] text-[#002F67] w-full mt-2 px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-[#002F67]/52 w-full mt-2 text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        {/* hero-3 */}
        {/* <div className="relative h-screen w-full px-16 py-20 overflow-hidden bg-[url('/building.jpg')] lg:grid md:grid hidden grid-cols-5 items-center justify-center">
          <div className="col-span-3 ">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="lg:w-24 md:w-24 w-12 border border-[#FFC800]"></hr>
              <h1 className="lg:text-7xl md:text-7xl text-3xl font-black lg:my-8 md:my-8 my-2">
                <span className=" text-white">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-white/68 lg:text-xl md:text-xl lg:mr-40 md:mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="lg:flex md:flex  gap-4 lg:mt-6 md:mt-6">
                <button className="bg-[#FFC800] text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-white/52 text-white px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 col-span-5">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <img
                className="h-[76vh] relative transition duration-700 hover:scale-105"
                src="home-hero-2.jpg"
              />
              <div className="bg-white shadow-xl transition hover:scale-105 w-fit px-8 py-4 text-center text-black/60 absolute right-0 bottom-10">
                <p>
                  <span className="text-[#002F67] font-black text-5xl">8+</span>
                  <br />
                  YEARS EXCELLENCE
                </p>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* hero-4 */}
        {/* <div className="relative h-screen w-full px-16 py-20 overflow-hidden bg-[url('/building.jpg')] bg-cover lg:grid md:grid hidden grid-cols-5 items-center justify-center">
          <div className="col-span-3 ">
            <motion.div
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="relative z-10 "
            >
              <hr className="lg:w-24 md:w-24 w-12 border border-[#FFC800]"></hr>
              <h1 className="lg:text-7xl md:text-7xl text-3xl font-black lg:my-8 md:my-8 my-2">
                <span className=" text-white">FIABLE</span>
                <br />
                <span className="text-[#FFC800]">CONSTRUCTIONS</span>
              </h1>

              <p className="text-white/68 lg:text-xl md:text-xl lg:mr-40 md:mr-40">
                We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.{" "}
              </p>
              <div className="lg:flex md:flex  gap-4 lg:mt-6 md:mt-6">
                <button className="bg-[#FFC800] text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  START PROJECT
                </button>
                <button className=" border border-white/52 text-white px-12 py-4 font-bold hover:rounded-md cursor-pointer">
                  OUR EXPERTISE
                </button>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* about us */}

        <div className=" lg:px-16 md:px-12 px-4">
          <div className="grid grid-cols-5 gap-6 my-12">
            <img
              className="lg:col-span-2 md:col-span-2 col-span-5 h-full shadow-lg shadow-gray-600 rounded-2xl"
              src="/home-about-us.png"
            />
            <div className="lg:col-span-3 md:col-span-3 col-span-5">
              <p className="text-black/60 font-medium">
                THE BLUEPRINT AUTHORITY
              </p>
              <h2 className="font-black text-[#FFC800] lg:text-5xl md:text-5xl text-3xl my-4">
                BUILDING EXCELLENCE THROUGH EXPERIENCE
              </h2>
              <p>
                {/* We are a professional construction freelancing service
                specializing in architectural design, structural planning,
                project consultation, and complete construction execution. Our
                mission is to transform ideas into well-designed, durable, and
                cost-efficient structures that meet modern standards.
                <br />
                From concept planning to final construction, we provide reliable
                guidance and professional solutions for residential, commercial,
                and renovation projects. */}
                Since our inception, we have remained committed to delivering
                excellence in architectural design, structural planning, and
                construction services. <br />
                We don’t just build; we transform ideas into durable,
                cost-efficient, and modern structures. Our approach combines
                technical expertise with innovative design to ensure every
                project meets the highest standards of quality and
                functionality.
                <br />
                From concept planning to final execution, we provide reliable
                guidance and professional solutions for residential, commercial,
                and renovation projects.
              </p>
              {/* <br /> */}
              <button className="mt-2 bg-[#FFC800] text-black mr-2 px-6 py-2 rounded-md ">
                100+ Projects Delivered
              </button>
              <button className="mt-2 bg-[#FFC800]  text-black mr-2 px-6 py-2 rounded-md ">
                90+ Trusted Partnerships
              </button>
              <button className="mt-2 bg-[#FFC800] text-black mr-2 px-6 py-2 rounded-md ">
                350 +Designs & Plans Executed
              </button>
              <button className="mt-2 bg-[#FFC800] text-black mr-2 px-6 py-2 rounded-md ">
                8+ Years of Structural Excellence
              </button>
            </div>
          </div>
        </div>
        {/* our services */}
        <div className=" lg:px-16 md:px-12 px-4 bg-[#F7F7F7] py-12">
          <p className="text-black/60 font-medium">CORE COMPETENIES</p>
          <div className="flex items-center gap-4 my-4">
            <h2 className="lg:text-5xl md:text-5xl text-2xl text-[#002F67] font-black text-nowrap">
              OUR SERVICES
            </h2>
            {/* <hr className=" bg-linear-to-r from-yellow-400 to-black"/> */}
            <div className="h-1 w-full bg-linear-to-r from-[#002F67] to-[#E6E6E6]"></div>
          </div>
          <div className="my-12 lg:flex md:flex hidden">
            <ServicesSection />
          </div>
          {/* <div className="bg-white p-4 rounded lg:hidden md:hidden">
            <img src="/architecture.png" />

            <h4 className="text-[#002F67] text-sm font-semibold my-2">
              Architectural Design
            </h4>

            <h2 className=" font-extralight ml-4 my-2">
              We create innovative and practical designs that combine
              functionality, aesthetics, and structural safety.
            </h2>

            <p className="font-semibold text-sm">
              Our design services include:
            </p>

            <ul className="list-disc">
              <li>House plans and layout design</li>
              <li>2D floor plans and working drawings</li>
              <li>3D elevation designs</li>
              <li>Interior space planning</li>
              <li>Structural drawings</li>
              <li>Building approval drawings</li>
            </ul>

            <p className="text-gray-600 mt-2">
              Our goal is to design spaces that are efficient, modern, and
              tailored to your lifestyle or business needs.{" "}
            </p>
          </div>
          <div className="bg-white p-4 rounded lg:hidden md:hidden my-4">
            <img src="/consultation.png" />

            <h4 className="text-[#002F67] text-sm font-semibold my-2">
              Construction Consultation
            </h4>

            <h2 className=" font-extralight ml-4 my-2">
              Expert advice to ensure smarter decisions and smoother
              construction.
            </h2>

            <p className="font-semibold text-sm">Consultation includes:</p>

            <ul className="list-disc">
              <li>Site analysis and feasibility study</li>
              <li>Construction planning</li>
              <li>Material selection guidance</li>
              <li>Cost estimation and budgeting</li>
              <li>Structural advice</li>
              <li>Contractor coordination</li>
            </ul>

            <p className="text-gray-600 mt-2">
              We ensure your project follows quality standards, safety
              regulations, and budget limits.
            </p>
          </div>
          <div className="bg-white p-4 rounded lg:hidden md:hidden">
            <img src="/execution.png" />

            <h4 className="text-[#002F67] text-sm font-semibold my-2">
              Construction Execution
            </h4>

            <h2 className=" font-extralight ml-4 my-2">
              Seamless construction execution from foundation to completion.
            </h2>

            <p className="font-semibold text-sm">
              Our execution services include:
            </p>

            <ul className="list-disc">
              <li>Residential building construction</li>
              <li>Commercial building construction</li>
              <li>Renovation and remodeling</li>
              <li>Turnkey project management</li>
              <li>Quality supervision</li>
              <li>Labor and contractor coordination</li>
            </ul>

            <p className="text-gray-600 mt-2">
              We focus on timely delivery, quality workmanship, and cost
              efficiency.
            </p>
          </div> */}
            <div className="lg:hidden md:hidden w-full">
{/* DOTS */}
      <div className="flex justify-center gap-2 my-2">
        {data.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className="w-3 h-3 rounded-full cursor-pointer"
            style={{
              backgroundColor:
                current === i ? "#ffc800" : "#002f67",
            }}
          />
        ))}
      </div>
      {/* CARDS */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {data.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white p-4 rounded shadow">
                <img src={item.img} />

                <h4 className="text-[#002F67] text-md font-bold my-2">
                  {item.title}
                </h4>

                <h2 className="font-extralight ml-2 my-2">
                  {item.desc}
                </h2>

                <p className="font-semibold text-sm">
                  Our execution services include:
                </p>

                <ul className="list-disc ml-5">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
        </div>

        {/* our projects */}

        {/* our projects */}
        <div className=" lg:px-16 md:px-12 px-4">
          <div className="flex flex-col items-center gap-4 my-4">
            <p className="text-black/60 font-medium">FEATURED WORKS</p>
            <h2 className="lg:text-5xl md:text-5xl text-2xl text-[#FFC800] font-black text-nowrap ">
              <span
              // className="[-webkit-text-stroke:1px_#002f67]"
              >
                OUR PROJECTS
              </span>
            </h2>
            {/* <hr className=" bg-linear-to-r from-yellow-400 to-black"/> */}
          </div>

          <div className="my-12 grid grid-cols-3 gap-2">
            <div className="group relative overflow-hidden  w-full h-56 cursor-pointer lg:col-span-2 md:col-span-2 col-span-3">
              <img
                src="/home-hero-1.jpg"
                className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-700 group-hover:opacity-0"></div>

              <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-2xl font-light leading-tight">
                  <span className="text-xs font-semibold text-[#FFC800]">
                    {" "}
                    Home
                  </span>{" "}
                  <br /> Design
                </h2>
              </div>
            </div>
            <div className="group relative overflow-hidden  w-full h-56 cursor-pointer lg:col-span-1 md:col-span-1 col-span-3 ">
              <img
                src="/home-hero-1.jpg"
                className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-700 group-hover:opacity-0"></div>

              <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-2xl font-light leading-tight">
                  <span className="text-xs font-semibold text-[#FFC800]">
                    {" "}
                    Home
                  </span>{" "}
                  <br /> Design
                </h2>
              </div>
            </div>
            <div className="group relative overflow-hidden  w-full h-56 cursor-pointer lg:col-span-1 md:col-span-1 col-span-3 ">
              <img
                src="/home-hero-1.jpg"
                className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-700 group-hover:opacity-0"></div>

              <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-2xl font-light leading-tight">
                  <span className="text-xs font-semibold text-[#FFC800]">
                    {" "}
                    Home
                  </span>{" "}
                  <br /> Design
                </h2>
              </div>
            </div>
            <div className="group relative overflow-hidden  w-full h-56 cursor-pointer lg:col-span-2 md:col-span-2 col-span-3">
              <img
                src="/home-hero-1.jpg"
                className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 transition-opacity duration-700 group-hover:opacity-0"></div>

              <div className="absolute bottom-6 left-6 text-white transition-all duration-700 group-hover:opacity-0 group-hover:translate-y-4">
                <h2 className="text-2xl font-light leading-tight">
                  <span className="text-xs font-semibold text-[#FFC800]">
                    {" "}
                    Home
                  </span>{" "}
                  <br /> Design
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:px-16 md:px-12 px-4 py-12 bg-[#F7F7F7]">
          <div className="flex items-center gap-4">
            <h2 className="lg:text-5xl md:text-5xl text-2xl font-black text-nowrap">
              <span className="text-[#002F67]">TESTIMONIALS</span>
            </h2>
            <div className="h-1 w-full bg-linear-to-r from-[#002F67] to-[#E6E6E6]"></div>
          </div>
          <div className="grid grid-cols-2 gap-6 items-center my-12">
            <h2 className="lg:col-span-1 md:col-span-1 col-span-2 font-bold text-6xl text-[#FFC800]/60 leading-1">
              &ldquo; <br />{" "}
              <span className="text-[#002F67] text-xl font-medium ">
                Hear from our clients about their experiences working with us on
                their most ambitious projects.
              </span>
            </h2>
            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex flex-col gap-8">
              <div className="border-l-4 border-[#FFC800] lg:h-44 md:h-44  px-4 py-2 shadow-gray-300 shadow-xl flex flex-col justify-between">
                <p>
                  &ldquo; Fiable Constructions transformed our vision into
                  reality. Their attention to safety and timeline management was
                  refreshing in this industry. Truly professional &ldquo;
                </p>
                <div className="flex gap-4">
                  <div className="bg-[#002F68] w-11 h-11 flex justify-center items-center">
                    <h2 className="text-white font-semibold m-0">G</h2>
                  </div>
                  <p>
                    <span className="font-bold">-Gajala </span>
                    <br />
                    CEO, Sonic Solutions
                  </p>
                </div>
              </div>{" "}
              <div className="border-l-4 border-[#002F67] lg:h-44 md:h-44  px-4 py-2 shadow-gray-300 shadow-xl flex flex-col justify-between">
                <p>
                  &ldquo; Fiable Constructions transformed our vision into
                  reality. Their attention to safety and timeline management was
                  refreshing in this industry. Truly professional &ldquo;
                </p>
                <div className="flex gap-4">
                  <div className="bg-[#ffc800] w-11 h-11 flex justify-center items-center">
                    <h2 className="text-white font-semibold m-0">G</h2>
                  </div>
                  <p>
                    <span className="font-bold">-Gajala </span>
                    <br />
                    CEO, Sonic Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" lg:px-16 md:px-12 px-4 flex flex-col items-center gap-2 mb-30">
          <h2 className="lg:text-5xl md:text-5xl text-2xl font-bold text-[#ffc800] text-center">
            Ready to start your next landmark?
          </h2>
          <p className="text-center lg:text-lg md:text-lg text-gray-600 lg:mt-4 md:mt-4">
            Get a Comprehensive estimate and project timeline from our expert
            engineers today.
          </p>
          <button className="bg-black font-bold text-sm px-6 hover:rounded-md py-3 cursor-pointer text-[#ffc800]">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

// <div className="relative h-screen w-full overflow-hidden bg-[#002F67] grid items-center justify-center">

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: -40,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             delay: 1.2,
//             duration: 0.8,
//           }}
//           className="relative z-10 text-center"
//         >
//            <hr className="w-24 border border-[#FFC800]"></hr>
//           <h1 className="text-7xl font-black">
//             <span className="text-[#FFC800]">FIABLE</span>
//             <br />
//             <span className="text-white">CONSTRUCTIONS</span>
//           </h1>

//           <p className="text-white mt-3 px-72">
//             We build strong, reliable spaces designed to last. From planning
//             to completion, every project is delivered with precision and
//             care.{" "}
//           </p>

//           <button className="mt-6 bg-black text-[#FFC800] px-6 py-2 rounded-md ">
//             LET'S CONNECT
//           </button>
//         </motion.div>
//       </div>
