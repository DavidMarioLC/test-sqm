import { USE_MOCK, fetchData } from "@/utils";

import {
  adapterSinglePageNews,
  adapterPageNews,
  adapterNews,
  adapterNewsTotalPages,
} from "@/adapters/news";
import { metadataAdapter } from "@/adapters";

export async function fetchMetadataNewsPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "noticias",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Noticias",
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

export async function fetchNewsPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "noticias",
  };

  if (USE_MOCK) {
    return {
      title: "Noticias",
      description: " Últimas noticias y actualidad SQM",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
    };
  }
  const path = "/pages";
  const options = {};
  const response = await fetchData(path, params, options, adapterPageNews);
  return response;
}

export async function fetchNews(query) {
  const params = {
    palabra: query.search,
    fecha: query.date,
    pagina: query.page,
    por_pagina: query.limit,
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      data: Array.from({ length: 9 }).map((_, i) => ({
        id: i + 1,
        image: "/sqm/noticia.png",
        imageAlt: `text alt `,
        date: new Date().toISOString(),
        title: `Más de 500 personas participarán de la nueva versión del Programa Ambiental en Tocopilla`,
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

  const path = "/news/news-cards";
  const options = {};
  const response = await fetchData(path, params, options, adapterNews);
  return response;
}

export async function fetchNewsTotalPages(query) {
  const params = {
    pagina: query.page,
    por_pagina: query.limit,
    fecha: query.date,
    palabra: query.search,
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      totalPages: 5,
    };
  }

  const path = "/news/total-paginated-cards";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterNewsTotalPages,
  );
  return response;
}

export async function fetchSingleNews(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      id: 1,
      title:
        "Más de 500 personas participarán de la nueva versión del Programa Ambiental en Tocopilla",
      date: new Date().toISOString(),
      image: "/sqm/banner-single-noticia.png",
      imageAlt: "text alt",
      content: `  <p>
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
        </p>
        <img
          src="/sqm/single-noticia-01.png"
          alt=""
        />
        <p>
          En ese sentido, Leonor González, jefa de Asuntos Comunitarios Pampa de
          SQM Yodo Nutrición Vegetal, destacó: “Estamos muy orgullosos de ser
          parte de este programa que nos permite generar valor social compartido
          como compañía y que nos ayuda a formar comunidades que abrazan el
          medio ambiente. Un proyecto que también se abre a la comunidad,
          generando un tejido social medioambiental sumamente interesante que
          viene a mejorar la calidad de vida de sus habitantes”.
        </p>`,
      relatedNews: Array.from({ length: 3 }).map((_, i) => ({
        id: i,
        image: "/sqm/noticia.png",
        imageAlt: "text alt",
        date: new Date().toISOString(),
        title:
          "Más de 500 personas participarán de la nueva versión del Programa Ambiental en Tocopilla",
        slug: "slug",
      })),
    };
  }

  const path = `/news/news-single/${query.slug}`;
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterSinglePageNews,
  );
  return response;
}

export async function fetchMetadataSingleNews(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: query.slug,
    type_post: "post",
  };

  if (USE_MOCK) {
    return {
      title: "Single noticia",
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
