import React from "react";

function Page() {
  const sharedInputClass =
    "border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#002f67] focus:rounded";

  return (
    <div className="lg:px-16 md:py-28 lg:py-28 md:px-16 pt-20 pb-4 px-4 lg:h-screen md:h-screen">
      <h1 className="font-black text-[#ffc800] lg:text-5xl md:text-5xl text-2xl text-center">
        Start Your Project With Us
      </h1>
      <p className="text-[#002f67] lg:font-semibold md:font-semibold text-center lg:px-44 md:px-44">
        Whether you are planning to build a new home, renovate an existing
        space, or need professional construction guidance, we are here to help.
      </p>
      <div className="lg:grid md:grid hidden grid-cols-2 gap-4 mt-4">
        <div className='h-[64vh] bg-[url("/contact-image.jpg")] bg-center bg-cover rounded-md '></div>
        {/* <img src='/contact-image.jpg' className='h-[68vh]'/> */}
        <div className="h-[64vh] border border-gray-300 rounded-md px-8 py-6 flex flex-col gap-4 justify-center">
          <div>
            <p>Name</p>
            <input className={sharedInputClass} />
          </div>
          <div>
            <p>Email</p>
            <input className={sharedInputClass} />
          </div>
          <div>
            <p>Phone Number</p>
            <input className={sharedInputClass} />
          </div>
          <div>
            <p>Message</p>
            <textarea className={sharedInputClass} />
          </div>

          <button className="bg-[#ffc800] w-full text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6  hover:rounded mt-4">
            Send Message
          </button>
        </div>
      </div>
      <div className="lg:hidden md:hidden grid grid-cols-2 gap-4 mt-4">
        <div className="h-[64vh] border lg:col-span-1 md:col-span-1 col-span-2 border-gray-300 rounded-md px-8 py-6 flex flex-col gap-4 justify-center">
          <div>
            <p>Name</p>
            <input className={sharedInputClass} />
          </div>
          <div>
            <p>Email</p>
            <input className={sharedInputClass} />
          </div>
          <div>
            <p>Phone Number</p>
            <input className={sharedInputClass} />
          </div>
          <div>
            <p>Message</p>
            <textarea className={sharedInputClass} />
          </div>

          <button className="bg-[#ffc800] w-full text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6  hover:rounded mt-4">
            Send Message
          </button>
        </div>
        <div className='h-[64vh] bg-[url("/contact-image.jpg")] bg-center bg-cover rounded-md lg:col-span-1 md:col-span-1 col-span-2'></div>
        {/* <img src='/contact-image.jpg' className='h-[68vh]'/> */}
        
      </div>
    </div>
  );
}

export default Page;
