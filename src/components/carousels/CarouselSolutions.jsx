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
import { SolutionCard } from "../card";
import { useMediaQuery } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

const MIN_ITEMS = 4;

export const CarouselSolutions = ({ parentSlug, items }) => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const carouselOptions = {
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
    active: false,
    breakpoints: {
      "(min-width: 768px)": {
        active: items.length > MIN_ITEMS,
      },
    },
  };

  return (
    <Carousel
      opts={carouselOptions}
      orientation={isLargeScreen ? "horizontal" : "vertical"}
      className="mt-6 w-full"
    >
      <CarouselContent
        className={cn("-ml-6", items.length < MIN_ITEMS && "justify-center")}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            className="basis-full pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <SolutionCard parentSlug={parentSlug} solution={item} />
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
