"use client";
import React from "react";
import { motion } from "framer-motion";

const TextPart = () => {
  return (
    <section
      id="Rte--template--18769130914038__section_rich_text_X4ViGy"
      className="relative flex items-center justify-center px-6"
      style={{
        minWidth: "320px",
        color: "var(--COLOR-TEXT)",
        backgroundColor: "var(--COLOR-BG)",
        fontSize: "var(--FONT-SIZE-BASE)",
        paddingTop: "var(--PT, 60px)",
        paddingBottom: "var(--PB, 60px)",
      }}
      data-aos="hero"
      data-aos-order="1"
    >
      <motion.div
        initial={{ opacity: 0.001, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="font-serif font-normal leading-relaxed text-4xl md:text-5xl">
          WELCOME <span className="italic">to</span> StoriesWithAD.{" "}
          <span className="italic">a CREATIVE design studio & gallery</span>{" "}
          CURATING ELEVATED & SOULFUL <span className="italic">interiors.</span>
        </p>
      </motion.div>
    </section>
  );
};

export default TextPart;
