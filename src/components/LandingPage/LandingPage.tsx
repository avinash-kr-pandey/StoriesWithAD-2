"use client";
import React from "react";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://www.kerrieannjones.com/cdn/shop/videos/c/vp/eb33bf50d32a49bc8b281157bc61591b/eb33bf50d32a49bc8b281157bc61591b.HD-1080p-7.2Mbps-37975230.mp4?v=0"
          type="video/mp4"
        />
      </video>

   

  
    </div>
  );
};

export default LandingPage;
