"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const image = [
  "/assets/slide1.jpg",
  "/assets/slide2.jpg",
  "/assets/slide3.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index === image.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 8000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="w-full relative">
      <div className="relative h-[32rem] overflow-hidden">
        {image.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            className={`absolute top-0 left-0 w-full h-full object-cover duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute w-full bg-black h-[32rem] opacity-30"></div>
        <div className="absolute top-0 left-12 lg:left-52">
          <div className="flex flex-col justify-center items-start h-[32rem]  w-full">
            <p className="font-heading font-bold text-5xl lg:text-7xl leading-tight text-white">
              PREMIUM <br className="lg:hidden" /> BEAUTY <br />
              SERVICES
            </p>
            <br />

            <Button title="Hubungi Kami" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
