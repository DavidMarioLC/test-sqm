import React from "react";
import Image from "next/image";

export const VideoBanner = ({ video, title, description }) => {
  return (
    <section className="relative flex h-[450px] items-center justify-center font-museosans md:h-[781px]">
      <span className="absolute inset-0 z-[4] bg-sqm-black/60"></span>
      <img
        src="/decoration/decoration-01.svg"
        className="absolute left-0 right-0 top-0 z-[5] w-full"
        alt=""
        aria-hidden="true"
      />
      <video
        className="absolute h-full w-full object-cover object-center"
        width="500"
        height="500"
        muted
        autoPlay
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <img
        src="/decoration/decoration-02.svg"
        className="absolute bottom-0 left-0 right-0 z-[5] w-full"
        alt=""
        aria-hidden="true"
      />
      <div className="relative z-[6] mx-auto mb-14 max-w-[1024px] text-center text-sqm-white">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-[2rem] font-bold">{description}</p>
      </div>
    </section>
  );
};
