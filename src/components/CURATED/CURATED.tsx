import Image from "next/image";
import React from "react";

const CURATED = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ab8665] px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Left Side (Book Cover) */}
        <div className=" flex-shrink-0 border-4 border-golden-700 shadow-lg">
          <Image
            src="/PICTURES/CURATED.jpg"
            alt="Curated Style Book"
            width={600} // reduced size
            height={600} // reduced size
          />
        </div>

        {/* Right Side (Text + Buttons) */}
        <div className="text-center md:text-left space-y-4 md:space-y-6 max-w-md">
          <p className="text-sm uppercase tracking-wide text-center text-white">
            Introducing
          </p>
          <h1 className="text-3xl md:text-5xl font-serif  leading-snug text-center text-white">
            CURATED <br /> STYLE,
          </h1>
          <p className="text-lg text-white font-light text-center">
            artfully edited homes
          </p>
          <p className="text-sm tracking-wide text-white font-medium text-center">
            AVAILABLE FOR PRE-ORDER NOW
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-center pt-10">
            <button className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all cursor-pointer">
              LEARN MORE
            </button>
            <button className="px-6 py-3 border  border-white text-white rounded-md font-medium hover:bg-white hover:text-black transition-all cursor-pointer">
              ORDER A COPY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CURATED;
