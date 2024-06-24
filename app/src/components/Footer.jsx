import React from "react";
import Logo from "../imgs/logo.png";
import { tabs, socialMediaLinks } from "../utils/tabs";

const Footer = () => {
  return (
    <div className="padding h-fit bg-black w-full">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <img src={Logo} alt="logo" className="w-16" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Links</h1>
          {tabs.map((tab, i) => (
            <a
              key={i}
              href={tab.path}
              className="flex flex-col gap-3 hover:text-secondary duration-200 font-outfit"
            >
              <span>{tab.title}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Social Links</h1>
          {socialMediaLinks.map((link, i) => (
            <a
              href={link.url}
              target="_blank"
              className="flex flex-col gap-3 hover:text-secondary duration-200 font-outfit"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
