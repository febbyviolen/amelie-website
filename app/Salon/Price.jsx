import React from "react";

const Price = ({ priceList, title, className }, props) => {
  return (
    <div className={`${className} lg:px-32`}>
      <div className="flex justify-center font-heading text-3xl font-bold py-10">
        {title}
      </div>
      <div className="flex flex-col gap-8 justify-center px-10 font-body pb-10">
        {priceList.map((price, idx) => (
          <div className="flex justify-between items-start " key={idx}>
            <p className="w-full pr-5">{price.title}</p>
            <p className="flex-shrink-0">{price.price}</p>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Price;
