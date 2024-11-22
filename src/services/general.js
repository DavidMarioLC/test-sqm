import { USE_MOCK, fetchData } from "@/utils";
import {
  headerAdapter,
  footerAdapter,
  notFoundAdapter,
  countriesAdapter,
  globalAdapter,
  languagesAdapter,
} from "@/adapters";

// Header
export async function fetchHeader(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      largeLogo: "/sqm/logo-sqm-desktop.svg",
      smallLogo: "/sqm/logo-sqm-mobile.svg",
      mainMenuItems: [
        {
          id: 1,
          variant: "variant-linksAndCard",
          title: "Soluciones",
          sections: {
            links: [
              {
                id: 1,
                variant: "onlyIcon",
                heading: "Marcas",
                image: "/placeholder.svg",
                shortDescription: "lorem ipsum",
                list: [
                  {
                    id: 1,
                    name: "Ultrasol®",
                    typeId: "marca",
                    whiteLogo: "/placeholder.svg",
                    mediumImage: "/placeholder.svg",
                    promotionImage: "/placeholder.svg",
                    shortDescription: "lorem ipsum",
                    slug: "ultrasol",
                  },
                ],
              },
              {
                id: 2,
                variant: "onlyIcon",
                heading: "Tipo de Aplicación",
                image: "/placeholder.svg",
                shortDescription: "lorem ipsum",
                list: [
                  {
                    id: 1,
                    name: "Fertirriego",
                    typeId: "aplicacion",
                    whiteLogo: "/placeholder.svg",
                    mediumImage: "/placeholder.svg",
                    promotionImage: "/placeholder.svg",
                    shortDescription: "lorem ipsum",
                    slug: "fertirriego",
                  },
                ],
              },
            ],
            banner: "/placeholder.svg",
          },
        },

        {
          id: 2,
          variant: "variant-cards",
          title: "Agricultura inteligente",
          sections: {
            links: [
              {
                id: 1,
                title: "Artículos",
                slug: "articulos",
                banner: "/placeholder.svg",
              },
            ],
          },
        },

        {
          id: 3,
          variant: "variant-cards",
          title: "Sostenibilidad",
          sections: {
            links: [
              {
                id: 1,
                title: "Sostenibilidad SQM",
                slug: "sostenibilidad-sqm",
                banner: "/placeholder.svg",
              },
            ],
          },
        },
        {
          id: 4,
          variant: "variant-cards",
          title: "Dónde comprar",
          sections: {
            links: [
              {
                id: 1,
                title: "Distribuidores",
                slug: "distribuidores",
                banner: "/placeholder.svg",
              },
            ],
          },
        },
        {
          id: 5,
          variant: "variant-only-link",
          title: "Noticias",
          slug: "/noticias",
        },
      ],
    };
  }

  const path = "/header";
  const options = {};
  const response = await fetchData(path, params, options, headerAdapter);
  return response;
}

// Footer
export async function fetchFooter(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      salitreText: "Salitre Chileno",
      logo: "/sqm/footer-logo-sqm.svg",
      copyright: "Copyright © 2024. Todos los derechos reservados.",
      socials: [
        {
          id: 1,
          name: "facebook",
          link: "https://www.facebook.com/",
        },
        {
          id: 2,
          name: "linkedin",
          link: "https://www.facebook.com/",
        },
        {
          id: 3,
          name: "youtube",
          link: "https://www.facebook.com/",
        },
        {
          id: 4,
          name: "instagram",
          link: "https://www.facebook.com/",
        },
        {
          id: 5,
          name: "tiktok",
          link: "https://www.facebook.com/",
        },
      ],
      links: [
        {
          id: 1,
          text: "Sitio Corporativo",
          target: "_blank",
          link: "https://www.sqm.com/",
        },
        {
          id: 2,
          text: "Conócenos",
          target: "_self",
          link: "https://www.sqm.com/",
        },
        {
          id: 3,
          text: "Nuestra Historia",
          target: "_self",
          link: "https://www.sqm.com/",
        },
        {
          id: 4,
          text: "Preguntas Frecuentes (FAQ)",
          target: "_self",
          link: "https://www.sqm.com/",
        },
        {
          id: 5,
          text: "Manejo de productos",
          target: "_self",
          link: "https://www.sqm.com/",
        },
        {
          id: 6,
          text: "Políticas de privacidad y Términos de uso",
          target: "_self",
          link: "https://www.sqm.com/",
        },
      ],
    };
  }

  const path = "/footer";
  const options = {};
  const response = await fetchData(path, params, options, footerAdapter);
  return response;
}

