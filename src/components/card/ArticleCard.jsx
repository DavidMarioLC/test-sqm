"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

export const ArticleCard = ({ article }) => {
  const { translations } = useTranslations();

  const { image, imageAlt, title, slug } = article;

  return (
    <article className="font-museosans">
      <figure className="mb-5 aspect-video overflow-hidden rounded-t-xl rounded-br-xl bg-sqm-bg">
        <Image
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          width={300}
          height={200}
        />
      </figure>

      <h2 className="mb-5 line-clamp-2 text-lg font-medium text-sqm-gray-dark">
        {title}
      </h2>
      <Button variant="outline" asChild>
        <Link href={`/articulos/${slug}`}>{translations.common.readMore}</Link>
      </Button>
    </article>
  );
};
