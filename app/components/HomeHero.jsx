// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function HomeHero() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Parallax animation
//   const y = useTransform(scrollYProgress, [0, 1], [0, -600]);
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

//   // Overlay fade
//   const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

//   // Text color transition (optional)
//   const textColor = useTransform(
//     scrollYProgress,
//     [0, 0.5],
//     ["#002f67", "#ffffff"]
//   );

//   return (
//     <div ref={ref} className="h-[200vh] relative">

//       {/* Sticky Hero */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden">

//         {/* Background Image (Parallax) */}
//         <motion.img
//           src="/hero-bg-ani.jpg"
//           style={{ y, scale }}
//           className="absolute top-0 left-0 w-full h-[130%] object-cover z-0 will-change-transform"
//         />

//         {/* Dark Overlay */}
//         <motion.div
//           style={{ opacity: overlayOpacity }}
//           className="absolute inset-0 bg-[#002f67] z-0"
//         />

//         {/* Content */}
//         <div className="relative z-10 h-full w-full lg:px-16 md:px-12 px-4 grid grid-cols-5 pt-40">

//           <div className="col-span-3">
//             <motion.div
//               initial={{ opacity: 0, y: -40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//             >
//               <hr className="w-24 border border-[#FFC800]" />

//               <h1 className="text-7xl font-black my-8 leading-tight">
//                 <motion.span style={{ color: textColor }}>
//                   FIABLE
//                 </motion.span>
//                 <br />
//                 <span className="text-[#FFC800]">
//                   CONSTRUCTIONS
//                 </span>
//               </h1>

//               <motion.p
//                 style={{ color: textColor }}
//                 className="text-xl mr-40 opacity-80"
//               >
//                 We build strong, reliable spaces designed to last. From planning
//                 to completion, every project is delivered with precision and
//                 care.
//               </motion.p>

//               <div className="flex gap-4 mt-6">
//                 <button className="bg-[#FFC800] text-[#002F67] px-12 py-4 font-bold hover:rounded-md cursor-pointer transition">
//                   START PROJECT
//                 </button>

//                 <motion.button
//                   style={{ color: textColor, borderColor: textColor }}
//                   className="border px-12 py-4 font-bold hover:rounded-md cursor-pointer transition"
//                 >
//                   OUR EXPERTISE
//                 </motion.button>
//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// export default function HomeHero() {
//   const controls = useAnimation();
//   const [played, setPlayed] = useState(false);

//   useEffect(() => {
//     // 🔒 lock scroll
//     document.body.style.overflow = "hidden";

//     const handleScroll = async (e) => {
//       if (played) return;

//       e.preventDefault();
//       setPlayed(true);

//       // 🎬 Smooth expand animation
//       await controls.start({
//         top: 0,
//         height: "100vh",
//         borderRadius: "0rem",
//         transition: {
//           duration: 1.2,
//           ease: [0.25, 1, 0.5, 1], // smooth cubic
//         },
//       });

//       // 🔓 unlock scroll
//       document.body.style.overflow = "auto";
//     };

//     window.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, [played, controls]);

//   return (
//     <div className="relative h-[200vh] bg-white">

//       {/* HERO */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden">

//         {/* CONTENT */}
//         <div className="relative z-10 lg:px-16 md:px-12 px-4 pt-40 grid grid-cols-5">
//           <div className="col-span-3">
//             <h1 className="text-7xl font-black my-8">
//               <span className="text-[#002f67]">FIABLE</span>
//               <br />
//               <span className="text-[#FFC800]">CONSTRUCTIONS</span>
//             </h1>
//           </div>
//         </div>

//         {/* 🔥 IMAGE (CORRECTED) */}
//         <motion.img
//           src="/hero-bg-ani.jpg"
//           initial={{
//             top: "calc(100% - 80px)", // bottom strip
//             height: "80px",
//             borderTopLeftRadius: "1rem",
//             borderTopRightRadius: "1rem",

//           }}
//           animate={controls}
//           className="absolute left-0 w-full object-cover z-0"
//         />

//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function HomeHero() {
//   const ref = useRef(null);

//   // 🔥 Track scroll inside hero only
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   /**
//    * 🧠 Apple-style mapping
//    * First 30% scroll = animation
//    * Rest = normal scroll
//    */

