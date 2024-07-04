import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-primary p-3 px-4 text-sm text-white font-body rounded-lg ${props.class}`}
      {...props}
    >
      {props.title}
    </button>
  );
};

export default Button;
