import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const getDate = new Date().getFullYear();

  return (
    <footer className="w-full h-full">
      <div className="bg-[#0e0b01] py-10">
        <div className="w-10/12 mx-auto">
          {/* ✅ Fix: Ensure flex-row layout on md screens */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Logo & Social Icons */}
            <div className="w-full md:w-1/2 space-y-5 py-5 flex flex-col items-center md:items-start justify-center md:justify-start">
              <div className="w-24 h-24 p-4 rounded-lg flex items-center md:items-start justify-center md:justify-start  bg-white">
                <Image src="/Logo.png" alt="logo" width={200} height={200} />
              </div>
              <p className="capitalize font-normal text-base text-white text-center md:text-start md:w-8/12">
                We specialize in providing clarity for small business owners so
                that their business can grow.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100089892374215&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#f7c769] flex items-center justify-center"
                >
                  <FaFacebook className="w-5 h-5 text-[#f7c769]" />
                </a>
                <a
                  href="https://www.instagram.com/quest_goal?igsh=ZDJ6c2hweGhldnJn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#f7c769] flex items-center justify-center"
                >
                  <FaInstagram className="w-5 h-5 text-[#f7c769]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/goal-quest?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#f7c769] flex items-center justify-center"
                >
                  <FaLinkedin className="w-5 h-5 text-[#f7c769]" />
                </a>
                <a
                  href="https://x.com/quest_goal?t=XbZN3nJS5a4B9Z0KE3CUZg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#f7c769] flex items-center justify-center"
                >
                  <FaTwitter className="w-5 h-5 text-[#f7c769]" />
                </a>
              </div>
            </div>

            {/* Right Side: Navigation Links */}
            <div className="w-full md:w-1/2 flex justify-between text-white gap-10 py-5">
              <div className="space-y-6">
                <h2 className="font-bold text-2xl capitalize text-[#fafafa]">
                  Company
                </h2>
                <ul className="font-semibold text-lg space-y-4 text-white">
                  <li>
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="font-bold text-2xl capitalize text-[#fafafa]">
                  Resources
                </h2>
                <ul className="font-semibold text-lg space-y-4 text-white">
                  <li>
                    <Link href="\courses">Courses</Link>
                  </li>
                  {/* <li>
                    <Link href="\services">Services</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#CF982B]">
        <p className="text-center text-black font-normal text-base py-5 border-t-2 border-dashed">
          &copy; Copyright {getDate} Gold Quest Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
