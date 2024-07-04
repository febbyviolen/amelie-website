"use client";
import { paketBridalPrice } from "@/public/static/Prices";
import PriceCard from "../(component)/PriceCard";
import { useRef } from "react";
import { useIsVisible } from "../(util)/useIsVisible";

const PaketWedding = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref1);

  return (
    <div className="py-20">
      <div
        ref={ref1}
        className={`flex flex-col text-center gap-7 pb-10 ${
          isVisible1
            ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
            : ""
        }`}
      >
        <p className="text-3xl lg:text-4xl font-heading font-bold">
          PAKET PREWEDDING
        </p>
      </div>
      <div
        ref={ref2}
        className={`px-10 lg:px-52 flex justify-center items-center ${
          isVisible2
            ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
            : ""
        }`}
      >
        <div className="grid grid-cols-1 2xl:grid-cols-3 gap-10">
          {paketBridalPrice.map((price, idx) => (
            <PriceCard
              key={price.title}
              title={price.title}
              price={price.price}
              description={
                <ul className="list-disc list-inside text-start px-10">
                  {price.description.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
              }
              newClass={
                idx < 3 ? "h-[55rem] lg:h-[40rem]" : "h-[40rem] lg:h-[25rem]"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaketWedding;
