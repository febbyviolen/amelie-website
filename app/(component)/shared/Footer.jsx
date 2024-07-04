import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary h-32 flex justify-between px-10 lg:px-52 items-center">
      <div className="font-body text-start text-white text-xs self">
        <p>© 2023 AMELIE</p>
        <p>All Rights Reserved.</p>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-3 font-bold font-body text-start text-white">
        <Link href="/Salon">Salon</Link>
        <Link href="/Photo">Foto</Link>
        <Link href="/Wedding">Wedding</Link>
        <Link href="/Contact">Kontak</Link>
      </div>
    </div>
  );
};

export default Footer;
