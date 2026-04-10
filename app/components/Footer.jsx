"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();

  return (
    <>
      <div className="grid grid-cols-3 gap-6 bg-[#002f67] lg:h-72 md:h-72 lg:px-[4em] md:px-[4em] px-[1em] py-[2em] items-center text-white">
        <div className="flex flex-col justify-between lg:h-44 md:h-44  lg:col-span-1 md:col-span-1 col-span-3">
          <h2 className="font-semibold ">Fiable Constructions</h2>
          <p className="">
            We build strong, reliable spaces designed to last. From planning to
            completion, every project is delivered with precision and care.
          </p>
          <div className="my-2">
            <p>Mobile Number: 9000789297</p>
            <p>Email: fiableconstructions@gmail.com</p>
          </div>
          <div className="flex lg:w-[32%] md:w-[40%] w-[50%] justify-between items-center">
            <img className="w-8 h-8" src="/Instagram.png" />
            <img className="w-8 h-8" src="/facebook.png" />
            <img className="w-8 h-8 rounded-md" src="/x.png" />
          </div>
        </div>
        <div className="lg:flex md:flex flex-col items-center lg:col-span-1 md:col-span-1 col-span-3">
          <h2 className="font-semibold mb-2">Quick Links</h2>

          <ul className="lg:flex md:flex flex-col gap-1 items-center">
            <Link href={"/"}>
              <li className="cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                About
              </li>
            </Link>
            <Link href={"/services"}>
              <li className="cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Services
              </li>
            </Link>
            <Link href={"/projects"}>
              <li className="cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Projects
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:col-span-1 md:col-span-1 col-span-3">
          <h2 className="font-semibold mb-2">Our Location</h2>
          {/* <iframe
            src="https://www.google.com/maps?q=New+York&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.062887542928!2d78.42612837516651!3d17.456703883442295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI3JzI0LjEiTiA3OMKwMjUnNDMuMyJF!5e0!3m2!1sen!2sin!4v1775839906211!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <img className="h-36 w-[80%]" src="/map.png" /> */}
          <p className="text-sm mt-2">
            FAIRMOUNT FORTUNE ONE MALL, 401 TO 406, Sanath Nagar Main Rd, Czech
            Colony, Sanath Nagar, Hyderabad, Telangana 500018
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
