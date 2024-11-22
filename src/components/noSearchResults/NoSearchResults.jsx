"use client";
import { useTranslations } from "@/providers/GeneralTranslateProvider";
import Image from "next/image";
import React from "react";

export const NoSearchResults = () => {
  const { translations } = useTranslations();
  return (
    <div className="text-center font-montserrat">
      <Image
        src="/noSearchResult.svg"
        className="mx-auto h-[200px] w-[250px]"
        width={250}
        height={200}
        alt="text alt"
      />
      <div className="mb-5">
        <p className="mb-1 text-xl font-bold text-sqm-black">
          {translations.search.searchNotFound}
        </p>
        <p className="font-xl font-normal">
          {translations.search.trySearchAgain}
        </p>
      </div>
    </div>
  );
};
