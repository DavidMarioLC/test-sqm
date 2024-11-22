import { adapterSearch, adapterSearchPage } from "@/adapters";
import { USE_MOCK, fetchData } from "@/utils";

export async function fetchSearchPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      title: "Resultado de búsqueda",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
    };
  }

  const path = "/search/search-page";
  const options = {};
  const response = await fetchData(path, params, options, adapterSearchPage);
  return response;
}

export async function fetchSearch(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      solution: {
        title: "solution",
        quantity: 3,
        items: [
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
        ],
      },
      articles: {
        title: "articles",
        quantity: 2,
        items: [
          {
            id: "1",
            image: "/sqm/article.png",
            imageAlt: "text alt",
            title:
              "El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas",
            slug: "slug",
          },
        ],
      },
      videos: {
        title: "videos",
        quantity: 1,
        items: [
          {
            id: "1",
            image: "/sqm/video.png",
            imageAlt: "text alt",
            title:
              "SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes",
            slug: "slug",
          },
        ],
      },
      news: {
        title: "noticias",
        quantity: 2,
        items: [
          {
            id: "1",
            image: "/sqm/noticia.png",
            imageAlt: "text alt",
            date: "2024-10-04T00:00:41.931Z",
            title:
              "Más de 500 personas participarán de la nueva versión del Programa Ambiental en Tocopilla",
            slug: "slug",
          },
        ],
      },
    };
  }

  const path = `/search/${query.q}`;
  const options = {};
  const response = await fetchData(path, params, options, adapterSearch);
  return response;
}
