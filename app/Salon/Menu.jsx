import Image from "next/image";
import React from "react";

const Menu = ({ showing, img, title, onClick }, props) => {
  return (
    <div
      className={`flex flex-col justify-around items-center gap-3 cursor-pointer`}
      onClick={onClick}
    >
      <div className="h-15 relative">
        <Image
          src={img}
          width={40}
          height={50}
          alt={title}
          className="h-10 relative object-contain"
        />
      </div>
      <p
        className={`${
          showing ? "lg:underline lg:underline-offset-4" : ""
        } font-heading `}
      >
        {title}
      </p>
    </div>
  );
};

export default Menu;
