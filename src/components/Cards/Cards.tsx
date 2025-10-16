import React from "react";
import Image from "next/image";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "SHOP",
      description:
        "Shop our highly coveted collection of mid-century furniture and contemporary art.",
      btnText: "SHOP",
      btnLink: "#",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4jJaTVanFHpN6J9l98bLy2Oi3IYWsj_jYA&s", // replace with your image
    },
    {
      id: 2,
      title: "SERVICES",
      description:
        "We would love to curate your residential or commercial space. View our services here.",
      btnText: "VIEW",
      btnLink: "#",
      img: "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg",
    },
    {
      id: 3,
      title: "PORTFOLIO",
      description:
        "Explore Kerrie-Ann's portfolio of evocative & elevated interiors.",
      btnText: "EXPLORE",
      btnLink: "#",
      img: "https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg",
    },
  ];

  return (
    <div className="bg-[#c6a67a] py-12 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto px-6">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col">
            {/* Image */}
            <div className="w-full h-[400px] relative overflow-hidden">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold tracking-wide">
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-gray-900">{card.description}</p>
              <a
                href={card.btnLink}
                className="inline-block mt-4 px-6 py-2 border border-gray-900 text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                {card.btnText} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
