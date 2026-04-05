import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 bg-[#002f67] lg:h-72 md:h-72 lg:px-[4em] md:px-[4em] px-[1em] py-[2em] items-center text-white">
        <div className="flex flex-col justify-between lg:h-44 md:h-44  lg:col-span-1 md:col-span-1 col-span-3">
          <h2 className="font-semibold ">Fiable Constructions</h2>
          <p className="">
            We build strong, reliable spaces designed to last. From planning to
            completion, every project is delivered with precision and care.
          </p>
          <div className="flex lg:w-[32%] md:w-[40%] w-[50%] justify-between items-center">
            <img className="w-8 h-8" src="/Instagram.png" />
            <img className="w-8 h-8" src="/facebook.png" />
            <img className="w-8 h-8 rounded-md" src="/x.png" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:col-span-1 md:col-span-1 col-span-3">
          <h2 className="font-semibold mb-2">Quick Links</h2>

          <ul className="flex flex-col gap-1 items-center">
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

          <img className="h-36 w-[80%]" src="/map.png" />
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
