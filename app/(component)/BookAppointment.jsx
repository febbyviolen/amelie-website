"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { useIsVisible } from "../(util)/useIsVisible";

const BookAppointment = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  return (
    <div
      ref={ref1}
      className={`relative h-96 my-20 overflow-hidden ${
        isVisible1
          ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
          : ""
      }`}
    >
      <div className="relative h-96">
        <Image
          src="/assets/facility2.jpg"
          fill
          className="object-cover"
          alt="img"
        />
        <div className="bg-black absolute top-0 w-full h-96 opacity-50" />
        <div className="absolute top-0">
          <div className="flex flex-col gap-3 lg:gap-4 w-screen h-96 justify-center items-center">
            <p className="font-heading text-white font-bold text-3xl lg:text-4xl text-center">
              RESERVASI/ KONTAK
            </p>
            <p className="text-white font-body text-center lg:text-xl px-10 lg:px-52">
              Kami dengan senang hati akan membantu menjawab pertanyaan Anda
              untuk memberikan kepercayaan lebih dalam memilih layanan kami.
            </p>
            <br />
            <a href="https://wa.me/+62811785130" target="_blank">
              <Button
                title="KONTAK MELALUI WHATSAPP"
                class="bg-secondary p-3 px-4 text-sm text-white font-body rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
