"use client";
import React, { useState, useRef, useEffect } from "react";
import Menu from "./Menu";
import Price from "./Price";
import { useIsVisible } from "../(util)/useIsVisible";

const hairMenu = [
  { title: "Gunting", price: "40K" },
  { title: "Gunting Poni", price: "20K" },
  { title: "Gunting Cuci Cowok", price: "50K" },
  { title: "Gunting Cuci Cewek", price: "80K ~" },
  { title: "Creambath", price: "75K" },
  { title: "Masker/ SPA rambut", price: "85K" },
  { title: "Perawatan Ketombe", price: "150K" },
  { title: "Perawatan Keratin", price: "150K" },
  { title: "Perawatan Rambut Warna", price: "150K" },
  { title: "Hair Colouring/ Highlight", price: "220K ~" },
  { title: "Keriting korea/ Blow Permanent", price: "300K ~" },
];

const spaMenu = [
  { title: "Tanam Bulu Mata", price: "100K" },
  { title: "Keriting Bulu Mata", price: "75K" },
  { title: "Sulam Alis", price: "450K" },
  { title: "Facial Biasa", price: "90K" },
  { title: "Facial Detox Lengkap", price: "150K" },
  { title: "Facial Paket Lengkap", price: "225K" },
  { title: "Tindik Kuping", price: "50K" },
  { title: "Tindik Kuping Sebelah", price: "30K" },
  { title: "Whitening Body", price: "110K" },
  { title: "Lulur Saja", price: "80K" },
  { title: "Massage Badan", price: "70K" },
  { title: "Lulur + Massage + Mandi Susu", price: "225K" },
  { title: "Lulur + Sauna + Mandi Susu + Ratus Vagina", price: "275K" },
  { title: "Creambath + Facial Biasa + Totok Wajah", price: "185K" },
  { title: "Creambath + Refleksi Kaki", price: "115K" },
  { title: "Creambath + Pedi + Mani", price: "160K" },
  { title: "Facial + Creambath + Lulur", price: "220K" },
  { title: "Facial + Creambath", price: "150K" },
  { title: "Facial + Massage", price: "145K" },
];

const makeupMenu = [
  { title: "Makeup + Hairdo/ Hijab", price: "200K" },
  { title: "Makeup + Hairdo/ Hijab by owner", price: "400K" },
];

const nailMenu = [
  { title: "Refleksi Kaki", price: "50K" },
  { title: "Kutek Gel Tangan/ Kaki", price: "60K" },
  { title: "Pedi/ Mani", price: "110K" },
  { title: "Pedi/ Mani + Kutek Gel", price: "160K" },
];

const Main = () => {
  const refHair = useRef();
  const isVisibleHair = useIsVisible(refHair);
  const refSpa = useRef();
  const isVisibleSpa = useIsVisible(refSpa);
  const refMakeup = useRef();
  const isVisibleMakeup = useIsVisible(refMakeup);
  const refNail = useRef();
  const isVisibleNail = useIsVisible(refNail);

  const handleClick = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="relative">
        <div className="lg:fixed lg:top-32 lg:z-40">
          <div className="flex flex-row lg:flex-col lg:gap-10 justify-between px-10 py-10 ">
            <Menu
              title="Rambut"
              img="/assets/hair.svg"
              onClick={() => handleClick(refHair)}
            />
            <Menu
              title="SPA"
              img="/assets/spa.svg"
              onClick={() => handleClick(refSpa)}
            />
            <Menu
              title="Makeup"
              img="/assets/makeup.svg"
              onClick={() => handleClick(refMakeup)}
            />
            <Menu
              title="Kuku"
              img="/assets/nail.svg"
              onClick={() => handleClick(refNail)}
            />
          </div>
        </div>
      </div>
      <div>
        <div
          ref={refHair}
          className={`${
            isVisibleHair
              ? "animate-fade-up animate-duration-[700ms] animate-ease-linear"
              : ""
          }`}
        >
          <Price title="RAMBUT" priceList={hairMenu} />
        </div>
        <div
          ref={refSpa}
          className={`${
            isVisibleSpa
              ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
              : ""
          }`}
        >
          <Price
            title="SPA"
            priceList={spaMenu}
            className="bg-menuBackground"
          />
        </div>
        <div
          ref={refMakeup}
          className={`${
            isVisibleMakeup
              ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
              : ""
          }`}
        >
          <Price title="MAKEUP" priceList={makeupMenu} />
        </div>
        <div
          ref={refNail}
          className={`${
            isVisibleNail
              ? "animate-fade-up animate-duration-[600ms] animate-ease-linear"
              : ""
          }`}
        >
          <Price
            title="KUKU"
            priceList={nailMenu}
            className="bg-menuBackground"
          />
        </div>
      </div>
      {/* <BookAppointment /> */}
    </div>
  );
};

export default Main;
