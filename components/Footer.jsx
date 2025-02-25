import React from "react";

// Created 24-02-25
// Provides the footer navbar to display Collegge information

const Footer = () => {
  return (
    <div>
      <nav className="bg-zinc-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black text-base font-bold">
            Southern Alberta Junior Highschool
          </h1>
          <p className="text-black">1301 16 Avenue NW | Calgary, AB T2M 0L4</p>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
