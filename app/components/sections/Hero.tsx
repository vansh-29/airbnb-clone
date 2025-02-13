import React from "react";
import Card from "../Card";

const listings = Array(12).fill({
  images: [
    "https://a0.muscache.com/im/pictures/miso/Hosting-731672872585103658/original/e28db6a3-6932-4c82-809e-546ef1d9f5a9.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-731672872585103658/original/e28db6a3-6932-4c82-809e-546ef1d9f5a9.jpeg",
    "https://a0.muscache.com/im/pictures/miso/Hosting-731672872585103658/original/e28db6a3-6932-4c82-809e-546ef1d9f5a9.jpeg",
  ],
  title: "Manali, India",
  location: "Manali, India",
  distance: "396 kilometers away",
  date: "13-18 Feb",
  price: "₹3,996 night",
  rating: 4.87,
  badge: "Guest Favourite",
});

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 ">
      {listings.map((listing, index) => (
        <Card key={index} {...listing} />
      ))}
    </div>
  );
};

export default Hero;
