"use client"
import Link from 'next/link';
import React,{useState,useEffect} from 'react'

function Navbar() {
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
  return (
    <div className='fixed z-50'>

    <div className={`flex justify-between items-center px-8 w-screen py-4 bg-white/40 backdrop-blur-2xl text-[#002F67] text-md font-semibold shadow-md`}>
    <Link href={"/"}>
      <img className='w-24' src='/fiable-white-logo.png' alt='logo'/>
    </Link>
        
            <ul className='lg:flex md:flex hidden gap-12 '>
              <Link href={"/about"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100' >About</li>

              </Link>
              <Link href={"/services"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Services</li></Link>
              <Link href={"/projects"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Projects</li></Link>
              <Link href={"/contact"}>
                <li className='cursor-pointer relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-[#FFC800] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'>Contact</li></Link>
            </ul>
            <p className='lg:hidden md:hidden ' onClick={() => setMenuOpen(!menuOpen)}>HB</p>

    </div>
    </div>
  )
}

export default Navbar