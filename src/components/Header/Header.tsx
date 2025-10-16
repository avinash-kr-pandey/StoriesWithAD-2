"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";


export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const menuItems = [
    { name: "Home", submenu: [] },
    {
      name: "Gallery",
      submenu: [
        { name: "Seating", image: "/images/seating.jpg" },
        { name: "Tables", image: "/images/tables.jpg" },
      ],
    },
    {
      name: "Portfolio",
      submenu: [
        { name: "Web Design", image: "/images/web-design.jpg" },
        { name: "Photography", image: "/images/photography.jpg" },
      ],
    },
    { name: "Services", submenu: [] },
    { name: "Book", submenu: [] },
    { name: "Products", submenu: [] },
    { name: "About", submenu: [] },
    // { name: "Journal", submenu: [] },
  ];

  const hoveredItem = menuItems.find((i) => i.name === hovered);

  // Scroll listener to fix header after video section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.9; // almost full video height
      setIsFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative w-full z-50">
      {/* Background Video */}
      {!isFixed && (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/video/header-video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {/* Overlay content */}
      <div
        className={`relative z-10 transition-colors duration-300 ${
          hovered ? "bg-[#eae1d1]/80 text-black" : "bg-transparent text-white"
        } ${
          isFixed ? "fixed top-0 left-0 bg-[#eae1d1] border-b border-black" : ""
        }`}
      >
        {/* Top newsletter bar */}
        <div className="bg-[#fdfaf7] text-center py-2 border-b border-gray-200 relative z-10">
          <span className="text-[11px] text-gray-500 tracking-wide">
            Sign up to my{" "}
            <span className="underline">monthly trade newsletter</span> for{" "}
            <a href="#" className="hover:text-gray-700">
              exclusive trade offers
            </a>{" "}
            and first access to new gallery collections.
          </span>
        </div>

        <div className="mx-auto py-6 px-6 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div
              className="flex-grow text-center text-3xl uppercase text-black"
              style={{
                fontFamily: "var(--FONT-STACK-BODY)",
                fontStyle: "var(--FONT-STYLE-BODY)",
                fontWeight: "var(--FONT-WEIGHT-BODY)",
                letterSpacing: "var(--LETTER-SPACING-BODY)",
              }}
            >
              Your Logo
            </div>

            {/* Icons */}
            <div className="flex space-x-4 text-white">
              <button
                aria-label="Search"
                className="text-xl hover:opacity-75 transition cursor-pointer" 
              >
                <FiSearch />
              </button>
              <button
                aria-label="Cart"
                className="text-xl hover:opacity-75 transition"
              >
                <FiShoppingCart />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6 flex justify-center space-x-8 text-sm font-medium uppercase relative z-10">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() => setHovered(item.name)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
              >
                <a href="#" className="hover:opacity-75 relative z-10">
                  {item.name}
                </a>

                {/* Smooth underline animation */}
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-black"
                  initial={{ width: 0 }}
                  animate={{
                    width: hovered === item.name ? "100%" : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
            ))}
          </nav>

          <hr className="border-t border-gray-300 mt-6" />

          {/* Dropdown with images */}
          <AnimatePresence>
            {hoveredItem && hoveredItem.submenu.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full bg-[#eae1d1] shadow-md text-black z-50 overflow-hidden"
                style={{ pointerEvents: hovered ? "auto" : "none" }}
              >
                <div className="max-w-7xl mx-auto px-6 py-8 flex">
                  <div className="w-1/4 pr-8">
                    <h3 className="text-xs uppercase tracking-wider mb-6 text-gray-600">
                      {hoveredItem.name} Categories
                    </h3>
                    <div className="space-y-4">
                      {hoveredItem.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href="#"
                          className="block text-sm uppercase hover:opacity-75 transition-opacity"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="w-px bg-gray-300 mx-8"></div>
                  <div className="flex-1 grid grid-cols-2 gap-6">
                    {hoveredItem.submenu.slice(0, 4).map((sub) => (
                      <div key={sub.name} className="group">
                        <div className="w-[300px] h-[300px] bg-gray-200 mb-2 overflow-hidden rounded-sm">
                          <div className="w-full h-full bg-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <span className="text-gray-500 text-xs">Image</span>
                          </div>
                        </div>
                        <span className="text-xs uppercase">{sub.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
