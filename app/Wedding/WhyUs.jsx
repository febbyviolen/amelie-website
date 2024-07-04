"use client";
import React from "react";
import SmallCard from "./SmallCard";
import { useRef } from "react";
import { useIsVisible } from "../(util)/useIsVisible";

const WhyUs = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  return (
    <div className="px-10 py-10 bg-menuBackground">
      <div
        ref={ref1}
        className={`flex flex-col items-center ${
          isVisible1
            ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
            : ""
        }`}
      >
        <p className="header font-normal">KENAPA KAMI?</p>
        <div className="flex flex-col lg:flex-row gap-2 pt-10 lg:gap-8">
          <SmallCard upper="500+" lower="Pasangan bahagia" />
          <SmallCard upper="10+" lower="Tahun pengalaman" />
          <SmallCard upper="5+" lower="Destinasi terlayani" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
