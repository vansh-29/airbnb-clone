"use client"
// import {Card} from "./components/Card";
import Hero from "./components/sections/Hero";
import CategoryCarousel from "./components/sections/CategoryCarousel";
export default function Home() {
  return (
    <>
    <div className="relative">
      <CategoryCarousel/>
      <Hero/>

    </div>
    </>
  );
}
