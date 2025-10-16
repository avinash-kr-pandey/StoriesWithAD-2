import Image from "next/image";
import React from "react";

const LEADING = () => {
  return (
    <div className="bg-[#e8dfd1] py-12 mb-10 min-h-[60vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Side (Image / Placeholder) */}
        <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center">
         <Image src="/PICTURES/_DEV0914.jpg" alt="Leading Interior Stylist" width={600} height={400} className="object-cover w-full h-full"/>
        </div>

        {/* Right Side (Content) */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide mb-4">
            StoriesWithAD JONES IS ONE OF AUSTRALIA’S LEADING INTERIOR STYLISTS.
          </h2>
          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            With a diverse portfolio ranging from residential and commercial
            clients to lifestyle brands and editorial publications, Kerrie-Anns
            work has earned global recognition gracing the covers of local and
            international magazines.
          </p>
          <p className="text-gray-800 text-sm leading-relaxed mb-4">
            Clients seek out the Sydney-based interior designer and stylist for
            her signature curated and soulful approach to creating evocative
            spaces. She effortlessly blends iconic vintage with contemporary
            design, high-end with affordable pieces, harmonised with a palette
            richly layered with colour and texture.
          </p>
          <p className="text-gray-800 text-sm leading-relaxed">
            Kerrie-Ann’s online gallery offers an edited selection of highly
            coveted European mid-century furniture and contemporary art that she
            has personally sourced and curated for her clientele and audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LEADING;
