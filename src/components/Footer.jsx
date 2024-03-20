import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-start gap-10 max-sm:flex-col pb-8">
        <ul>
          <li>
            <p>Partners </p>
          </li>
          <li className="caption text-n-4 lg:block">
            {" "}
            <a href="https://dia.wiki/" target="_blank">
              Decentralized Intelligence Agency
            </a>
          </li>
          <li className="caption text-n-4 lg:block">
            {" "}
            <a href="https://worldvibeweb.org/" target="_blank">
              World Vibe Web
            </a>
          </li>
          <li className="caption text-n-4 lg:block">
            {" "}
            <a href="https://www.purplerock.xyz/" target="_blank">
              Purplerock
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <p>Resources</p>
          </li>
          <li className="caption text-n-4 lg:block">
            {" "}
            <a href="#" target="_blank">
              Effective Vibes
            </a>
          </li>
          <li className="caption text-n-4 lg:block">
            {" "}
            <a href="https://goldenmeme.org/" target="_blank">
              Golden Meme
            </a>
          </li>
        </ul>
      </div>
      <hr className=" pt-6 border-[#17161a] w-[95.5%]	mx-auto" />
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          Copyright © {new Date().getFullYear()} Uranus, made by Deepesh Sharma
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>{" "}
    </Section>
  );
};

export default Footer;
