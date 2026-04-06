// "use client"
// import React, { useState } from "react";

// function Page() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const sharedInputClass =
//     "border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-[#002f67] focus:rounded";

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await fetch("/api/contact", {
//       method: "POST",
//       body: JSON.stringify(form),
//     });

//     alert("Message sent!");
//     setForm({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <div className="lg:px-16 md:py-28 lg:py-28 md:px-16 pt-20 pb-4 px-4 lg:h-screen md:h-screen">
//       <h1 className="font-black text-[#ffc800] lg:text-5xl md:text-5xl text-2xl text-center">
//         Start Your Project With Us
//       </h1>
//       <p className="text-[#002f67] lg:font-semibold md:font-semibold text-center lg:px-44 md:px-44">
//         Whether you are planning to build a new home, renovate an existing
//         space, or need professional construction guidance, we are here to help.
//       </p>
//       <div className="lg:grid md:grid hidden grid-cols-2 gap-4 mt-4">
//         <div className='h-[64vh] bg-[url("/contact-image.jpg")] bg-center bg-cover rounded-md '></div>
//         {/* <img src='/contact-image.jpg' className='h-[68vh]'/> */}
//         <div className="h-[64vh] border border-gray-300 rounded-md px-8 py-6 flex flex-col gap-4 justify-center">
//           <div>
//             <p>Name</p>
//             <input   value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })} className={sharedInputClass} />
//           </div>
//           <div>
//             <p>Email</p>
//             <input   value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })} className={sharedInputClass} />
//           </div>
//           <div>
//             <p>Phone Number</p>
//             <input   value={form.phone}
//         onChange={(e) => setForm({ ...form, phone: e.target.value })} className={sharedInputClass} />
//           </div>
//           <div>
//             <p>Message</p>
//             <textarea className={sharedInputClass} />
//           </div>

//           <button onClick={()=>{handleSubmit()}} className="bg-[#ffc800] w-full text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6 cursor-pointer hover:rounded mt-4">
//             Send Message
//           </button>
//         </div>
//       </div>
//       <div className="lg:hidden md:hidden grid grid-cols-2 gap-4 mt-4">
//         <div className="h-[64vh] border lg:col-span-1 md:col-span-1 col-span-2 border-gray-300 rounded-md px-8 py-6 flex flex-col gap-4 justify-center">
//           <div>
//             <p>Name</p>
//             <input   value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })} className={sharedInputClass} />
//           </div>
//           <div>
//             <p>Email</p>
//             <input   value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })} className={sharedInputClass} />
//           </div>
//           <div>
//             <p>Phone Number</p>
//             <input   value={form.phone}
//         onChange={(e) => setForm({ ...form, phone: e.target.value })} className={sharedInputClass} />
//           </div>
//           <div>
//             <p>Message</p>
//             <textarea   value={form.message}
//         onChange={(e) => setForm({ ...form, message: e.target.value })} className={sharedInputClass} />
//           </div>

//           <button onClick={()=>{handleSubmit()}} className="bg-[#ffc800] w-full text-[#002f67] font-semibold tracking-wider shadow-lg py-3 px-6  hover:rounded mt-4">
//             Send Message
//           </button>
//         </div>
//         <div className='h-[64vh] bg-[url("/contact-image.jpg")] bg-center bg-cover rounded-md lg:col-span-1 md:col-span-1 col-span-2'></div>
//         {/* <img src='/contact-image.jpg' className='h-[68vh]'/> */}
//       </div>
//     </div>
//   );
// }

// export default Page;


"use client";
import { useSearchParams } from "next/navigation";
import React, { useState,useEffect } from "react";

function Page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
const searchParams = useSearchParams();

useEffect(() => {
  const serviceFromURL = searchParams.get("service");

  if (serviceFromURL) {
    setForm((prev) => ({
      ...prev,
      service: serviceFromURL,
    }));
  }
}, [searchParams]);
  const sharedInputClass =
    "border border-gray-300 w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#002f67]";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Message sent!");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="lg:px-16 md:px-16 px-4 py-20">
      <h1 className="font-black text-[#ffc800] lg:text-5xl text-2xl text-center">
        Start Your Project With Us
      </h1>

      <p className="text-[#002f67] text-center lg:px-44 mt-2">
        Whether you are planning to build a new home, renovate an existing
        space, or need professional construction guidance, we are here to help.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Image */}
        <div className=' bg-[url("/contact-image.jpg")] bg-center bg-cover rounded-md'></div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 rounded-md px-6 py-6 flex flex-col gap-4 justify-center"
        >
          <div>
            <p>Name</p>
            <input required name="name" value={form.name} onChange={handleChange} className={sharedInputClass} />
          </div>

          <div>
            <p>Email</p>
            <input required name="email" value={form.email} onChange={handleChange} className={sharedInputClass} />
          </div>

          <div>
            <p>Phone Number</p>
            <input required name="phone" value={form.phone} onChange={handleChange} className={sharedInputClass} />
          </div>

          {/* ✅ NEW SELECT FIELD */}
          <div>
            <p>Service Required</p>
            <select
            required
              name="service"
              value={form.service}
              onChange={handleChange}
              className={sharedInputClass}
            >
              <option value="">Select a service</option>
              <option value="Architectural Design">Architectural Design</option>
              <option value="Construction Consultation">Construction Consultation</option>
              <option value="Construction Execution">Construction Execution</option>
            </select>
          </div>

          <div>
            <p>Message</p>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className={sharedInputClass}
            />
          </div>

          <button
            type="submit"
            className="bg-[#ffc800] text-[#002f67] hover:cursor-pointer font-semibold tracking-wider shadow-lg py-3 px-6 hover:rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;