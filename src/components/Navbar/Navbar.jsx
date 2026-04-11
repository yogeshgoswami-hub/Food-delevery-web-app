import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearchSharp } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aboutus from "../Aboutus/Aboutus";
const Navbar = () => {
  const [icon, showicon] = useState(true);
  const toggleicon = () => {
    icon(!showicon);
  };
  const [showMenu, setMenu] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);
  const toggleMenu = () => {
    setMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? "shadow-2xl to-black" : null}`}
    >
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="text-3xl font-bold">
          Quick<span className="text-orange-500">B</span>asket
        </Link>

        {/* desktop menu */}

        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              about Us
            </Link>
          </li>
          <li>
            <Link
              to="/FAQs"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/Contect"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              Contect Us
            </Link>
          </li>
        </ul>

        {/* Nav action */}
        <div className="flex items-center gap-x-5">
          {/* input feild */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-orange-500 text-white w-10 h-9 flex justify-center items-center rounded-full text-xl">
              <IoSearchSharp />
            </button>
          </div>
          <a href="#" className="text-2xl">
            <IoHeart />
          </a>
          <a href="#" className="text-2xl">
            <HiMiniShoppingBag />
          </a>
          {/* profile icon */}
          <a href="" className="text-2xl hidden md:flex ">
            <FaUserCircle />
          </a>

          {/* hamburger */}
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* mobile menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? "left-1/2" : ""}`}
        >
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500 scroll-smooth"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="./aboutus"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              about Us
            </Link>
          </li>
          <li>
            <Link
              to="./FAQs"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/Contect"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              Contect Us
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              Sign in/up
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-orange-500 text-white w-10 h-9 flex justify-center items-center rounded-full text-xl">
              <IoSearchSharp />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
