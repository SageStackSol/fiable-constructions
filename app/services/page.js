import React from "react";

function Page() {
  return (
    <>
      <div className='bg-[url("/services-hero.png")] bg-cover h-screen flex flex-col justify-center items-center'>
        <h6 className="text-[#ffc800] font-bold lg:text-xl md:text-xl tracking-widest text-center">
          PRECISION ENGINEERING
        </h6>
        <h1 className="text-white font-black lg:text-8xl md:text-8xl text-4xl my-4 text-center">
          OUR SERVICES
        </h1>
        <hr className="border border-[#ffc800] w-[10%] " />
      </div>
      <div className="grid grid-cols-3 py-20 lg:px-16 md:px-16 p-8 lg:py-20 md:py-20  bg-[#f7f7f7] ">
        <div className="relative h-[72vh] lg:col-span-1 md:col-span-1 col-span-3  flex">
          {/* Shadow/offset border */}
          <div className="absolute -top-4 -left-4 w-[29vw] h-full border-4 border-yellow-400 z-0"></div>

          {/* Image */}
          <img
            src="/architect-service.jpg"
            alt="design"
            className="relative z-10 h-[72vh] shadow-2xl"
          />
        </div>
        <div className="text-[#002f67] lg:col-span-2 md:col-span-2 col-span-3 lg:px-12 md:px-12 flex flex-col justify-center">
          <p className="font-semibold tracking-widest lg:my-0 md:my-0 my-4">DIVISION 01</p>
          <h3 className="font-black text-4xl lg:my-4 md:my-4">Architectural Design</h3>
          <p className=" lg:leading-loose md:leading-loose">
            We create innovative and practical designs that combine
            functionality, aesthetics, and structural safety. Design spaces that
            are efficient, modern and tailored to your lifestyle or business
            needs.
          </p>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="lg:col-span-1 md:col-span-1 col-span-2 lg:col-span-1 md:col-span-1 col-span-2 flex gap-2 items-center">
              {" "}
              <img className="w-8 h-8" src="/geometric-design.png" />
              <p>House plans and layout design</p>
            </div>
            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex gap-2 items-center">
              {" "}
              <img className="w-8 h-8" src="/rule.png" />
              <p>2D floor plans</p>
            </div>
            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex gap-2 items-center">
              {" "}
              <img className="w-8 h-8" src="/cube.png" />
              <p>3D elevation designs</p>
            </div>
            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex gap-2 items-center">
              {" "}
              <img className="w-8 h-8" src="/sofa.png" />
              <p>Interior space planning</p>
            </div>
            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex gap-2 items-center">
              {" "}
              <img className="w-8 h-8" src="/architecture-icon.png" />
              <p>Structural drawings</p>
            </div>
            <div className="lg:col-span-1 md:col-span-1 col-span-2 flex gap-2 items-center">
              {" "}
              <img className="w-8 h-8" src="/paper.png" />
              <p>Building approval drawings</p>
            </div>
          </div>
          <button className="bg-[#ffc800] lg:w-[40%] md:w-[40%] text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6  hover:rounded">
            START YOUR DESIGN
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 py-20 lg:px-16 md:px-16 p-4 lg:py-20 md:py-20   ">
        <div className="text-[#002f67] lg:col-span-2 md:col-span-2 col-span-3 lg:px-12 md:px-12 flex flex-col justify-center">
          <p className="font-semibold tracking-widest">DIVISION 02</p>
          <h3 className="font-black text-4xl my-4">
            Construction Consultation
          </h3>
          <p className="lg:leading-loose md:leading-loose">
            Expert guidance is essential to avoid costly mistakes during
            construction. Our consultation services help clients make informed
            decisions throughout the project. We ensure your project follows
            quality standards, safety regulations and budget limits.
          </p>
          <div className="flex flex-col gap-4 my-4">
            <div className="border-l-4 border-[#FFC800] flex gap-4 px-6 py-6 shadow-gray-300 shadow-md ">
              <img className="w-12 h-12" src="/evaluation.png" />

              <p>
                <span className="font-bold">TECHNICAL ANALYSIS </span>
                <br />
                Site analysis, feasibility studies and material selection
                guidance tailored to industrial specs.
              </p>
            </div>
            <div className="border-l-4 border-[#FFC800] flex gap-4 px-6 py-6 shadow-gray-300 shadow-md ">
              <img className="w-12 h-12" src="/budget-planning.png" />

              <p>
                <span className="font-bold">COST AND PLANNING </span>
                <br />
                Regourous cost estimation, budgeting and strategic construction
                planning to mitigate risk.
              </p>
            </div>
          </div>
          <button className="bg-[#ffc800] lg:w-[40%] md:w-[40%] text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6  hover:rounded">
            BOOK A CONSULTATION{" "}
          </button>
        </div>

        <div className="relative h-[72vh] lg:col-span-1 md:col-span-1 col-span-3 flex">
          {/* Shadow/offset border */}
          <div className="absolute top-6 left-6 w-[29vw] h-full border-4 border-[#002f67] z-0"></div>

          {/* Image */}
          <img
            src="/consultation-service.jpg"
            alt="design"
            className="relative z-10 h-[72vh] shadow-2xl"
          />
        </div>
      </div>

      <div>
        <div className="text-[#002f67]  lg:px-12 md:px-12 p-4 flex flex-col justify-center bg-[#f7f7f7] py-20">
          <p className="font-semibold tracking-widest text-center">DIVISION 03</p>
          <h3 className="font-black text-4xl my-4 text-center ">Construction Execution</h3>
          <p className="lg:leading-loose md:leading-loose lg:px-40 md:px-40 text-center">
            We provide end-to-end construction exectution, managing the entire
            process from foundation to finishing with a focus on timely delivery
            and quality workmanship.
          </p>
          <div className="grid grid-cols-3 gap-4 my-12">
            <div className="bg-white lg:p-12 md:p-12 p-4 lg:col-span-1 md:col-span-1 col-span-3 border-b-4 border-[#ffc800]">
              <img className="w-12 h-12" src="/property.png" />
              <h6 className="font-bold text-2xl my-4">Residential and Commercial</h6>
              <p className="text-[#002c67]/68 mb-4">
                Full-scale building construction for homes and corporate spaces
                with turnkey management.
              </p>
              <ul className="list-disc text-[#002c67]/68 font-medium">
                <li>NEW BUILDS</li>
                <li>RENOVATIONS</li>
                <li>REMODELING</li>
              </ul>
            </div>
            <div className="bg-white lg:p-12 md:p-12 p-4 lg:col-span-1 md:col-span-1 col-span-3 border-b-4 border-[#ffc800] mt-8 h-full">
              <img className="w-12 h-12" src="/engineer.png" />
              <h6 className="font-bold text-2xl my-4">Quality & Supervision</h6>
              <p className="text-[#002c67]/68 mb-4">
               Regorous quality control and on-site supervision to ensure structural integrity and safety.
              </p>
              <ul className="list-disc text-[#002c67]/68 font-medium">
                <li>LABOUR COORDINATION</li>
                <li>SAFETY COMPLIANCE</li>
                <li>QUALITY AUDITS</li>
              </ul>
            </div>
            <div className="bg-white lg:p-12 md:p-12 p-4 lg:col-span-1 md:col-span-1 col-span-3 border-b-4 border-[#ffc800]">
              <img className="w-12 h-12" src="/tools.png" />
              <h6 className="font-bold text-2xl my-4">Project Management</h6>
              <p className="text-[#002c67]/68 mb-4">
End-to-end oversight ensuring cost efficiency and adhering to strict project timelines.              </p>
              <ul className="list-disc text-[#002c67]/68 font-medium">
                <li>TIMELY DELIVERY</li>
                <li>BUDGET CONTROL</li>
                <li>TURNKEY EXECUTION</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
 <button className="bg-[#ffc800] lg:w-[40%] md:w-[40%] text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6  hover:rounded">
START YOUR PROJECT
          </button>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Page;
