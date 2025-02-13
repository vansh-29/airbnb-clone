"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FilterComponent = () => {
  const [filters, setFilters] = useState({
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
  });
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
  const [amenities, setAmenities] = useState([
    { name: "Wifi", icon: "\u{1F4F6}", isSelected: false },
    { name: "Kitchen", icon: "\u{1F373}", isSelected: false },
    { name: "Washing machine", icon: "\u{1F9FA}", isSelected: false },
    { name: "Dryer", icon: "\u{1F9F4}", isSelected: false },
    { name: "Air conditioning", icon: "\u{2744}", isSelected: false },
    { name: "Heating", icon: "\u{1F321}", isSelected: false },
  ]);

  const handleIncrement = (field) => {
    setFilters((prev) => ({ ...prev, [field]: prev[field] + 1 }));
  };

  const handleDecrement = (field) => {
    setFilters((prev) => ({
      ...prev,
      [field]: prev[field] > 0 ? prev[field] - 1 : 0,
    }));
  };

  const toggleAmenity = (index) => {
    setAmenities((prev) =>
      prev.map((amenity, i) =>
        i === index ? { ...amenity, isSelected: !amenity.isSelected } : amenity
      )
    );
  };

  return (
    <div className="">
      <div className="bg-white w-[568px] p-6 rounded-lg shadow-md">
        <h2 className="text-xl text-center font-semibold ">Filters</h2>
        <div className="p-2 border-b"></div>
        {/* Rooms and Beds Section */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-4">Rooms and beds</h3>
          {Object.keys(filters).map((key) => (
            <div key={key} className="flex justify-between items-center py-2">
              <span className="capitalize text-[16px]">{key}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDecrement(key)}
                  className="p-2 border rounded-full text-gray-500"
                  disabled={filters[key] === 0}
                >
                  <Minus size={20} />
                </button>
                <span className="w-5 mx-4 text-xl text-center">{filters[key]}</span>
                <button
                  onClick={() => handleIncrement(key)}
                  className="p-2 border rounded-full text-gray-500"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-2 border-b"></div>

        {/* Amenities Section */}
        <div className="mt-8">
          <h3 className="text-xl mb-8 font-semibold">Amenities</h3>
          <div className="flex flex-wrap gap-4 mt-2">
            {amenities.map((amenity, index) => (
              <button
                key={amenity.name}
                onClick={() => toggleAmenity(index)}
                className={`flex items-center text-lg gap-2 border rounded-full px-4 py-2 text-gray-600 hover:border-black ${
                  amenity.isSelected ? "border-black border-[2.5px] bg-gray-200" : ""
                }`}
              >
                <span>{amenity.icon}</span>
                {amenity.name}
              </button>
            ))}
          </div>
        </div>
        <div className="p-2 mt-8 border-b"></div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center">
          <button
            className="text-gray-500 text-sm"
            onClick={() =>
              setAmenities(amenities.map((a) => ({ ...a, isSelected: false })))
            }
          >
            Clear all
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Show 1,000+ places
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
