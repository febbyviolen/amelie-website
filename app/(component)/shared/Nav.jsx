"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./nav.module.css";
import Instagram from "@/public/assets/instagram";
import Whatsapp from "@/public/assets/Whatsapp";
import logo from "@/public/assets/Logo.svg";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();

  function handleClick() {
    setToggleMenu(false);
  }

  return (
    <div className={styles.nav}>
      <nav>
        <div className="max-w mx-10">
          <div className="flex mx-auto w-full justify-around">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-6">
              {/* logo */}
              <div className="self-start justify-start">
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center"
                >
                  <Image src={logo} alt="AMELIE" height={50} />
                </Link>
              </div>
            </div>

            {/* primary */}
            <div className="flex items-center gap-16 my-6 mx-auto">
              <div className="hidden lg:flex gap-10 self-center text-text font-body">
                <Link
                  href="/Salon"
                  className={`${styles.link} ${
                    pathname === "/Salon"
                      ? "underline font-bold text-gray-900 underline-offset-4"
                      : ""
                  } `}
                >
                  SALON
                </Link>
                <Link
                  href="/Photo"
                  className={`${styles.link} ${
                    pathname === "/Photo"
                      ? "underline font-bold text-gray-900 underline-offset-4"
                      : ""
                  }`}
                >
                  FOTO
                </Link>
                <Link
                  href="/Wedding"
                  className={`${styles.link} ${
                    pathname === "/Wedding"
                      ? "underline font-bold text-gray-900 underline-offset-4"
                      : ""
                  }`}
                >
                  WEDDING
                </Link>
                <Link
                  href="/Contact"
                  className={`${styles.link} ${
                    pathname === "/Contact"
                      ? "underline font-bold text-gray-900 underline-offset-4"
                      : ""
                  }`}
                >
                  KONTAK
                </Link>
              </div>
            </div>

            {/* secondary */}
            <div className="flex items-center gap-16 my-6">
              <div className="hidden lg:flex gap-8 self-center">
                <a
                  href="https://www.instagram.com/ameliebridall"
                  target="_blank"
                >
                  <Instagram className="fill-gray-600 hover:fill-gray-900" />
                </a>
                <a href="https://wa.me/+62811785130" target="_blank">
                  <Whatsapp className="fill-gray-600 hover:fill-gray-900" />
                </a>
              </div>
            </div>

            {/* mobile navigation */}
            <div className="lg:hidden flex items-center justify-end">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {!toggleMenu && <Bars3Icon className="h-8 text-gray-900" />}
                {toggleMenu && <XMarkIcon className="h-8 text-gray-900" />}
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-white overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-10">
            <div className="flex flex-col gap-8 font-bold tracking-wider text-gray-600 font-body">
              <Link
                onClick={handleClick}
                href="/Salon"
                className={`${styles.link} ${
                  pathname === "/Salon"
                    ? "underline font-bold text-black underline-offset-4"
                    : ""
                } `}
              >
                SALON
              </Link>
              <Link
                onClick={handleClick}
                href="/Photo"
                className={`${styles.link} ${
                  pathname === "/Photo"
                    ? "underline font-bold text-black underline-offset-4"
                    : ""
                }`}
              >
                FOTO
              </Link>
              <Link
                onClick={handleClick}
                href="/Wedding"
                className={`${styles.link} ${
                  pathname === "/Wedding"
                    ? "underline font-bold text-gray-900 underline-offset-4"
                    : ""
                }`}
              >
                WEDDING
              </Link>
              <Link
                onClick={handleClick}
                href="/Contact"
                className={`${styles.link} ${
                  pathname === "/Contact"
                    ? "underline font-bold text-gray-900 underline-offset-4"
                    : ""
                }`}
              >
                KONTAK
              </Link>
              <div className="flex gap-5">
                <a
                  href="https://www.instagram.com/ameliebridall"
                  target="_blank"
                >
                  <Instagram className="fill-gray-600 hover:fill-gray-900" />
                </a>
                <a href="https://wa.me/+62811785130" target="_blank">
                  <Whatsapp className="fill-gray-600 hover:fill-gray-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
