import React from "react";
import PriceCard from "./PriceCard";

const PriceSection = ({ title, description, prices, style }, props) => {
  let theme = "";

  switch (style) {
    case "transparent":
      theme = "";
      break;
    case "primary":
      theme = "bg-menuBackground";
      break;
    default:
      theme = "";
      break;
  }

  return (
    <div className={`py-20 px-10 ${theme}`}>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col text-center gap-2">
          <p className="font-heading text-3xl font-bold">{title}</p>
          <p className="font-body">{description}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {prices.map((price, idx) => (
            <PriceCard
              key={price.title}
              title={price.title}
              price={price.price}
              description={
                <ul className="list-disc list-inside text-start px-10">
                  {price.description.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
              }
              style={style || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
