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

const MIN_ITEMS = 1;

export const CarouselImages = ({ items }) => {
  const carouselOptions = {
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
    active: true,
    breakpoints: {
      "(min-width: 768px)": {
        active: items.length > MIN_ITEMS,
      },
    },
  };
  return (
    <Carousel
      opts={carouselOptions}
      className="w-full rounded-t-xl rounded-br-xl px-5 py-10 md:py-20"
    >
      <CarouselContent className="">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-3/4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <img
              src={item.image}
              className="h-[250px] w-full rounded-t-xl rounded-br-xl object-contain md:h-[480px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {items.length > MIN_ITEMS && (
        <>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </>
      )}
      <CarouselDots className="hidden" />
    </Carousel>
  );
};
