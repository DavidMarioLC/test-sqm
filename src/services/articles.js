import { USE_MOCK, fetchData } from "@/utils";
import {
  metadataAdapter,
  adapterSinglePageArticles,
  adapterPageArticles,
  adapterArticles,
  adapterArticlesTotalPages,
} from "@/adapters";

export async function fetchMetadataArticlesPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "articulos",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Articulos",
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

export async function fetchArticlesPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "articulos",
  };

  if (USE_MOCK) {
    return {
      title: "Articulos",
      description: "Filtra nuestras soluciones, artículos y videos por:",
      image: "/sqm/banner-articulos.png",
      imageAlt: "text alt",
    };
  }
  const path = "/pages";
  const options = {};
  const response = await fetchData(path, params, options, adapterPageArticles);
  return response;
}

export async function fetchArticles(query) {
  const params = {
    palabra: query.search,
    application: query.application,
    nutrients: query.nutrients,
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
        image: "/sqm/article.png",
        imageAlt: `text alt`,
        title: `El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas`,
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

  const path = "/articles/articles-cards";
  const options = {};
  const response = await fetchData(path, params, options, adapterArticles);
  return response;
}

export async function fetchArticlesTotalPages(query) {
  const params = {
    palabra: query.search,
    application: query.application,
    nutrients: query.nutrients,
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

  const path = "/articles/total-paginated-cards";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterArticlesTotalPages,
  );
  return response;
}

export async function fetchSingleArticle(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      id: 1,
      image: "/sqm/banner-single-articulos.png",
      imageAlt: "text alt",
      title:
        "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
      tags: "Etiqueta, Etiqueta, Etiqueta",
      slug: "slug",
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
      file: "file.pdf",
      author:
        "Bulut,F., Ş. Akıncı and A. Eroğlu. 2011. Growth and uptake of sodium and potassium in broad bean (Vicia faba L.) under salinity stress. Communications in Soil Science and Plant Analysis, 42 (8): 945-961.",
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

  const path = `/articles/articles-single/${query.slug}`;
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterSinglePageArticles,
  );
  return response;
}

export async function fetchMetadataSingleArticle(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: query.slug,
    type_post: "essays",
  };

  if (USE_MOCK) {
    return {
      title: "Single article",
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
