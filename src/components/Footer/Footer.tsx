// components/Footer.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#e7dbc9] text-[#2f2f2f] px-8 md:px-16 py-12 text-sm font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-sm font-light tracking-wide uppercase">
            StoriesWithAD logo
          </h2>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-serif mb-4">EXPLORE</h3>
          <ul className="space-y-1">
            <li>HOME</li>
            <li>GALLERY</li>
            <li>PORTFOLIO</li>
            <li>SERVICES</li>
            <li>PRODUCT</li>
            <li>ONLINE CONSULTS</li>
            <li>
              <a href="mailto:gallery@kerrieannjones.com" className="underline">
                gallery@kerrieannjones.com
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-serif mb-4">RESOURCES</h3>
          <ul className="space-y-1">
            <li>ABOUT</li>
            <li>PRESS</li>
            <li>GAZETTE</li>
            <li>CONTACT</li>
            <li>TRADE APPLICATION</li>
            <li>SHIPPING & DELIVERY</li>
            <li>REFUNDS & RETURNS</li>
            <li>TERMS OF SERVICE</li>
          </ul>
        </div>

        {/* Acknowledgement + Social */}
        <div className="flex flex-col justify-between h-full">
          <p className="text-xs mb-4">
            We acknowledge the Dharawal People as the traditional owners of the
            land on which we live and work. We pay our respect to its elders,
            past, present and future.
          </p>

          {/* Email Subscribe */}
          <div>
            <div className="border-b border-[#2f2f2f] mb-3 flex justify-between items-center">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none placeholder:text-[#2f2f2f] text-sm py-1 w-full"
              />
              <button className="text-xs ml-4">SUBSCRIBE</button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-lg mt-2">
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-xs">
        <p>© StoriesWithAD {year}</p>

        {/* Payment Icons using Google-hosted links */}
        <div className="flex space-x-2 mt-4 md:mt-0">
          {[
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Amex_logo.svg",
              alt: "Amex",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              alt: "Apple Pay",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
              alt: "Google Pay",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png",
              alt: "Mastercard",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Shopify_logo_2018.svg",
              alt: "Shop",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/e/e1/UnionPay_logo.svg",
              alt: "UnionPay",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png",
              alt: "Visa",
            },
          ].map((icon, i) => (
            <Image
              key={i}
              src={icon.src}
              alt={icon.alt}
              width={32}
              height={20}
              className="h-6 w-auto object-contain"
            />
          ))}
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-5 right-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={scrollToTop}
          className="bg-black text-white p-2 rounded shadow"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </motion.div>
    </footer>
  );
};

export default Footer;
