import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

export const SolutionCard = ({ parentSlug, solution }) => {
  const styles = {
    backgroundImage: `url(${solution.mediumImage ? solution.mediumImage : "/placeholder.svg"})`,
  };

  const { translations } = useTranslations();
  return (
    <article
      className={`group relative flex h-[120px] flex-col items-center justify-center overflow-hidden rounded-xl rounded-bl-none bg-cover bg-center bg-no-repeat p-8 pb-5 text-center md:h-[336px] md:justify-between`}
      style={styles}
    >
      <div className="to-transparent absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] duration-300 ease-in-out group-hover:bg-[#0006]"></div>
      <img
        src={solution.whiteLogo ? solution.whiteLogo : "/placeholder.svg"}
        className="hidden h-[90px] w-[108px] translate-y-16 object-contain opacity-0 duration-300 group-hover:opacity-100 md:block"
      />
      <div className="position-relative z-[2] duration-500 group-hover:translate-y-0 md:translate-y-[65px]">
        <p className="font-museosans text-lg font-black text-sqm-white md:mb-[10px]">
          {solution.name}
        </p>
        <Button
          asChild
          variant="outline"
          className="hidden border-sqm-white text-sqm-white hover:bg-sqm-white hover:text-sqm-blue md:inline-flex"
        >
          <Link href={`/${parentSlug}/${solution.slug}`}>
            {translations.solution.viewSolution}
          </Link>
        </Button>
      </div>
      <Link href={`/${parentSlug}/${solution.slug}`} className="md:hidden">
        <span className="absolute inset-0"></span>
      </Link>
    </article>
  );
};
