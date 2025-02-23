import React from "react";
import Image from "next/image";

// Created 23-02-25
// Provides the header navbar that can be adjusted to navigate to new pages

const NavBar = () => {
  return (
    <div>
      <nav className="bg-zinc-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-base font-bold">
            Southern Alberta Institute of Technology
          </h1>
          <Image src="/sait_logo.png" alt="SAIT logo" width={50} height={50} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
