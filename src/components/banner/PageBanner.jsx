import React from "react";
import Image from "next/image";

export const PageBanner = ({ image, imageAlt, title, description }) => {
  return (
    <section className="relative flex h-[600px] items-center justify-center font-museosans md:h-[600px]">
      <span className="absolute inset-0 z-[4] bg-sqm-black/40"></span>
      <img
        src="/decoration/decoration-01.svg"
        className="absolute left-0 right-0 top-0 z-[5] w-full"
        alt=""
        aria-hidden="true"
      />
      <Image
        src={image}
        alt={imageAlt}
        className="absolute h-full w-full object-cover object-center"
        width={1920}
        height={1080}
      />
      <img
        src="/decoration/decoration-02.svg"
        className="absolute bottom-0 left-0 right-0 z-[5] w-full"
        alt=""
        aria-hidden="true"
      />
      <div className="relative z-[6] mb-14 px-5 text-center">
        <h1 className="text-3 text-[2.5rem] font-bold text-sqm-white">
          {title}
        </h1>
        <p className="text-base text-sqm-white">{description}</p>
      </div>
    </section>
  );
};
