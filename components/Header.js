import { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../LottieFiles/Menu.json";

const Header = () => {
  const [open, setOpen] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div
        className={`fixed left-0 flex z-50 justify-center items-center m-3 md:m-7 transition-all duration-300 ease-in-out`}
      >
        <div
          className={`absolute bg-brand opacity-80 transition duration-500 w-16 h-16 rounded-full ${
            open && "scale-[55] opacity-60"
          } `}
        ></div>
        <div onClick={() => setOpen(!open)} className="z-50 cursor-pointer">
          <Lottie
            options={defaultOptions}
            height={70}
            width={70}
            speed={3}
            direction={open ? 1 : -1}
          />
        </div>
        <ul
          className={`absolute h-screen w-screen top-[-50px] justify-evenly items-center flex flex-col gap-6 left-[-20px] text-4xl text-white p-10 ${
            !open && "hidden"
          }`}
        >
          <li className="menuItem">
            <a href="#projects" onClick={() => setOpen(!open)}>
              Projects
            </a>
          </li>
          <li className="menuItem">
            <a href="#aboutme" onClick={() => setOpen(!open)}>
              About Me
            </a>
          </li>
          <li className="menuItem">
            <a href="#services" onClick={() => setOpen(!open)}>
              Services
            </a>
          </li>
          <li className="menuItem">
            <a href="#contact" onClick={() => setOpen(!open)}>
              Contact me
            </a>
          </li>
        </ul>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        download
        className="flex font-mono items-center bg-blue-400 hover:bg-blue-500 cursor-pointer text-white gap-3 fixed right-0 z-40 m-3 mt-4 md:m-7 md:mt-8 border-4 rounded-full px-4 py-4 sm:px-6 sm:py-4"
      >
        Download Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </a>
    </>
  );
};

export default Header;
