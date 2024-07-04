"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  WifiIcon,
} from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useIsVisible } from "../(util)/useIsVisible";

const images = [
  "/assets/facility1.jpg",
  "/assets/facility2.jpg",
  "/assets/facility6.jpg",
  "/assets/facility3.jpg",
  "/assets/facility4.jpg",
  "/assets/facility5.jpg",
];

const Facilites = () => {
  const [index, setIndex] = useState(0);

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  function handleBefore() {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="px-10 lg:px-52 pb-20 lg:pt-20 flex flex-col lg:flex-row gap-12 ">
      <div
        ref={ref1}
        className={`flex flex-col gap-10 lg:w-3/4 lg:pr-20 ${
          isVisible1
            ? "animate-fade-up animate-duration-[500ms] animate-ease-linear"
            : ""
        }`}
      >
        <p className="font-heading text-3xl lg:text-4xl font-bold">FASILITAS</p>
        <p className="font-body lg:text-xl">
          Kami memahami betapa pentingnya pengalaman Anda saat berada di salon,
          dan itulah mengapa kami menawarkan fasilitas-fasilitas terbaik untuk
          memastikan kunjungan Anda menjadi momen yang istimewa.
        </p>
        <div
          ref={ref2}
          className={`flex flex-col gap-5 ${
            isVisible2
              ? "animate-fade-up animate-duration-[500ms] animate-ease-linear"
              : ""
          }`}
        >
          <div className="flex gap-5">
            <WifiIcon className="h-8 text-primary" />
            <CreditCardIcon className="h-8 text-primary" />
          </div>
          <ul className="list-disc list-inside font-heading font-bold space-y-3">
            <li>Free wifi & AC</li>
            <li>Lift dalam gedung</li>
            <li>Ruangan spa VIP</li>
            <li>Ruangan khusus hijab</li>
            <li>Pembayaran cashless</li>
          </ul>
        </div>
      </div>

      <div
        ref={ref3}
        className={`relative w-full lg:w-3/4
        ${
          isVisible3
            ? "animate-fade-up animate-duration-[500ms] animate-ease-linear"
            : ""
        } `}
      >
        <div className="relative h-[30rem] lg:h-[30rem] rounded-xl overflow-hidden">
          {images.map((img, i) => (
            <Image
              key={i}
              src={images[i]}
              alt="facilites"
              fill
              className={`object-cover duration-300 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <ChevronLeftIcon
          className="absolute p-1 top-1/2 w-5 bg-white rounded-full left-3 shadow-sm shadow-gray-300 text-primary"
          onClick={handleBefore}
        />
        <ChevronRightIcon
          className="absolute p-1 top-1/2 w-5 bg-white rounded-full right-3 shadow-sm shadow-gray-300 text-primary"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Facilites;
