"use client";

import Image from "next/image";
import React, { useRef } from "react";

const arrivalsData = [
  {
    id: 1,
    img: "/PICTUREs/_DEV0809.jpg",
    title: "Fantasma Floor Lamp",
    price: "$10,950.00",
  },
  {
    id: 2,
    img: "/PICTUREs/_DEV0830.jpg",
    title: "Medium Ceramic Black Footed Bowl",
    price: "$240.00",
  },
  {
    id: 3,
    img: "/PICTUREs/_DEV0836.jpg",
    title: "Pianura Black Velvet Armchairs",
    price: "$7,900.00",
  },
  {
    id: 4,
    img: "/PICTUREs/_DEV0842.jpg",
    title: "Impermanence Original Artwork",
    price: "$4,200.00",
  },
  {
    id: 5,
    img: "/PICTUREs/_DEV0875.jpg",
    title: "Vintage Side Table",
    price: "$1,800.00",
  },
  {
    id: 6,
    img: "/PICTUREs/_DEV0809.jpg", // You can reuse one of your images or add a new one
    title: "Classic Floor Vase",
    price: "$350.00",
  },
];


const ARRIVALS = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#a67c52] py-10 px-6 min-h-screen relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2
          className="text-2xl font-bold text-gray-600 uppercase text-white"
          style={{
            fontFamily: "var(--FONT-STACK-HEADING)",
            fontStyle: "var(--FONT-STYLE-HEADING)",
            fontWeight: "var(--FONT-WEIGHT-HEADING)",
            letterSpacing: "var(--LETTER-SPACING-HEADING)",
            // lineHeight: 1.2,
            margin: "0.5em 0",
          }}
        >
          NEW ARRIVALS
        </h2>

        <button className="border text-white px-4 py-2 hover:bg-white hover:text-[#a67c52] transition cursor-pointer">
          SHOP NOW
        </button>
      </div>

      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 -translate-y-1/2 left-5 z-20 bg-white text-[#a67c52] p-3 rounded-full h-12 w-12 shadow-md hover:bg-gray-200 transition cursor-pointer"
      >
        &#8249;
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -translate-y-1/2 right-5 z-20 bg-white text-[#a67c52] p-3 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer h-12 w-12"
      >
        &#8250;
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-4 scrollbar-none scroll-smooth relative"
        style={{ scrollbarWidth: "none" }}
      >
        {arrivalsData.map((item) => (
          <div
            key={item.id}
            className="min-w-[300px] bg-[#e9e0d4] hover:bg-white transition rounded shadow-sm relative"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="w-full h-[350px] object-cover rounded-t"
              width={400}
              height={500}
            />
            <div className="p-4 text-center">
              <p className="text-sm text-gray-800">{item.title}</p>
              <p className="text-gray-600 mt-2 font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ARRIVALS;
