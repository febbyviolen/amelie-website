"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hero from "./PhotoHero";
import PriceSection from "../(component)/PriceSection";
import { InfiniteLooper } from "../(component)/InfiniteLooper";

import { paketPreweddingPrice } from "@/public/static/Prices";
import { paketPerjamPrice } from "@/public/static/Prices";
import { paketKeluargaPrice } from "@/public/static/Prices";
import AlaCarteSection from "./AlaCarteSection";
import { useIsVisible } from "../(util)/useIsVisible";

const Main = () => {
  const refPrewedding = useRef();
  const isVisiblePrewedding = useIsVisible(refPrewedding);
  const refPerjam = useRef();
  const isVisiblePerjam = useIsVisible(refPerjam);
  const refWisuda = useRef();
  const isVisibleWisuda = useIsVisible(refWisuda);
  const refAlacarte = useRef();
  const isVisibleAlacarte = useIsVisible(refAlacarte);

  return (
    <div>
      <Hero />
      <div
        ref={refPrewedding}
        className={`${
          isVisiblePrewedding
            ? "animate-fade-up animate-duration-[700ms] animate-ease-linear"
            : ""
        }`}
      >
        <PriceSection
          title="PAKET PREWEDDING"
          description="About the package"
          prices={paketPreweddingPrice}
        />
      </div>
      <InfiniteLooper speed="10" direction="right">
        <div className="flex flex-row pr-5 gap-5">
          <Image
            src="/assets/foto1.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
          <Image
            src="/assets/foto2.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
          <Image
            src="/assets/foto3.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
          <Image
            src="/assets/foto4.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
          <Image
            src="/assets/foto5.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
          <Image
            src="/assets/foto6.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
          <Image
            src="/assets/foto7.jpg"
            alt="img"
            width={210}
            height={120}
            className="object-cover"
          />
        </div>
      </InfiniteLooper>
      <div
        ref={refPerjam}
        className={`${
          isVisiblePerjam
            ? "animate-fade-up animate-duration-[700ms] animate-ease-linear"
            : ""
        }`}
      >
        <PriceSection
          title="PAKET PERJAM"
          description="About the package"
          prices={paketPerjamPrice}
        />
      </div>
      <div
        ref={refWisuda}
        className={`${
          isVisibleWisuda
            ? "animate-fade-up animate-duration-[700ms] animate-ease-linear"
            : ""
        }`}
      >
        <PriceSection
          title={
            <span>
              PAKET FOTO <br />
              KELUARGA/ WISUDA
            </span>
          }
          description="(MAKS 8 ORANG, LEBIH DICAS 10RB/ KEPALA)"
          prices={paketKeluargaPrice}
          style="primary"
        />
      </div>
      <div
        ref={refAlacarte}
        className={`${
          isVisibleAlacarte
            ? "animate-fade-up animate-duration-[700ms] animate-ease-linear"
            : ""
        }`}
      >
        <AlaCarteSection />
      </div>
    </div>
  );
};

export default Main;
