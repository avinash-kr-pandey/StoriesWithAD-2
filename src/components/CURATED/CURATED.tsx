import Image from "next/image";
import React from "react";

const CURATED = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ab8665] px-6 ">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 md:gap-20">
        {/* Left Side (Book Cover) */}
        <div className="flex-shrink-0 border-[50px] border-gray-400 shadow-lg">
          {" "}
          <Image
            src="/PICTURES/CURATED.jpg"
            alt="Curated Style Book"
            width={600}
            height={600}
          />{" "}
        </div>

        {/* Right Side (Text + Buttons) */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 md:space-y-6 max-w-full">
          <p className="text-sm uppercase tracking-wide text-white">
            Introducing
          </p>
          <h1 className="text-3xl md:text-5xl font-serif leading-snug text-white">
            CURATED STYLE,
          </h1>
          <p className="text-lg text-white font-light">artfully edited homes</p>
          <p className="text-sm tracking-wide text-white font-medium">
            AVAILABLE FOR PRE-ORDER NOW
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
            <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all cursor-pointer">
              LEARN MORE
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all cursor-pointer">
              ORDER A COPY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CURATED;