//notfound
export async function fetchNotFound(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      text: "Error 404",
      paragraph01: "La página que buscas no fue encontrada",
      paragraph02: "Pudo haber sido movida o eliminada",
      buttonText: "Volver a la página de inicio",
      image: "/sqm/notfound.png",
    };
  }

  const path = "/404";
  const options = {};
  const response = await fetchData(path, params, options, notFoundAdapter);
  return response;
}

//languages
export async function fetchLanguages(query) {
  const params = {
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      native_name: "language",
      translated_name: "translated language",
      code: "xx",
    }));
  }

  const path = "/languages";
  const options = {};
  const response = await fetchData(path, params, options, languagesAdapter);
  return response;
}

// Country
export async function fetchCountries(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return Array.from({ length: 5 }).map((item) => ({
      id: item.id,
      name: item.name,
      nameTranslated: item.nameTranslated || "",
      image: item.flag,
      code: item.code,
    }));
  }

  const path = "/countries/menu-countries";
  const options = {};
  const response = await fetchData(path, params, options, countriesAdapter);
  return response;
}

// get country ip
export async function fetchCountryByIp() {
  if (USE_MOCK) {
    return "MX";
  }
  const params = {};
  const path = "/countries/country-ip";
  const options = {};
  const response = await fetchData(path, params, options, (data) => data);
  return response;
}

// global
export async function fetchGeneralTranslations(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      buttonReadMore: "Leer más",
      page: {
        articlesRelatedTitle: "Articulos relacionados",
        videosRelatedTitle: "Videos relacionados",
        productRelatedTitle: "Productos relacionados",

        news: {
          titleRelatedSection: "Noticias relacionadas",
          byDate: "por fecha",
        },

        articles: {
          downloadFileButton: "Descargar estudio",
          author: "Autor",
        },
        solutions: {
          solutionTitle: "Soluciones:",
          articleAbout: "Artículos sobre ",
          videoAbout: "Videos y webinars sobre ",
          testimonyAbout: "Testimonios sobre",
          relatedSolutionsTitle: "Soluciones relacionadas",
        },

        distributors: {
          contactButtonText: "Contáctanos",
          contactButtonLabel: "¿Te interesa distribuir soluciones SQM?",
          placeholderUbication: "Buscar ubicación",
          stateText: "estado",
        },

        results: {
          solutions: "Soluciones",
          articles: "Artículos",
          videos: "Videos",
          News: "Noticias",
          placeholderSearch: "[Palabras]",
        },
      },
      filters: {
        filterButton: "Filtrar",
        resetFilterButton: "Borrar todos los filtros",
        placeholderInput: "Palabra clave",
        filterSolutionLabel:
          "Filtra nuestras soluciones, artículos y videos por:",
        select: {
          application: "Tipo de aplicación",
          solution: "Solución nutricional",
          highEfficiency: "Linea alta eficiencia",
          brand: "Marca",
          nutrient: "Nutriente",
        },
        news: {
          label: "Filtra nuestras noticias por:",
        },
        articles: {
          label: "Filtra todos los artículos por:",
        },
        videos: {
          label: "Filtra todos los videos y webinars por:",
        },
      },
      contact: {
        buttonText: "Enviar",
        placeholderName: "Nombre",
        placeholderEmail: "Email",
        placeholderCountry: "Pais",
        placeholderMessage: "Mensaje",
        contactUs: "Ponte en contacto con nosotros.",
        question: "¿Quieres comercializar la marca en ",
      },
      downloadText: "Descargar",
    };
  }

  const path = "/general";
  const options = {};
  const response = await fetchData(path, params, options, globalAdapter);

  return response;
}
