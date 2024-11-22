import { adapterDistribuitorsPage, metadataAdapter } from "@/adapters";
import { USE_MOCK, fetchData } from "@/utils";

export async function fetchMetadataDistribuitorsPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "distribuidores",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Distribuidores",
      description: "description",
      url: "url",
      shareImage: "https://nextjs.org/og.png",
      keywords: ["keywords 01", "keywords 02", "keywords 03"],
    };
  }

  const path = "/metadata";
  const options = {};
  const response = await fetchData(path, params, options, metadataAdapter);
  return response;
}

export async function fetchDistribuitorsPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "distribuidores",
  };

  if (USE_MOCK) {
    return {
      title: "Distribuidores",
      subtitle:
        "Encuentra el distribuidor o representante SQM más carcano a tu zona.",
      image: "/sqm/banner-distribuidores.png",
      imageAlt: "text alt",
      informativeText: "¿Te interesa distribuir soluciones SQM?",
      buttonText: "Contáctanos",
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterDistribuitorsPage,
  );
  return response;
}
