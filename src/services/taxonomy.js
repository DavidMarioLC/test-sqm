import { USE_MOCK, fetchData } from "@/utils";
import {
  adapterSinglePageTaxonomy,
  adapterSingleProduct,
  metadataAdapter,
} from "@/adapters";

export async function fetchMetadataTaxonomy(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: query.slug,
    type_post: "products",
  };

  if (USE_MOCK) {
    return {
      title: "Single taxonomy",
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

export async function fetchSingleTaxonomy(query) {
  const params = {
    palabra: query.search,
    applications: query.application,
    // "solution-nutrients": query.solution,
    efficiency: query.efficiency,
    brands: query.brand,
    nutrients: query.solution,
    pagina: query.page,
    por_pagina: query.limit,
    principal: query.taxonomy,
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      title: "Ultrasol",
      image: "/sqm/banner-marca.png",
      imageAlt: "text alt",
      description:
        "La fertirrigación es una técnica que permite la aplicación simultanea de agua y fertilizantes a través del sistema de riego. Se trata por tanto de aprovechar los sistemas RLAF (Riegos Localizados de Alta Frecuencia) para aplicar los nutrientes necesarios a las plantas. A pesar de utilizarse en múltiples sistemas RLAF, la técnica de la fertirrigación está totalmente extendida en el caso del riego por goteo.",
      logo: "/sqm/color-logo-ultrasol.svg",
      logoAlt: "text alt",
      slug: "ultrasol",
      data:
        Array.from({ length: 8 }).map((_, i) => ({
          id: i,
          image: "/sqm/product-card.png",
          imageAlt: "text alt",
          name: "Ultrasol® Calcium",
          slug: "slug",
        })) || [],
      pagination: {
        currentPage: 1,
        limit: 8,
        total: 16,
        totalPages: 2,
      },
      relatedArticles: Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        image: "/sqm/article.png",
        imageAlt: "text alt",
        title:
          "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
        slug: "slug",
      })),
      relatedVideos: Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        image: "/sqm/video.png",
        imageAlt: "text alt",
        title:
          "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
        slug: "slug",
      })),
    };
  }

  const path = `/taxonomy/taxonomy-cards`;
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterSinglePageTaxonomy,
  );
  return response;
}

export async function fetchSingleProduct(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      name: "Ultrasol® Calcium",
      image: "/sqm/single-product.png",
      imageAlt: "text alt",
      slug: "slug",
      details: {
        description: {
          title: "Descripción",
          content: `<p>Ultrasol® Calcium es una importante fuente de calcio y nitrógeno nítrico, esencial en los programas de fertirrigación en sistemas hidropónicos.
El calcio es esencial para la formación y estabilidad de la pared celular, también aumenta el sistema de defensa natural de la planta contra los patógenos.</p>
<p>El nitrógeno nítrico es la fuente de nitrógeno más eficiente para las plantas y mejora la absorción de cationes (K+, Ca++ y Mg++).
No se debe mezclar con sulfatos y fosfatos en soluciones madre altamente concentradas o alcalinas, para evitar precipitaciones de sales insolubles.</p>`,
        },
        specs: {
          title: "Especificaciones Técnicas",
          list: Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            name: "Nitrógeno (N) total:",
            value: "15,5%",
          })),
        },
        material: {
          title: "Material descargable",
          files: Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            text: "Ficha técnica",
            file: "/file.pdf",
          })),
        },
      },
      relatedArticles: Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        image: "/sqm/article.png",
        imageAlt: "text alt",
        title:
          "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
        slug: "slug",
      })),
      relatedVideos: Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        image: "/sqm/video.png",
        imageAlt: "text alt",
        title:
          "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
        slug: "slug",
      })),
      relatedProducts: Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        image: "/sqm/product-card.png",
        imageAlt: "text alt",
        name: "Ultrasol® Calcium",
        slug: "slug",
      })),
      testimonials: Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        image: "/sqm/product-card.png",
        imageAlt: "text alt",
        name: "Ultrasol® Calcium",
        slug: "slug",
      })),
    };
  }

  const path = `/products/products-single/${query.slug}`;
  const options = {};
  const response = await fetchData(path, params, options, adapterSingleProduct);
  return response;
}

export async function fetchMetadataProduct(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: query.slug,
    type_post: "products",
  };

  if (USE_MOCK) {
    return {
      title: "Single product",
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
