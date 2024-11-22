import React from "react";
import Image from "next/image";

export const ImageBanner = ({ image, imageAlt }) => {
  return (
    <section className="relative flex h-[400px] items-center justify-center font-museosans md:h-[802px]">
      <img
        src="/decoration/decoration-10.svg"
        className="absolute -top-[1px] left-0 right-0 z-[5] w-full"
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
        src="/decoration/decoration-09.svg"
        className="absolute -bottom-[1px] left-0 right-0 z-[5] w-full"
        alt=""
        aria-hidden="true"
      />
    </section>
  );
};
