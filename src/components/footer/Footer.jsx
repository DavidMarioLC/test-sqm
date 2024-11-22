import React from "react";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ExternalLinkIcon, InfoCircledIcon } from "@radix-ui/react-icons";

export const Footer = ({ data }) => {
  const SOCIAL_ICONS = {
    facebook: <FaFacebookF />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
    twitter: <FaTwitter />,
    x: <FaXTwitter />,
  };

  return (
    <footer className="relative bg-[#AFADAD]">
      <img
        src="/decoration/decoration-06.svg"
        className="absolute left-0 right-0 top-0 z-[5] w-full"
      />
      <Container className="relative z-[6] overflow-hidden px-5 py-10 md:pb-0 md:pt-[240px]">
        <div className="flex flex-col items-start gap-10 md:flex-row md:justify-center md:gap-[73px]">
          <div className="relative mt-auto hidden flex-shrink-0 flex-grow text-center lg:block">
            <img
              src={`/granjero.png`}
              width={294}
              height={373}
              alt="texto alt"
              className="absolute bottom-0 block w-full"
            />

            <p className="mb-4 inline-flex items-center gap-1 border-b border-t border-sqm-white text-sqm-white">
              {data.salitreText} <InfoCircledIcon fontSize={16} />
            </p>
          </div>
          <div className="flex flex-col gap-[60px] md:justify-between">
            <div className="flex flex-col gap-10 md:items-center md:justify-center md:gap-4">
              <img
                src={data.logo}
                className="h-[97px] w-[260px] object-contain"
                width={260}
                height={97}
                alt="texto alt"
              />
              <ul className="flex gap-5">
                {data.socials.map((item, index) => (
                  <li key={item.id}>
                    <Link
                      className="flex h-8 w-8 items-center justify-center text-sqm-white"
                      href={item.link}
                      target="_blank"
                    >
                      {SOCIAL_ICONS[item.name.toLowerCase()]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="hidden text-center font-montserrat text-xs font-medium text-sqm-white md:mt-[20px] md:block md:pb-5">
              {data.copyright}
            </p>
          </div>
          <ul className="flex flex-col gap-4 font-montserrat text-sqm-white">
            {data.links.map((item, index) => (
              <li key={item.id}>
                {item.target === "_blank" ? (
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-base font-semibold"
                    target={item.target}
                  >
                    {item.text} <ExternalLinkIcon />
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="flex items-center gap-2 text-base font-semibold"
                  >
                    {item.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className="text-center font-montserrat text-xs font-medium text-sqm-white md:hidden">
            {data.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
};
