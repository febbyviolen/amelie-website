"use client";
import React from "react";
import Service from "../(component)/Service";
import { useRef } from "react";
import { useIsVisible } from "../(util)/useIsVisible";
import Button from "../(component)/Button";

const Services = () => {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  return (
    <div className={`py-20 px-10`}>
      <div className="flex flex-col items-center gap-12">
        {/* title */}
        <div
          ref={ref1}
          className={`flex flex-col gap-3 items-center
        ${
          isVisible1
            ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
            : ""
        }`}
        >
          <div className="flex flex-col text-center gap-7">
            <p className="text-3xl lg:text-4xl font-heading font-bold">
              SERVIS KAMI
            </p>
            <p className="lg:text-xl font-body lg:px-52">
              Terletak di Palembang, kami menawarkan layanan lengkap untuk hari
              pernikahan Anda - mulai dari makeup & hairdo, penyewaan gaun &
              jas, hingga foto pra-pernikahan. Buat momen bahagia Anda menjadi
              lebih sempurna bersama kami.
            </p>
          </div>
        </div>

        {/* service list */}
        <div
          ref={ref2}
          className={`flex flex-col lg:flex-row items-center gap-10 ${
            isVisible2
              ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
              : ""
          }`}
        >
          <Service
            iconURL={"/assets/makeup-hairdo.svg"}
            title="MAKEUP & HAIRDO"
            width={50}
            description="Kami memahami bahwa hari pernikahan Anda adalah salah satu hari terpenting dalam hidup Anda, dan kami berkomitmen untuk membuat Anda terlihat dan merasa sebaik mungkin."
          />
          <Service
            iconURL={"/assets/dress.svg"}
            title="SEWA GAUN & JAS"
            description="Kami menyediakan pakaian berkualitas tinggi dan terawat dengan baik untuk pelanggan kami. Proses sewa kami tanpa ribet dan harga kami terjangkau, sehingga memudahkan Anda tampil maksimal."
          />
          <Service
            iconURL={"/assets/photo.svg"}
            title="FOTO"
            description="Dengan peralatan berkualitas tinggi dan keahlian kami, kami memastikan bahwa foto-foto Anda akan memiliki kualitas terbaik."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
