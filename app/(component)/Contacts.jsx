import React from "react";
import Link from "next/link";
import Instagram from "@/public/assets/instagram";
import Whatsapp from "@/public/assets/Whatsapp";
import Image from "next/image";

const Contacts = () => {
  return (
    <div className="px-10 lg:px-52 pb-20">
      <div className="flex flex-col lg:flex-row flex: justify-between">
        <div className="flex flex-col gap-10">
          <p className="text-3xl font-heading font-bold">KONTAK</p>
          <div className="font-body flex flex-col gap-5">
            <div>
              <p>TELP: 0811785130</p>
              <p>(0711) 716185</p>
            </div>
            <div>
              <p>
                BUKA JAM <span className="font-bold">08:30 ~ 18:00</span>
              </p>
              <p>JL.LETDA ABDUL ROZAK NO.61, ILIR TIMUR II, PALEMBANG</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-heading font-bold text-xl">SOCIAL MEDIA</p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/ameliebridall" target="_blank">
                <Instagram className="fill-gray-600 hover:fill-gray-900" />
              </a>
              <a href="https://wa.me/+62811785130" target="_blank">
                <Whatsapp className="fill-gray-600 hover:fill-gray-900" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-2/4 relative">
          <Image
            src="/assets/salon.jpg"
            alt="image"
            fill
            className="relative top-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
