"use client";
import React from "react";
import Service from "./Service";
import { useRef } from "react";
import { useIsVisible } from "../(util)/useIsVisible";
import Button from "./Button";

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
              Kami dengan bangga menyediakan beragam macam servis yang dapat
              memenuhi kebutuhan Anda di Palembang. Kami menawarkan servis salon
              foto dan bridal yang akan membuat momen spesial Anda menjadi lebih
              indah dan tak terlupakan.
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
            iconURL={"/assets/salon.png"}
            title="SALON"
            description="Di salon kami, anda dapat mendapatkan pengalaman perawatan yang lengkap mulai dari rambut, wajah, hingga tangan dan kaki anda"
          />
          <Service
            iconURL={"/assets/camera.png"}
            title="FOTO"
            description="Kami menawarkan layanan foto keluarga, wisuda, anak-anak, pengantin, dan layanan pas foto. Kami juga menyediakan berbagai pilihan bingkai premium untuk menghiasi foto-foto Anda. "
          />
          <Service
            iconURL={"/assets/bride-and-groom.png"}
            title="BRIDAL"
            description="Kami menawarkan layanan sewa gaun dan jas, serta paket lengkap untuk mewujudkan pernikahan impianmu. Tidak perlu repot-repot berkunjung ke banyak tempat, karena kami menyediakan segala yang kamu butuhkan"
          />
        </div>
        {/* <Button
          title="LIHAT LEBIH LANJUT"
          class={`bg-secondary p-3 px-4 text-sm text-white font-body rounded-lg`}
        /> */}
      </div>
    </div>
  );
};

export default Services;
