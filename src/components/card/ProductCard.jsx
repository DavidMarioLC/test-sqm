import React from "react";
import Image from "next/image";
import Link from "next/link";

export const ProductCard = ({ parentSlug, product }) => {
  const { image, imageAlt, name, slug } = product;
  return (
    <article className="relative rounded-xl border-2 border-sqm-white p-[10px] font-museosans hover:border-sqm-blue/50 hover:bg-sqm-bg">
      <figure className="relative mb-4 aspect-square overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={imageAlt}
          className="h-full w-full object-contain"
          width={200}
          height={200}
        />
      </figure>
      <h2 className="line-clamp-1 text-lg font-medium text-sqm-gray-dark">
        <Link href={`/${parentSlug}/${slug}`}>
          <span className="absolute inset-0"></span>
          {name}
        </Link>
      </h2>
    </article>
  );
};