//   // IMAGE EXPANSION
//   const top = useTransform(scrollYProgress, [0, 0.3], ["calc(100% - 80px)", "0%"]);
//   const height = useTransform(scrollYProgress, [0, 0.3], ["80px", "100vh"]);
//   const radius = useTransform(scrollYProgress, [0, 0.3], ["1rem", "0rem"]);

//   // TEXT COLOR CHANGE
//   const textColor = useTransform(
//     scrollYProgress,
//     [0, 0.3],
//     ["#002f67", "#ffffff"]
//   );

//   return (
//     <div ref={ref} className="relative h-[200vh] bg-white">

//       {/* HERO */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden">

//         {/* 🔥 IMAGE */}
//         <motion.img
//           src="/hero-bg-ani.jpg"
//           style={{
//             top,
//             height,
//             borderTopLeftRadius: radius,
//             borderTopRightRadius: radius,
//           }}
//           className="absolute left-0 w-full object-cover z-0"
//         />

//         {/* 🔥 CONTENT */}
//         <div className="relative z-10 lg:px-16 md:px-12 px-4 pt-40 grid grid-cols-5">
//           <div className="col-span-3">

//             <motion.h1
//               style={{ color: textColor }}
//               className="text-7xl font-black my-8 transition-colors"
//             >
//               FIABLE <br /> CONSTRUCTIONS
//             </motion.h1>

//             <motion.p
//               style={{ color: textColor }}
//               className="text-xl"
//             >
//               We build strong, reliable spaces designed to last.
//             </motion.p>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function HomeHero() {
//   const ref = useRef(null);

//   // Track scroll
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Animation range (first 30% scroll)
//   const range = [0, 0.3];

//   // Image animation
//   const height = useTransform(scrollYProgress, range, ["80px", "100vh"]);
//   const radius = useTransform(scrollYProgress, range, ["1rem", "0rem"]);

//   // Text color change
//   const textColor = useTransform(
//     scrollYProgress,
//     range,
//     ["#002f67", "#ffffff"]
//   );

//   return (
//     <div ref={ref} className="relative h-[200vh] bg-white">

//       {/* HERO */}
//       <div className="sticky top-0 h-screen w-full overflow-hidden relative">

//         {/* 🔥 IMAGE (BOTTOM STRIP → FULL) */}
//         <motion.img
//           src="/hero-bg-ani.jpg"
//           alt=""
//           initial={{
//             height: "80px",
//             bottom: 0,
//             borderTopLeftRadius: "1rem",
//             borderTopRightRadius: "1rem",
//           }}
//           style={{
//             height,
//             bottom: 0,
//             borderTopLeftRadius: radius,
//             borderTopRightRadius: radius,
//           }}
//           className="absolute left-0 w-full object-cover z-0"
//         />

//         {/* 🔥 CONTENT */}
//         <div className="relative z-10 lg:px-16 md:px-12 px-6 pt-40 grid grid-cols-5">
//           <div className="col-span-3">

//             <motion.h1
//               style={{ color: textColor }}
//               className="text-7xl font-black my-8 leading-tight"
//             >
//               FIABLE <br />
//               <span className="text-[#FFC800]">CONSTRUCTIONS</span>
//             </motion.h1>

//             <motion.p
//               style={{ color: textColor }}
//               className="text-xl max-w-xl"
//             >
//               We build strong, reliable spaces designed to last. From planning
//               to completion, every project is delivered with precision and care.
//             </motion.p>

//             <div className="flex gap-4 mt-8">
//               <button className="bg-[#FFC800] text-[#002F67] px-10 py-4 font-bold">
//                 START PROJECT
//               </button>

//               <button className="border border-[#002f67] text-[#002f67] px-10 py-4 font-bold">
//                 OUR EXPERTISE
//               </button>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";

// export default function HomeHero() {
//   const { scrollY } = useScroll();

//   const smooth = useSpring(scrollY, {
//     stiffness: 80,
//     damping: 20,
//   });

//   // control animation range
//   const height = useTransform(smooth, [0, 400], ["80px", "100vh"]);
//   const radius = useTransform(smooth, [0, 400], ["1rem", "0rem"]);

//   const textColor = useTransform(
//     smooth,
//     [0, 400],
//     ["#002f67", "#ffffff"]
//   );

