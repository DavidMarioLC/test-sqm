import { USE_MOCK, fetchData } from "@/utils";
import {
  metadataAdapter,
  adapterPageVideos,
  adapterVideos,
  adapterVideosTotalPages,
  adapterSinglePageVideos,
} from "@/adapters";

export async function fetchMetadataVideosPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "videos",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Videos",
      description: "description",
      url: "url",
      shareImage: "https://nextjs.org/og.png",
      keywords: ["news", "sqm news", "sqm nutrition news"],
    };
  }

  const path = "/metadata";
  const options = {};
  const response = await fetchData(path, params, options, metadataAdapter);
  return response;
}

export async function fetchVideosPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "videos",
  };

  if (USE_MOCK) {
    return {
      title: "Videos",
      description: " Últimas noticias y actualidad SQM",
      image: "/sqm/banner-videos.png",
      imageAlt: "text alt",
    };
  }
  const path = "/pages";
  const options = {};
  const response = await fetchData(path, params, options, adapterPageVideos);
  return response;
}

export async function fetchVideos(query) {
  const params = {
    palabra: query.search,
    application: query.application,
    "video-category": query.category,
    crops: query.crops,
    pagina: query.page,
    por_pagina: query.limit,
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      data: Array.from({ length: 9 }).map((_, i) => ({
        id: i + 1,
        image: "/sqm/video.png",
        imageAlt: `text alt`,
        title: `SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes`,
        slug: `slug-${i + 1}`,
      })),
      pagination: {
        currentPage: 1,
        limit: 10,
        total: 5,
        totalPages: 10,
      },
    };
  }

  const path = "/videos/videos-cards";
  const options = {};
  const response = await fetchData(path, params, options, adapterVideos);
  return response;
}

export async function fetchVideosTotalPages(query) {
  const params = {
    palabra: query.search,
    application: query.application,
    "video-category": query.category,
    crops: query.crops,
    pagina: query.page,
    por_pagina: query.limit,
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      totalPages: 5,
    };
  }

  const path = "/videos/total-paginated-cards";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterVideosTotalPages,
  );
  return response;
}

export async function fetchSingleVideos(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      id: "1",
      image: "/sqm/banner-single-videos.png",
      imageAlt: "text alt",
      title:
        "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
      slug: "slug",
      tags: "Etiqueta, Etiqueta, Etiqueta",
      videoId: "QtjEedSTqO0",
      content: `
       <p>
                Con la finalidad de fomentar comunidades sostenibles a través del
                empoderamiento y formación de agentes de cambio, comenzó una nueva
                edición de Programa Ambiental impartido por Verdical, empresa b de la
                Región de Antofagasta, y SQM Yodo Nutrición Vegetal.
              </p>
              <p>
                La séptima versión beneficiará a más de 500 personas de las escuelas
                Estados Unidos, Bernardo O’Higgins, Carlos Condell, COSAFA, Pablo
                Neruda, Arturo Prat y Pedro Aguirre Cerda, junto a dos juntas de
                vecinos de la comuna.
              </p>
              <p>
                En ese sentido, Leonor González, jefa de Asuntos Comunitarios Pampa de
                SQM Yodo Nutrición Vegetal, destacó: “Estamos muy orgullosos de ser
                parte de este programa que nos permite generar valor social compartido
                como compañía y que nos ayuda a formar comunidades que abrazan el
                medio ambiente. Un proyecto que también se abre a la comunidad,
                generando un tejido social medioambiental sumamente interesante que
                viene a mejorar la calidad de vida de sus habitantes”.
              </p>`,
      relatedArticles: [
        {
          id: "1",
          image: "/sqm/article.png",
          imageAlt: "text alt",
          title:
            "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
          slug: "slug",
        },
        {
          id: "2",
          image: "/sqm/article.png",
          imageAlt: "text alt",
          title:
            "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
          slug: "slug",
        },
        {
          id: "3",
          image: "/sqm/article.png",
          imageAlt: "text alt",
          title:
            "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
          slug: "slug",
        },
      ],
      relatedVideos: [
        {
          id: "1",
          image: "/sqm/video.png",
          imageAlt: "text alt",
          title:
            "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
          slug: "slug",
        },
        {
          id: "2",
          image: "/sqm/video.png",
          imageAlt: "text alt",
          title:
            "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
          slug: "slug",
        },
        {
          id: "3",
          image: "/sqm/video.png",
          imageAlt: "text alt",
          title:
            "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
          slug: "slug",
        },
      ],
      relatedProducts: [
        {
          id: "1",
          image: "/sqm/product-card.png",
          imageAlt: "text alt",
          name: "Ultrasol® Calcium",
          slug: "slug",
        },
        {
          id: "2",
          image: "/sqm/product-card.png",
          imageAlt: "text alt",
          name: "Ultrasol® Calcium",
          slug: "slug",
        },
        {
          id: "3",
          image: "/sqm/product-card.png",
          imageAlt: "text alt",
          name: "Ultrasol® Calcium",
          slug: "slug",
        },
        {
          id: "4",
          image: "/sqm/product-card.png",
          imageAlt: "text alt",
          name: "Ultrasol® Calcium",
          slug: "slug",
        },
      ],
    };
  }

  const path = `/videos/videos-single/${query.slug}`;
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterSinglePageVideos,
  );

  return response;
}

export async function fetchMetadataSingleVideo(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: query.slug,
    type_post: "videospn",
  };

  if (USE_MOCK) {
    return {
      title: "Video single",
      description: "description",
      url: "url",
      shareImage: "https://nextjs.org/og.png",
      keywords: ["news", "sqm news", "sqm nutrition news"],
    };
  }

  const path = "/metadata";
  const options = {};
  const response = await fetchData(path, params, options, metadataAdapter);
  return response;
}
