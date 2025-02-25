import React from "react";

/**
  Name: [Yash Kakadiya, Ethan Van De Woestyne, Precious Robert-Ezenta]
  
  Date: [24-02-25]

  Program Description: This React functional component defines a footer for the Southern Alberta Junior High School website.
  The footer includes the school's name and address, styled using Tailwind CSS classes.
  The component is structured using a navigation bar with flexbox utilities for alignment.

  Input: No user input is required.
  
  Processing: The component renders static content using JSX and Tailwind CSS classes.
  
  Output: Displays the footer with the school’s name and address.
 */

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
