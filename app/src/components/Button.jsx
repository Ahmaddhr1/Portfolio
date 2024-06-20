import React from "react";

const Button = ({ text, icon }) => {
  return (
    <a
      href="/Ahmad Daher CV.docx"
      donwnload="true"
      className="flex items-center justify-center gap-3 px-4 py-3 bg-secondary border-0 rounded-lg cursor-pointer "
    >
      <i className={`${icon} flex items-ce`}></i>
      <span className="font-outfit">{text}</span>
    </a>
  );
};

export default Button;
