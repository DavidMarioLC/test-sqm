"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

export const NewsCard = ({ news }) => {
  const { title, image, imageAlt, date, slug } = news;
  const formatDateSimple = (date) => {
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(date));
  };
  const { translations } = useTranslations();
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
      <time
        className="mb-2 block font-montserrat text-base font-normal text-sqm-gray-dark"
        dateTime={formatDateSimple(date)}
      >
        {formatDateSimple(date)}
      </time>
      <h2 className="mb-5 line-clamp-3 text-lg font-medium text-sqm-gray-dark">
        {title}
      </h2>
      <Button variant="outline" asChild>
        <Link href={`/noticias/${slug}`}>{translations.common.readMore}</Link>
      </Button>
    </article>
  );
};
