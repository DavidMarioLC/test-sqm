import { USE_MOCK, fetchData } from "@/utils";
import {
  metadataAdapter,
  adapterPageHome,
  adapterPageHomeAgriculture,
  adapterPageHomeBrands,
  adapterPageHomeSolutions,
} from "@/adapters";

export async function fetchMetadataHomePage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "home",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "SQM - Home ",
      description: "description",
      url: "https://acme.com/og-image.png",
      shareImage: "https://acme.com/og-image.png",
      keywords: ["keyword 01", "keyword 02", "keyword 03"],
    };
  }

  const path = "/metadata";
  const options = {};

  const response = await fetchData(path, params, options, metadataAdapter);

  return response;
}

export async function fetchHomePage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      // Hero
      video: "/sqm/video.mp4",
      title: "Líder mundial en el suministro de",
      subtitle: "nutrición vegetal equilibrada de primera calidad",
      // banner
      sectionBanner: {
        image: "/sqm/bannerimage.png",
        imageAlt: "text alt",
      },
      // meet us
      sectionMeetUs: {
        title: "Conócenos",
        description:
          "Nos apasiona la Nutrición Vegetal de Especialidad, y nos enfocamos en ofrecer soluciones nutricionales innovadoras y personalizadas para aplicación en fertirriego, suelo y foliar. Gracias a la experiencia y el conocimiento experto de nuestro equipo técnico agronómico, garantizamos la entrega óptima de macro y microelementos que maximizan la rentabilidad de los negocios agrícolas de nuestros clientes.",
        buttonText: "Más información",
        images: [
          {
            id: 1,
            image: "/sqm/meetus-01.png",
            imageAlt: "text alt",
          },
          {
            id: 2,
            image: "/sqm/meetus-02.png",
            imageAlt: "text alt",
          },
          {
            id: 3,
            image: "/sqm/meetus-03.png",
            imageAlt: "text alt",
          },
          {
            id: 4,
            image: "/sqm/meetus-04.png",
            imageAlt: "text alt",
          },
        ],
      },
      // history
      sectionHistory: {
        title: "Nuestra Historia",
        description:
          "Somos una empresa chilena con una historia sólida y reconocida mundialmente por ofrecer soluciones nutricionales de alta eficiencia que llegan a cada rincón del planeta. A lo largo de los años, hemos crecido e innovado constantemente, siempre enfocados en la mejora continua y en aportar valor al sector agrícola global, con un compromiso inquebrantable con la sostenibilidad y la excelencia.",
        buttonText: "Más información",
        images: [
          {
            id: 1,
            image: "/sqm/history-01.png",
            imageAlt: "text alt",
          },
          {
            id: 2,
            image: "/sqm/history-02.png",
            imageAlt: "text alt",
          },
          {
            id: 3,
            image: "/sqm/history-03.png",
            imageAlt: "text alt",
          },
          {
            id: 4,
            image: "/sqm/history-04.png",
            imageAlt: "text alt",
          },
          {
            id: 5,
            image: "/sqm/history-05.png",
            imageAlt: "text alt",
          },
        ],
      },
      // sqm global company
      sectionGlobalCompany: {
        title: "SQM es una compañía global",
        subtitle:
          "con foco en una variedad de industrias estratégicas para el desarrollo humano",
        description:
          "Cuenta con 5 líneas de negocio, y en todas ejerce una posición de liderazgo mundial: Nutrición Vegetal de Especialidad (NVE), Yodo y derivados, Litio y derivados, Potasio y Químicos Industriales.",
        buttonText: "Conocer más sobre SQM",
        image: "/sqm/global.png",
        imageAlt: "text alt",
      },
    };
  }

  const path = "/home/home";
  const options = {};
  const response = await fetchData(path, params, options, adapterPageHome);
  return response;
}

export async function fetchHomePageBrands(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      sectionBrand: {
        title: "Conoce nuestras marcas",
        items: [
          {
            id: 1,
            name: `Marca`,
            whiteLogo: "/sqm/white-logo-ultrasol.svg",
            mediumImage: "/sqm/ultrasol-bg.png",
            shortDescription: "Lorem ipsum dol sit amet sectetur.",
            slug: `ultrasol`,
          },
          {
            id: 2,
            name: `Marca`,
            whiteLogo: "/sqm/white-logo-qrop.svg",
            mediumImage: "/sqm/qrop-bg.png",
            shortDescription: "Lorem ipsum dol sit amet sectetur.",
            slug: `qrop`,
          },
          {
            id: 3,
            name: `Marca`,
            whiteLogo: "/sqm/white-logo-speedfol.svg",
            mediumImage: "/sqm/speedfol-bg.png",
            shortDescription: "Lorem ipsum dol sit amet sectetur.",
            slug: `speedfol`,
          },
          {
            id: 4,
            name: `Marca`,
            whiteLogo: "/sqm/white-logo-allganic.svg",
            mediumImage: "/sqm/allganic-bg.png",
            shortDescription: "Lorem ipsum dol sit amet sectetur.",
            slug: `allganic`,
          },
          {
            id: 5,
            name: `Marca`,
            whiteLogo: "/sqm/white-logo-nutrilake.svg",
            mediumImage: "/sqm/nutrilake-bg.png",
            shortDescription: "Lorem ipsum dol sit amet sectetur.",
            slug: `nutrilake`,
          },
        ],
      },
    };
  }

  const path = "/home/home-brands";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterPageHomeBrands,
  );
  return response;
}

