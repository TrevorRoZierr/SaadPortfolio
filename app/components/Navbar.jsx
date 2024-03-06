"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Navbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [myName, setMyName] = useState("Saad");

  const changeName = () => {
    if (myName === "Saad") {
      setMyName("Vamp");
    } else if (myName === "Vamp") {
      setMyName("Saad");
    } else {
      setMyName("Saad");
    }
  };

  const toggleHam = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div className="flex justify-center items-center w-full" id="nav">
      <div className="sm:w-[60%] w-[90%] flex justify-between items-center bg-gray-300 border-4 border-red-900 sm:rounded-2xl rounded-xl mt-10 sm:mt-12">
        <div className=" sm:p-4 p-3 sm:ml-5 ml-2">
          <Link
            href="/"
            className="sm:text-6xl text-2xl text-black sm:font-bold font-semibold uppercase font-unbounded hover:text-red-900 cursor-none"
            onClick={changeName}
          >
            {myName}
          </Link>
        </div>
        <div className="sm:p-4 p-3">
          <nav className="flex flex-row sm:mr-5 mr-1">
            <button
              className="sm:mr-14 mr-3 text-gray-300 rounded p-1 sm:text-md text-md sm:font-medium font-bold sm:bg-none bg-gradient-to-l from-red-950 to-red-800 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] sm:hidden flex"
              onClick={toggleHam}
            >
              <RxHamburgerMenu />
            </button>
            <Link
              href="/resume"
              className="sm:mr-8 text-black sm:text-md sm:font-medium sm:flex hidden hover:text-red-700 duration-500 hover:underline hover:font-bold hover:p-1"
            >
              Resume
            </Link>
            <Link
              href="/certificates"
              className="sm:mr-8 text-black sm:text-md sm:font-medium sm:flex hidden hover:text-red-700 duration-500 hover:underline hover:font-bold hover:p-1"
            >
              Certificates
            </Link>
            <Link
              href="/internship"
              className="sm:mr-12 text-black sm:text-md sm:font-medium sm:flex hidden hover:text-red-700 duration-500 hover:underline hover:font-bold hover:p-1"
            >
              Internship
            </Link>
            <div>
              <Link
                href="https://www.instagram.com/sameoldtreva/"
                target="_blank"
                className="sm:px-4 px-2 sm:py-2 py-1 lg:px-4 lg:py-2 md:px-1 md:py-1 bg-gradient-to-l from-red-950 to-red-800 sm:font-semibold sm:text-lg text-md md:text-sm lg:text-xl border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded font-unbounded text-gray-300 capitalize"
              >
                gram
              </Link>
            </div>
          </nav>
        </div>
      </div>
      {isHamburgerOpen && <Hamburger />}
    </div>
  );
};

export default Navbar;
