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
import { ArticleCard } from "../card";

const MIN_ITEMS = 3;

export const CarouselArticles = ({ items }) => {
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
    <Carousel opts={carouselOptions} className="w-full ps-5">
      <CarouselContent className="-ml-6">
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            className="basis-3/4 pl-6 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
          >
            <ArticleCard article={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {items.length > MIN_ITEMS && (
        <>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
          <CarouselDots />
        </>
      )}
    </Carousel>
  );
};
