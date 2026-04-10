"use client"
import Link from 'next/link';
import React,{useState,useEffect} from 'react'
import { usePathname } from 'next/navigation';

function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen,setMenuOpen] = useState(false)
    console.log(menuOpen)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
 const handleClose = () => setMenuOpen(false);
  return (
    <div className='fixed z-50'>

    <div className={`flex justify-between items-center px-8 w-screen py-4 bg-white backdrop-blur-2xl text-[#002F67] text-md font-semibold shadow-md`}>
    <Link href={"/"}>
      <img className='w-24' src='/logo-bg-1.png' alt='logo'/>
    </Link>
        
            <ul className='lg:flex md:flex hidden gap-12 '>
              <Link href={"/"}>
                <li className={`${pathname === "/" ? "after:scale-x-100" : ""} cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`} >Home</li>

              </Link>
              <Link href={"/about"}>
                <li className={`${pathname === "/about" ? "after:scale-x-100" : ""} cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`} >About</li>

              </Link>
              <Link href={"/services"}>
                <li className={`${pathname === "/services" ? "after:scale-x-100" : ""} cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}>Services</li></Link>
              <Link href={"/projects"}>
                <li className={`${pathname === "/projects" ? "after:scale-x-100" : ""} cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}>Projects</li></Link>
              <Link href={"/contact"}>
                <li className={`${pathname === "/contact" ? "after:scale-x-100" : ""} cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100`}>Contact</li></Link>
            </ul>
            <img className='lg:hidden md:hidden w-8' onClick={() => setMenuOpen(!menuOpen)} src='/hamburger.png'/>


             <div
        className={`fixed top-0 right-0 h-screen w-[95vw]  bg-white shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col bg-white gap-4">
          <button className='text-right text-2xl' onClick={handleClose}> ✕</button>

          {/* Menu Links */}
       
           <ul className=' gap-20 text-right'>
              <Link onClick={handleClose} href={"/"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100' >Home</li>

              </Link>
              <Link onClick={handleClose} href={"/about"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100' >About</li>

              </Link>
              <Link onClick={handleClose} href={"/services"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Services</li></Link>
              <Link onClick={handleClose} href={"/projects"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Projects</li></Link>
              <Link onClick={handleClose} href={"/contact"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Contact</li></Link>
            </ul>
        </div>

         <div className="flex flex-col justify-between lg:h-44 md:h-44 p-4 lg:col-span-1 md:col-span-1 col-span-3">
          <h2 className="font-black ">Fiable Constructions</h2>
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
      </div>

    </div>
    </div>
  )
}

export default Navbar