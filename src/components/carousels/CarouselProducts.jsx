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
import { ProductCard } from "../card";

const MIN_ITEMS = 5;

export const CarouselProducts = ({ parentSlug, items }) => {
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
      <CarouselContent className="-ml-4">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-3/4 md:basis-1/2 lg:basis-1/4"
          >
              <ProductCard parentSlug={parentSlug} product={item} />
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
