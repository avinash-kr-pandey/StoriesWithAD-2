import Image from "next/image";
import React from "react";

const LeadingTwo = () => {
  return (
    <div className="bg-[#e8dfd1] py-16 mb-10 min-h-[60vh]">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6">
        {/* Left Side (Content) */}
        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-widest text-gray-700 mb-3">
            Welcome to Interior Styling 101
          </p>
          <h2 className="text-xl md:text-xl font-serif font-normal leading-snug mb-6 text-gray-600 uppercase ">
            An online styling course for beginners where you’ll learn how to
            style a home that reflects you, what you love and how you live.
          </h2>
          <p className="text-gray-700 text-base md:text-md leading-relaxed mb-4">
            Packed full of ideas and inspiration, Kerrie-Ann’s advice will
            ensure you bring your home to life through creativity and styling.
            You’ll discover how to define your personal interior style, and
            tackle any styling project, from hanging art and creating a vignette
            to styling your bedroom and making the most of what you already own
            and love.
          </p>
          <p className="text-gray-700 text-base md:text-md leading-relaxed mb-4">
            Learn how even a few minor changes can transform how a room feels.
            This course will equip you with all the skills to make your home a
            place you love and confidently reflect your interior style.
          </p>
          <p className="text-gray-700 text-base md:text-md leading-relaxed mb-6">
            This program is completely self-paced and you will have full
            lifestyle access.
          </p>
          <button className="bg-[#a97c50] hover:bg-[#91673f] transition-all text-white px-6 py-3 rounded-md w-fit font-medium shadow-md">
            ENROL →
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://img.freepik.com/free-photo/interior-design-objects_23-2149322592.jpg"
            alt="Interior Styling Course"
            className="w-full h-full object-cover"
            width={600}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadingTwo;