export async function fetchHomePageSolutions(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      sectionSolutions: {
        title: "Explora nuestras soluciones",
        applications: {
          title: "Tipo de Aplicación",
          description: "Lorem ipsum dolor sit amet consectetur.",
          items: [
            {
              id: 1,
              name: `Fertirriego`,
              whiteLogo: "/sqm/aplicacion-logo-ferti.svg",
              mediumImage: "/sqm/aplicacion-fertirriego-bg.png",
              shortDescription: "description",
              slug: "fertirriego",
            },
            {
              id: 2,
              name: `Foliar`,
              whiteLogo: "/sqm/aplicacion-logo-foliar.svg",
              mediumImage: "/sqm/aplicacion-foliar-bg.png",
              shortDescription: "description",
              slug: "fertirriego",
            },
            {
              id: 3,
              name: `Al suelo`,
              whiteLogo: "/sqm/aplicacion-logo-suelo.svg",
              mediumImage: "/sqm/aplicacion-suelo-bg.png",
              shortDescription: "description",
              slug: "fertirriego",
            },
            {
              id: 4,
              name: `Acuicola`,
              whiteLogo: "/sqm/aplicacion-logo-acuicola.svg",
              mediumImage: "/sqm/aplicacion-acuicola-bg.png",
              shortDescription: "description",
              slug: "fertirriego",
            },
            {
              id: 5,
              name: `Fertirriego`,
              whiteLogo: "/sqm/aplicacion-logo-ferti.svg",
              mediumImage: "/sqm/aplicacion-fertirriego-bg.png",
              shortDescription: "description",
              slug: "fertirriego",
            },
          ],
        },
        solutions: {
          title: "Soluciones Nutricionales",
          description: "Lorem ipsum dolor sit amet consectetur.",
          items: Array.from({ length: 6 }).map((_, i) => ({
            id: 5,
            name: `Fertirriego`,
            whiteLogo: "/sqm/aplicacion-logo-ferti.svg",
            mediumImage: "/sqm/aplicacion-fertirriego-bg.png",
            shortDescription: "description",
            slug: "fertirriego",
          })),
        },
        highEfficiency: {
          title: "Alta Eficiencia",
          description: "Lorem ipsum dolor sit amet consectetur.",
          items: Array.from({ length: 6 }).map((_, i) => ({
            id: 5,
            name: `Al suelo`,
            whiteLogo: "/sqm/aplicacion-logo-suelo.svg",
            mediumImage: "/sqm/aplicacion-suelo-bg.png",
            shortDescription: "description",
            slug: "fertirriego",
          })),
        },
      },
    };
  }

  const path = "/home/home-solutions";
  const options = {};

  const response = await fetchData(
    path,
    params,
    options,
    adapterPageHomeSolutions,
  );

  return response;
}

export async function fetchHomePageAgriculture(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
  };

  if (USE_MOCK) {
    return {
      sectionAgriculture: {
        title: "Agricultura Inteligente",
        lastArticles: {
          title: "Artículos más recientes",
          buttonText: "Ver más artículos",
          items: Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            image: "/sqm/article.png",
            imageAlt: "text alt",
            title: `El nitrato de potasio superó al acetato de potasio en los parámetros de crecimiento de habas`,
            slug: `slug-${i}`,
          })),
        },
        lastVideos: {
          title: "Últimos Videos y Webinars",
          buttonText: "Ver más videos",
          items: Array.from({ length: 6 }).map((_, i) => ({
            id: i,
            image: "/sqm/video.png",
            imageAlt: "text alt",
            title: `SQM Nutrition en el campo, Jitomate, Mexico, Francisco Javier Viramontes`,
            slug: `slug-${i}`,
          })),
        },
      },
    };
  }
  const path = "/home/home-agriculture";
  const options = {};

  const response = await fetchData(
    path,
    params,
    options,
    adapterPageHomeAgriculture,
  );

  return response;
}
