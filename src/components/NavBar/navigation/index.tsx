"use client";
import React from "react";
import Image from "next/image";
import logo from "@/assets/logos/logo.jpg";
import Link from "next/link";
import { useTheme } from "@/context/themeContext";

const NavBar: React.FC = () => {
  const { theme } = useTheme();
  const buttonClass = theme === 'light' ? 'navButtonLight' : 'navButtonDark';

  return (
    <div className="navbar grid grid-cols-[40%_60%] items-center w-full h-12rem">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Image src={logo} alt="Logo" className="p-4 rounded-full w-8rem h-8rem"/>
      </div>
      <div className="flex flex-wrap gap-8 overflow-visible md:justify-center pr-4">
        <Link href={"/"} className={buttonClass}>Habilidades</Link>
        <Link href={"/"} className={buttonClass}>Proyectos</Link>
        <Link href={"/"} className={buttonClass}>Contáctame</Link>
        <button 
          onClick={() => window.open("https://drive.google.com/file/d/1WluP00BgfoBYTNWBVjrCYz0BTgD6MUNl/view?usp=drive_link", "_blank")} 
          className={buttonClass}>
          Vé mi CV
        </button>
      </div>
    </div>
  );
}

export default NavBar;