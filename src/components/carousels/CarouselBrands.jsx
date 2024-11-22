"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import { BrandCard } from "../card/BrandCard";

export const CarouselBrands = ({ items }) => {
  const carouselOptions = {
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
    axis: "x",
    breakpoints: {
      "(min-width: 768px)": {
        active: items.length > 5,
      },
    },
  };

  return (
    <Carousel opts={carouselOptions} className="w-full">
      <CarouselContent className="-ml-3">
        {items.map((item, index) => (
          <CarouselItem key={item.id} className="basis-[45%] pl-3 lg:basis-1/5">
            <BrandCard brand={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {items.length > 5 && (
        <>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </>
      )}
      <CarouselDots className="hidden" />
    </Carousel>
  );
};
