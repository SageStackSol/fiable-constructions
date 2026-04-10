"use client"
import React,{useState} from "react";

function Page() {
   const [hover, setHover] = useState(false);
   const [hover4, setHover4] = useState(false);

  return (
    <>
    
      {/* hero-2 */}
      <div className="bg-[url('/about-hero-bg2.png')] bg-center bg-cover grid grid-cols-2 h-screen w-screen items-center lg:px-16 md:px-16 p-4 lg:py-20 md:py-20 bg-[#002f67]/40 bg-blend-overlay">
        <div>
          <h4 className="text-[#ffc800] font-bold lg:text-xl md:text-xl text-sm">
            LEGACY IN CONCRETE AND STEEL
          </h4>
          <h1 className="text-white font-black lg:text-8xl md:text-6xl text-2xl my-4">
            BUILDING EXCELLENCE THROUGH EXPERIENCE
          </h1>
          <hr className="border border-[#ffc800] w-[50%]" />
        </div>
      </div>
      <div className="py-20 lg:px-16 md:px-16 p-4 lg:py-20 md:py-20 grid grid-cols-3 gap-12">
        {/* <div class=" flex items-center justify-center p-10">
  <div class="relative inline-block">
    <div class="absolute inset-0 translate-x-4 translate-y-4 border-r-[10px] border-b-[10px] border-yellow-400"></div>
    <div class="relative bg-white">
      <img 
        src="/home-hero-1.jpg" 
        class="w-[600px] h-auto block"
      />
    </div>

  </div>

</div> */}
        <div class="lg:col-span-1 md:col-span-1 col-span-3 flex h-full items-center justify-center ">
          <div class="relative h-full inline-block">
            <div class="absolute top-2 left-2 w-full h-full bg-yellow-400 z-0"></div>
            <img src="/home-hero-1.jpg" class="relative z-10 block  h-full" />
          </div>
        </div>
        <div className="lg:col-span-2 md:col-span-2 col-span-3 ">
          <p className="font-bold lg:text-2xl md:text-2xl text-md text-[#002F67]/64">
            ARCHITECTS OF PROGRESS
          </p>
          <h2 className="font-black lg:text-6xl md:text-6xl text-2xl text-[#002F67] my-4">
            THE FOUNDATION OF FIABLE
          </h2>
          <p className="text-black/60 m-0">
            With over 20 years of experience in civil engineering and project
            management, the founder has played a key role in delivering diverse
            construction projects across residential, commercial, and industrial
            sectors. His journey is built on hands-on execution, practical
            problem-solving, and a deep understanding of construction dynamics.
            This experience enables him to consistently deliver projects with
            precision, efficiency, and long-term reliability.
            <br />
            <br />
            Specializing in project planning, construction execution, and
            quality management, he ensures every project meets high standards of
            safety, structural integrity, and performance. His approach is
            focused on delivering reliable, well-executed solutions that create
            lasting value and client trust.
            <br />
            <br />
            <b className="text-2xl text-[#002f67]">FOUNDERS NAME</b>
            <br />
            <span className="font-semibold">FOUNDER</span>
          </p>
        </div>
      </div>

      <div className="lg:px-16 md:px-16 p-4 lg:py-20 md:py-20  grid grid-cols-2 gap-6 bg-[#f7f7f7]">
        <div className="bg-[#002f67] lg:p-20 md:p-20 p-4 lg:col-span-1 md:col-span-1 col-span-2 ">
          <p className="text-[#ffc800] font-bold">FUTURE FORWARD</p>
          <h4 className="text-white font-black text-3xl my-4">OUR VISION</h4>
          <p className="text-white/68">
            To deliver innovative design, reliable consultation, and
            high-quality construction solutions that create durable, functional,
            and long-lasting structures while ensuring trust, efficiency, and
            client satisfaction.
          </p>
          <div className="flex mt-16 gap-4 items-center ">
            <hr className="border border-[#ffc800] w-12" />{" "}
            <p className="font-bold text-white/80">STRUCTURAL LONGEVITY</p>
          </div>
        </div>
        <div className="border-l-6 border-[#ffc800] lg:py-20 lg:px-10 md:py-20 md:px-10 p-4 shadow-lg lg:col-span-1 md:col-span-1 col-span-2 ">
          <h4 className="text-[#002f67] font-black text-3xl ">WHY CHOOSE US</h4>
          <div className="lg:flex md:flex gap-4 items-center mt-4">
            <img className="w-10 h-10" src="/reliability.png" />
            <div>
              <h6 className="text-[#002f67] font-bold text-2xl">
                Reliability Angle
              </h6>
              <p>
                Transparent communication, defined timelines, and structured
                supervision—driven by a commitment to quality.
              </p>
            </div>
          </div>
          <div className="lg:flex md:flex gap-4 items-center mt-4">
            <img className="w-10 h-10" src="/competition.png" />
            <div>
              <h6 className="text-[#002f67] font-bold text-2xl">
                Competitive Edge{" "}
              </h6>
              <p>
                Detail-oriented execution, systematic planning, quality material
                assurance, and client-centric coordination.
              </p>
            </div>
          </div>
          <div className="lg:flex md:flex gap-4 items-center mt-4">
            <img className="w-10 h-10" src="/value.png" />
            <div>
              <h6 className="text-[#002f67] font-bold text-2xl">
                Value Proposition
              </h6>
              <p>
                Long-term durability, professional project management, reduced
                rework, and clear accountability.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-16 md:px-16 p-4 lg:py-20 md:py-20 ">
        <h6 className="font-bold lg:text-2xl md:text-2xl  text-[#002F67]/64 text-center">
          THE BLUEPRINT
        </h6>
        <h2 className="font-black lg:text-6xl md:text-6xl text-2xl text-[#002F67] my-4 text-center">
          OUR PROCESS
        </h2>
        <div className="grid grid-cols-4  mt-8">
          <div className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#ffc800]
        transform -translate-x-full
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
              <h4 className="font-black text-3xl text-[#9e9e9e] group-hover:text-black">
                01
              </h4>
              <img src="/consultation-icon.png" className="w-8 h-8" />
              <h5 className="text-xl font-extrabold">CONSULTATION</h5>
              <p className="text-black/80">
                Understanding client requirements, project scope, budget, and
                overall vision to establish a clear direction.
              </p>
            </div>
          </div>
           <div  onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#002f67]
        transform -translate-x-full
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
             <h4 className="font-black text-3xl text-[#9e9e9e]">02</h4>
            
              <img src= {
            hover
              ? "/planning-icon-yellow.png"
              : "/planning-icon.png"
          } className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold group-hover:text-white">Planning & Design</h5>
              <p className="text-black/80 group-hover:text-white/68">
                Developing architectural designs, structural plans, and detailed
                cost estimates for efficient execution.
              </p>
            </div>
          </div>
           <div className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#ffc800]
        transform -translate-x-full
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
             <h4 className="font-black text-3xl text-[#9e9e9e]">03</h4>
              <img src="/execution-icon.png" className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold">
                Preparation & Execution
              </h5>
              <p className="text-black/80">
                Finalizing approvals, scheduling, and managing construction with
                strict quality control and supervision.
              </p>
            </div>
          </div>
           <div onMouseEnter={() => setHover4(true)}
      onMouseLeave={() => setHover4(false)} className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#002f67]
        transform -translate-x-full
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
             <h4 className="font-black text-3xl text-[#9e9e9e]">04</h4>
              <img src= {
            hover4
              ? "/planning-icon-yellow.png"
              : "/planning-icon.png"
          } className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold group-hover:text-white">Delivery</h5>
              <p className="text-black/80 group-hover:text-white/68">
                Ensuring timely completion and handing over a fully finished,
                ready-to-use structure with quality assurance.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
       bg-[#ffc800]
         blur-sm skew-x-[-20deg]
        transform -translate-x-full
        transition-all duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
      bg-[#ffc800] blur-sm skew-x-[-20deg]

        transform translate-x-[-100%]
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
        group-[&:not(:hover)]:translate-x-[100%]
      "
              />
            </div>
            <div className="z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
              <h4 className="font-black text-3xl text-[#9e9e9e]">01</h4>
              <img src="/consultation-icon.png" className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold">CONSULTATION</h5>
              <p className="text-black/80">
                Understanding client requirements, project scope, budget, and
                overall vision to establish a clear direction.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#002f67] blur-sm skew-x-[-20deg]
        transform -translate-x-full
        transition-all duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#002f67] blur-sm skew-x-[-20deg]

        transform translate-x-[-100%]
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
        group-[&:not(:hover)]:translate-x-[100%]
      "
              />
            </div>
            <div className="z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
              <h4 className="font-black text-3xl text-[#9e9e9e]">02</h4>
              <img src="/planning-icon.png" className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold">Planning & Design</h5>
              <p className="text-black/80">
                Developing architectural designs, structural plans, and detailed
                cost estimates for efficient execution.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white group  lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 border-r border-[#9e9e9e] py-8">
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#ffc800] blur-sm skew-x-[-20deg]
        transform -translate-x-full
        transition-all duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
        bg-[#ffc800] 
        blur-sm skew-x-[-20deg]

        transform translate-x-[-100%]
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
        group-[&:not(:hover)]:translate-x-[100%]
      "
              />
            </div>
            <div className="z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
              <h4 className="font-black text-3xl text-[#9e9e9e]">03</h4>
              <img src="/execution-icon.png" className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold">
                Preparation & Execution
              </h5>
              <p className="text-black/80">
                Finalizing approvals, scheduling, and managing construction with
                strict quality control and supervision.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white group lg:col-span-1 md:col-span-1 col-span-4 flex flex-col gap-4 lg:border-0 md:border-0 border-r border-[#9e9e9e] py-8">
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
       bg-[#002f67] blur-sm skew-x-[-20deg]
        transform -translate-x-full
        transition-all duration-700 ease-in-out

        group-hover:translate-x-0
      "
              />
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
        absolute inset-0 
       bg-[#002f67] blur-sm skew-x-[-20deg]

        transform translate-x-[-100%]
        transition-transform duration-700 ease-in-out

        group-hover:translate-x-0
        group-[&:not(:hover)]:translate-x-[100%]
      "
              />
            </div>
            <div className="z-10 h-full flex flex-col gap-4 py-8 w-full px-3">
              <h4 className="font-black text-3xl text-[#9e9e9e]">04</h4>
              <img src="/delivery-icon.png" className="w-8 h-8 " />
              <h5 className="text-xl font-extrabold">Delivery</h5>
              <p className="text-black/80">
                Ensuring timely completion and handing over a fully finished,
                ready-to-use structure with quality assurance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-16 md:px-16 p-4 lg:py-20 md:py-20 bg-[#ffc800]">
        <h2 className="text-[#002f67] font-black lg:text-8xl md:text-8xl text-3xl text-center">
          LET&apos;S BUILD SOMETHING THAT LASTS
        </h2>
        <div className="flex justify-center">
          <button className="font-extrabold text-white hover:cursor-pointer hover:rounded-md lg:text-2xl md:text-2xl bg-[#002f67] lg:px-24 md:px-24 px-12 py-4 mt-6 ">
            CONTACT US
          </button>
        </div>
      </div>
    </>
  );
}

export default Page;
