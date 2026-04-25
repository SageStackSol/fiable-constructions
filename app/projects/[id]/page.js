"use client";
import { useParams } from "next/navigation";
import { useEffect, useState ,useRef} from "react";

export default function Page() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [project, setProject] = useState(null);
  const [open, setOpen] = useState(false);
  const [desOpen, setDesOpen] = useState(false);
  const images = project?.images || [];
  const [current, setCurrent] = useState(0);
  const [offset, setOffset] = useState(0);
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
useEffect(() => {
  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // if (!images.length) {
  //   return <p className="text-center h-screen flex items-center ">No images available</p>;
  // }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ✅ Keyboard support
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);
  const containerRef = useRef(null);
const [cardWidth, setCardWidth] = useState(0);

useEffect(() => {
  if (containerRef.current) {
    const card = containerRef.current.querySelector("img");
    if (card) {
      setCardWidth(card.offsetWidth + 32); // image width + gap
    }
  }
}, [images]);
  const handleClose = () => setDesOpen(false);
  // fetch project
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/projects/${id}`);
      const data = await res.json();

      setProject(data);
      setLoading(false);

      // 👇 preload image
      const img = new Image();
      img.src = data.mainImage;
      img.onload = () => {
        setImageLoaded(true);
      };
    };

    fetchData();
  }, []);

  if (!project) return <p className="p-10">Loading...</p>;
  {
    console.log(project);
  }

  return (
    <>
      <div
        className="w-full h-screen transition-all duration-700 flex items-end lg:px-16 lg:py-12 md:px-16 md:py-12 p-4"
        style={
          imageLoaded
            ? {
                backgroundImage: `url(${project?.mainImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : {
                backgroundImage: "url('/projects-bg.png')", // 👈 your generated image
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
        }
      >
        <div
          onClick={() => setOpen(true)}
          className={`relative lg:h-52 md:h-52 h-40 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow
      ${open ? "lg:w-[60vw] md:w-[60vw] w-full bg-white rounded-l-2xl rounded-br-2xl" : "lg:w-40 md:w-40 w-20 bg-gray-200 rounded-2xl "}
      `}
        >
          {/* CLOSE */}
          {open && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute -top-8 py-2 px-4 text-[#002f67] bg-white right-0 rounded-t-2xl text-sm font-semibold cursor-pointer"
            >
              Close
            </button>
          )}

          {/* SMALL STATE (DOTS) */}
          {!open && (
            <div className="flex flex-col justify-between h-full items-center  group">
             <p className="pt-4"> Click Here</p>
              <div className="grid grid-cols-2 gap-3 pb-20">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="w-1 h-1 bg-[#002f67] rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"
                  />
                ))}
              </div>
            </div>
          )}

          {/* EXPANDED CONTENT */}
          {open && (
            <div className="grid grid-cols-3 h-full">
              {/* LEFT */}
              <div className="lg:p-6 md:p-6 px-4 flex flex-col justify-center lg:col-span-2 md:col-span-2 col-span-3">
                <p className="text-[#002f67] font-bold tracking-widest text-xs">
                  {project.clientLocation}
                </p>
                <h1 className="text-2xl font-medium lg:mt-2 md:mt-2">{project.title}</h1>
              </div>

              {/* RIGHT */}
              <div className="border-l border-gray-300 lg:col-span-1 md:col-span-1 col-span-3 flex flex-col ">
                <div
                  onClick={() => {
                    setDesOpen(!desOpen);
                  }}
                  className="flex-1 hover:text-[#002f67] text-gray-400 flex items-center px-6  border-b border-gray-300 gap-2 hover:gap-6 transform duration-500"
                >
                  <p className=" font-medium  tracking-widest text-sm">
                    PROJECT SPECS
                  </p>
                  {/* <span className="text-[#ffc800] text-xl">→</span> */}
                  <img src="/right.png" className="w-6 " />
                </div>

                <div onClick={() => scrollToSection("scrollBelow")}  className="flex-1 flex items-center text-gray-400  px-6 lg:py-0 md:py-0 py-2 hover:text-[#002f67] font-medium text-sm">
                  Discover the story
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div
        className={`fixed top-0 right-0 h-screen w-[40vw] bg-[#002f67] z-1000 shadow-lg transform transition-transform duration-300 ${
          desOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col  gap-4">
          <button
            className="text-right text-white cursor-pointer text-4xl font-extralight"
            onClick={handleClose}
          >
            x
          </button>
        </div>
      </div> */}

        {/* BACKDROP */}
        <div
          onClick={handleClose}
          className={`fixed inset-0 bg-black/30 z-[999] transition-opacity duration-300 ${
            desOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* DRAWER */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 h-screen lg:w-[40vw] md:w-[40vw] w-[95vw] bg-[#002f67] z-[1000] shadow-lg
  transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
  ${desOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="">
            <div className="grid grid-cols-4 items-center border-b border-gray-50/20 ">
              <p className="col-span-3 font-bold text-white  px-6 py-4">
                PROJECT OVERVIEW
              </p>
              <button
                className=" text-white cursor-pointer text-4xl font-thin px-6 py-4 border-gray-50/20 border-l text-center"
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <div className="grid grid-cols-2">
              <div className="border-x border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
                <h6 className="font-bold mb-1">CLIENT NAME</h6>
                <p className="text-lg">{project.clientName}</p>
              </div>
              <div className="border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
                <h6 className="font-bold mb-1">CLIENT LOCATION</h6>
                <p className="text-lg">{project.clientLocation}</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="border-x border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
                <h6 className="font-bold mb-1">CLIENT INDUSTRY</h6>
                <p className="text-lg">{project.clientIndustry}</p>
              </div>
              <div className="border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
                <h6 className="font-bold mb-1">OVER VIEW</h6>
                <p className="text-lg">{project.overview}</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="border-x border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
                <h6 className="font-bold mb-1">SCOPE OF WORK</h6>
                <p className="text-lg">{project.scopeOfWork}</p>
              </div>
              <div className="border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
                <h6 className="font-bold mb-1">SIZE</h6>
                <p className="text-lg">{project.size}</p>
              </div>
            </div>
            <div className="border-x border-b border-gray-50/20 text-white lg:p-10 md:p-10 p-4">
              <h6 className="font-bold mb-1">YEAR COMPLETED</h6>
              <p className="text-lg">{project.yearCompleted}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full  overflow-hidden rounded-2xl my-24">
       <h2 id="scrollBelow" className="text-center pt-20 mb-8 text-xl font-extralight text-[#002f67]"> {project.description}</h2> 
        <div className="px-6 pb-6 flex justify-between items-center">
          <h2 className="font-light lg:text-5xl md:text-5xl text-3xl text-[#002f67]">GALLERY</h2>
          <div className="flex gap-2">
            <div
              onClick={prevSlide}
              className="bg-[#002f67] p-4 rounded-full cursor-pointer "
            >
              <img src="/right.png" className="w-6 rotate-180 " />
            </div>
            <div
              onClick={nextSlide}
              className="bg-[#002f67] p-4 rounded-full cursor-pointer"
            >
              <img src="/right.png" className="w-6" />
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div
           ref={containerRef}
  className="flex gap-8 transition-transform duration-500 ease-in-out"
  style={{
    transform: `translateX(-${current * cardWidth}px)`
  }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="lg:w-[60vw] md:w-[60vw] w-[90vw] object-cover mx-4 rounded-4xl h-[60vh] flex-shrink-0"
            />
          ))}
        </div>

        {/* DOTS */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                i === current ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div> */}
      </div>

       {/* VIDEO */}
    {project.video && (
      <div className="my-24 flex justify-center items-center">

 <video
        src={project.video}
        controls
        className="w-[60vw] rounded"
      />
      </div>
     
    )}
    </>
  );
}

// {/* DETAILS GRID */}
//     {/* <div className="grid grid-cols-2 gap-4 mb-8">
//       <p><b>Year:</b> {project.yearCompleted}</p>
//       <p><b>Client:</b> {project.clientName}</p>
//       <p><b>Location:</b> {project.clientLocation}</p>
//       <p><b>Industry:</b> {project.clientIndustry}</p>
//       <p><b>Scope:</b> {project.scopeOfWork}</p>
//       <p><b>Size:</b> {project.size}</p>
//     </div> */}
// {/* GALLERY */}
//     {/* <div className="grid grid-cols-3 gap-4 mb-8">
//       {project.images?.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           className="h-48 w-full object-cover rounded"
//         />
//       ))}
//     </div> */}

   
