import React from "react";

const SmallCard = ({ upper, lower }) => {
  return (
    <div className="py-5 px-5 bg-primary flex flex-col rounded-lg  ">
      <p className="body text-3xl font-bold text-white">{upper}</p>
      <p className="body text-white font-light">{lower}</p>
    </div>
  );
};

export default SmallCard;
