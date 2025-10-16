"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const logos = ["/log/adept.png", 
    "/log/adept.png",
    "/log/adobe.png",
    "/log/alexa.png",
    "/log/bits.png",
    "/log/bosch.png",
    "/log/byjus.png",
    "/log/capgemini.png",
    "/log/cognizant.png",
];

const SolveYourDesign = () => {
  return (
    <section className="bg-[#a67c52] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="https://media.istockphoto.com/id/1415799772/photo/home-interior-with-vintage-furniture.jpg?s=612x612&w=0&k=20&c=E5aUyAFo5_xjHcdk0nEZGVDipOkYEtyXQmJBskUbqo8="
            alt="Kerrie-Ann"
            className="w-full h-auto object-cover rounded-md"
            width={500}
            height={600}
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif uppercase leading-snug">
            Let Kerrie-Ann help solve your design & styling dilemmas.
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Book your 1:1 video consultation. This 55-minute session is your
            chance to ask specific interior style, design, and renovating
            questions. With Kerrie-Ann&rsquo;s expertise, you&apos;ll receive
            joyful, actionable advice.
          </p>
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-[#a67c52] transition rounded-md">
            BOOK NOW →
          </button>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="mt-16 overflow-hidden relative">
        <motion.div
          className="flex gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 opacity-70 grayscale hover:grayscale-0 transition"
              width={150}
              height={40}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolveYourDesign;