//   return (
//     <div className="relative h-[200vh] bg-white">

//       {/* HERO */}
//       <div className="sticky top-0 min-h-screen w-full overflow-hidden relative">

//         {/* ✅ IMAGE CONTAINER (KEY FIX) */}

//         {/* CONTENT */}
//         <div className="relative z-10 lg:px-16 md:px-12 px-6 pt-40 grid grid-cols-5">
//           <div className="col-span-3">

//             <motion.h1
//               style={{ color: textColor }}
//               className="text-7xl font-black my-8 leading-tight"
//             >
//               FIABLE <br />
//               <span className="text-[#FFC800]">CONSTRUCTIONS</span>
//             </motion.h1>

//             <motion.p
//               style={{ color: textColor }}
//               className="text-xl max-w-xl"
//             >
//               We build strong, reliable spaces designed to last.
//             </motion.p>

//           </div>
//         </div>
//  <motion.div
//           style={{
//             height,
//             borderTopLeftRadius: radius,
//             borderTopRightRadius: radius,
//           }}
//           className="absolute bottom-0 left-0 w-full overflow-hidden z-0"
//         >
//           <img
//             src="/hero-bg-ani.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  const { scrollY } = useScroll();

  const smooth = useSpring(scrollY, {
    stiffness: 60,
    damping: 25,
  });

  // IMAGE ANIMATION

  const height = useTransform(smooth, [0, 400], ["40px", "100vh"]);

  // 👇 IMPORTANT CHANGE
  const y = useTransform(smooth, [0, 400], ["60%", "0%"]);

  const radius = useTransform(smooth, [0, 400], ["1rem", "0rem"]);

  // TEXT COLOR CHANGE
  const blueColor = useTransform(smooth, [0, 400], ["#002f67", "#ffffff"]);
  const yellowColor = useTransform(smooth, [0, 400], ["#FFC800", "#ffffff"]);

  return (
    <div className="relative h-[200vh] ">
      {/* STICKY HERO */}
      <div className="sticky top-0 min-h-screen w-full overflow-hidden relative bg-[url('/wallTexture-3.jpg')] bg-center bg-cover">
        {/* CONTENT */}
        <div className="relative z-10 lg:px-16 md:px-12 px-6 pt-40 grid grid-cols-5">
          <div className="col-span-5">
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
            <motion.hr
              style={{ borderColor: yellowColor }}
              className="border lg:w-24 md:w-24 w-12"
            />
            <motion.h1
              style={{ color: blueColor }}
              className="lg:text-7xl md:text-7xl text-3xl font-black lg:my-8 md:my-8 my-4 leading-tight"
            >
              FIABLE <br />
              <motion.span style={{ color: yellowColor }}>CONSTRUCTIONS</motion.span>
            </motion.h1>

            <motion.p
              style={{ color: blueColor }}
              className="lg:text-xl md:text-xl lg:mr-[50vw] md:mr-40"
            >
              We build strong, reliable spaces designed to last. From planning
                to completion, every project is delivered with precision and
                care.
            </motion.p>

            {/* BUTTONS */}
            <div className="lg:flex md:flex  gap-4 lg:mt-6 md:mt-6 mt-2">
              <Link href={"/contact"}>
               <button className="bg-[#FFC800] px-12 py-4 lg:w-fit md:w-fit w-full cursor-pointer hover:rounded-md  text-[#002f67] font-semibold">
                START PROJECT
              </button>
              </Link>
              <Link href={"/about"}>
             
              <motion.button
                style={{
                  borderColor: blueColor,
                  color: blueColor,
                }}
                className="px-12 py-4 cursor-pointer hover:rounded-md lg:w-fit md:w-fit w-full lg:mt-0 md:mt-0 mt-2 font-semibold border"
              >
                OUR EXPERTISE
              </motion.button></Link>
            </div>
            </motion.div>
          </div>
        </div>

        {/* IMAGE (PARALLAX ELEMENT) */}
        <motion.div
        
          style={{
            height,
            y,
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius,
          }}
         
          className="absolute bottom-0 left-0 w-full  overflow-hidden z-0"
        >
          {/* Optional overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20 z-10" />

          <img
            src="/hero-bg-ani.jpg"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
