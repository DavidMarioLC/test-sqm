import Link from "next/link";
import React from "react";

export const BrandCard = ({ brand }) => {
  return (
    <article
      className="group relative flex h-[140px] w-[140px] flex-col items-center justify-center gap-2 overflow-hidden rounded-full border text-center sm:h-[200px] sm:w-[200px]"
      style={{
        backgroundImage: `url(${brand.mediumImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#000] to-[#ffffff00] duration-300 ease-in-out group-hover:bg-[#0006]"></div>
      <img
        src={brand.whiteLogo}
        alt={brand.name}
        width={130}
        height={30}
        className="h-[21px] w-[100px] translate-y-[50px] duration-300 ease-in-out group-hover:translate-y-0 sm:h-[30px] sm:w-[127px] sm:translate-y-[60px]"
      />
      <p className="z-[1] max-w-[132px] text-base font-normal text-sqm-white opacity-0 duration-300 ease-in-out group-hover:opacity-100">
        {brand.shortDescription}
      </p>
      <Link href={`/marca/${brand.slug}`}>
        <span className="absolute inset-0 z-10"></span>
      </Link>
    </article>
  );
};
