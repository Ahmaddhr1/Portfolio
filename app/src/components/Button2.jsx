import React from "react";

const Button2 = ({ text, icon, section }) => {
  return (
    <a
      href={"#" + section}
      className="flex items-center justify-center gap-3 px-4 py-3 bg-transparent border border-secondary rounded-lg cursor-pointer "
    >
      <i className={`${icon} flex items-center`}></i>
      <span className="font-outfit">{text}</span>
    </a>
  );
};

export default Button2;
