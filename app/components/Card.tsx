"use client";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Heart } from "react-feather";
import { useRef } from "react";

interface CardProps {
  images: string[];
  title: string;
  location: string;
  distance: string;
  date: string;
  price: string;
  rating?: number;
  badge?: string;
}

const Card = ({
  images,
  title,
  location,
  distance,
  date,
  price,
  rating,
  badge,
}: CardProps) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // No auto-scroll
  };

  return (
    <div className="relative w-full rounded-lg overflow-x-hidden bg-white group">
      
      {/* Badge */}
      {badge && (
        <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-semibold rounded-lg shadow">
          {badge}
        </span>
      )}

      {/* Favorite Button */}
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
        <Heart size={18} className="text-gray-600 hover:text-red-500" />
      </button>

      {/* Image Carousel */}
      <div className="relative">
        <Slider className="" ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="w-full h-[264px] relative">
              <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          ))}
        </Slider>

        {/* Left & Right Navigation Buttons - Only Show on Hover */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Card Details - Adjusted Spacing & Font Sizes */}
      <div className="pt-3">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-semibold leading-tight">{title}</h3>
          {rating && (
            <span className="text-xs font-semibold flex items-center text-gray-700">
              <span className="text-yellow-500 text-base">★</span> {rating}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-500 leading-tight">{location}</p>
        <p className="text-xs text-gray-500 leading-tight">{distance}</p>
        <p className="text-xs text-gray-500 leading-tight">{date}</p>
        <div className="flex justify-between items-center mt-1">
          <span className="font-semibold text-sm">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
