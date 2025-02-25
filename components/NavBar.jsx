import React from "react";
import Image from "next/image";
import Link from "next/link";

/*  
  Name: [Yash Kakadiya, Ethan Van De Woestyne, Precious Robert-Ezenta]
  
  Date: [24-02-25]

  Description: This React component defines a navigation bar for the Southern Alberta Junior Highschool website. 
  It includes a logo, school name, and a navigation link to the home page. The navigation bar 
  is styled using Tailwind CSS and utilizes Next.js components such as Image and Link.
              
  Inputs: None
  
  Processing: Renders a navigation bar with a school logo, name, and a home link.
  
  Output: A visually styled navigation bar displayed on the webpage.
 */

const NavBar = () => {
  return (
    <div>
      <nav className="bg-zinc-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="bg-white p-4 rounded flex gap-5 items-center shadow-lg">
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
          <div className="bg-white p-4 rounded flex gap-5 items-center shadow-lg">
            <ul className="flex space-x-4 font-bold">
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
