import React from "react";
import Image from "next/image";
import Link from "next/link";

// Created 23-02-25
// Provides the header navbar that can be adjusted to navigate to new pages

const NavBar = () => {
  return (
    <div>
      <nav className="bg-zinc-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="bg-white p-4 rounded flex gap-5 items-center">
            <Image
              src="/sait_logo.png"
              alt="SAIT logo"
              width={50}
              height={50}
            />
            <h1 className="text-white font-bold">
              <Link
                href="/"
                className="text-2xl text-black hover:text-blue-800"
              >
                Southern Alberta Junior Highschool
              </Link>
            </h1>
          </div>
          <div className="bg-white p-4 rounded flex gap-5 items-center">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="text-2xl text-black hover:text-blue-800"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
