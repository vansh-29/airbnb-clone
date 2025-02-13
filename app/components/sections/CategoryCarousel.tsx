"use client";
import { FaFilter } from "react-icons/fa";
import { Button } from "flowbite-react";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "react-feather";
import Image from "next/image";
import FilterComponent from "../ui/Filter";

// Category Data
const categories = [
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
  { name: "Farms", icon: "/farms.jpg" },
  { name: "Cabins", icon: "/cabins.jpg" },
  { name: "Country", icon: "/countryside.jpg" },
  { name: "Play", icon: "/play.jpg" },
  { name: "Rooms", icon: "/rooms.jpg" },
  { name: "Treehouse", icon: "/treehouse.jpg" },
];

const CategoryCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 11 * 52; // Move multiple items at a time
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative max-w-full flex flex-col md:flex-row overflow-x-hidden pt-5">
      <div className="relative w-full md:w-[80%]  mx-5 mb-5 mr-5">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white shadow rounded-full z-10 hidden md:block"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-[43px] mx-4 overflow-x-hidden md:overflow-x-hidden scrollbar-hide scroll-smooth p-2"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[42px] h-[48px] flex flex-col items-center justify-center px-2 py-1 rounded-md relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={24}
                height={24}
              />
              <p
                className="text-[rgb(106,106,106)] mb-1 text-sm transition-colors duration-300"
                style={{
                  color: hoveredIndex === index ? "black" : "rgb(106,106,106)",
                }}
              >
                {category.name}
              </p>
              <div
                className={`absolute bottom-0 h-[2px] bg-black transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ width: hoveredIndex === index ? "100%" : "0%" }}
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white shadow rounded-full z-10 hidden md:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Filter Button */}
      <div className="mt-4 md:mt-0">
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 left-10 text-black border px-4 py-2 rounded-lg"
        >
          <FaFilter size={18} />
          <span className="text-sm md:text-base">Filters</span>
        </Button>
      </div>
      {/* Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white right-20  rounded-lg shadow-lg w-[400px]">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-6 p-2 text-gray-500 hover:text-black"
            >
              <X size={30} />
            </button>
            <FilterComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryCarousel;
