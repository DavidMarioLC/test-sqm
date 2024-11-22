import { adapterHistoryPage, metadataAdapter } from "@/adapters";
import { USE_MOCK, fetchData } from "@/utils";

export async function fetchMetadataHistoryPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "nuestra-historia",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Nuestra historia",
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

export async function fetchHistoryPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "nuestra-historia",
  };

  if (USE_MOCK) {
    return {
      title: "Nuestra Historia",
      subtitle: " Últimas noticias y actualidad SQM",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
      description: `
      <h2>Historia del Caliche, El Nitrato de Chile</h2>
      <p>
      El caliche es un mineral rico en nitrato, yodo y, en menor medida, potasio, encontrado en capas de hasta 5 metros de grosor en el desierto chileno. Conocido por los pueblos originarios y utilizado como fertilizante desde la conquista española en el siglo XVII, su explotación industrial comenzó en el siglo XIX. Inicialmente extraído de manera artesanal en asentamientos llamados "paradas", el caliche fue clave en la industria salitrera chilena, que alcanzó su apogeo tras el primer envío a Europa en 1830. La Oficina María Elena, inaugurada en 1926, es la única planta salitrera aún en operación, utilizando el sistema de extracción de los hermanos Guggenheim.
      </p>
      <p>
      En el contexto de la economía global actual, tenemos un nuevo enfoque para la explotación del caliche. Este recurso, junto con las salmueras del Salar de Atacama, son vitales para el desarrollo nacional y mundial. Para SQM, que es hoy el heredero de esta gran industria, estos recursos naturales son esenciales en la elaboración de los mejores productos y servicios para sus clientes. Por ello, en SQM desarrollamos e implementamos continuamente nuevos procesos, empleando las tecnologías más avanzadas, y generando soluciones innovadoras para maximizar los recursos disponibles mediante operaciones sostenibles y eficientes.

      </p>
      `,
      timeline: [
        {
          id: 1,
          initialYearRange: "1920",
          eventYear: "1926",
          image: "/sqm/time-01.svg",
          eventDetail: {
            name: "Maria Elena",
            description:
              "La familia Guggenheim adquiere tierras en el sector de El Toco, y abre la oficina salitrera de María Elena",
          },
        },
        {
          id: 2,
          initialYearRange: "1950",
          eventYear: "1951",
          image: "/sqm/time-02.svg",
          eventDetail: {
            name: "Coya Sur",
            description:
              "Se construye una planta de cristalización de salitre en Coya Sur para aprovechar la precipitación de nitratos en las pozas de evaporación solar.",
          },
        },
        {
          id: 3,
          initialYearRange: "1960",
          eventYear: "1968",
          image: "/sqm/time-03.svg",
          eventDetail: {
            name: "SQM",
            description:
              "Nace SQM. Se crea a partir de la fusión de la Corporación de Ventas de Salitre y Yodo, la Compañía Salitrera Anglo Lautaro y la Compañía Victoria, ello con la participación del gobierno de Chile",
          },
        },
        {
          id: 4,
          initialYearRange: "1980",
          eventYear: "1983",
          image: "/sqm/time-04.svg",
          eventDetail: {
            name: "Privatización",
            description:
              "Comienza el proceso de privatización de SQM, el que concluye en 1988, y los fondos privados de pensiones chilenos adquieren una participación en la propiedad.",
          },
        },
        {
          id: 5,
          initialYearRange: "",
          eventYear: "1986",
          image: "/sqm/time-05.svg",
          eventDetail: {
            name: "KNO3",
            description:
              "La planta de nitrato de potasio de Coya Sur inicia su producción, empleando un método completamente nuevo diseñado por SQM.",
          },
        },
        {
          id: 6,
          initialYearRange: "1990",
          eventYear: "1993",
          image: "/sqm/time-06.svg",
          eventDetail: {
            name: "Nitrato de Potasio Técnico",
            description:
              "Comienzan las operaciones en la planta de nitrato de potasio de grado técnico. SQM completa su primera emisión de acciones en mercados internacionales mediante su programa de ADR.",
          },
        },
        {
          id: 7,
          initialYearRange: "2000",
          eventYear: "2000",
          image: "/sqm/time-07.svg",
          eventDetail: {
            name: "Potasio",
            description:
              "SQM expande su producción de cloruro de potasio en el Salar de Atacama, y construye una nueva planta de nitrato de potasio en Coya Sur",
          },
        },
        {
          id: 8,
          initialYearRange: "",
          eventYear: "2007",
          image: "/sqm/time-08.svg",
          eventDetail: {
            name: "Prilado y Granulado",
            description:
              "Comienzan las operaciones en la planta de nitrato de potasio de grado técnico. SQM completa su primera emisión de acciones en mercados internacionales mediante su programa de ADR.",
          },
        },
        {
          id: 9,
          initialYearRange: "",
          eventYear: "2009",
          image: "/sqm/time-09.svg",
          eventDetail: {
            name: "Joint Ventures",
            description:
              "SQM firma nuevos joint ventures con Coromandel (India), Qingdao Star (China) y Roullier (Francia).",
          },
        },
        {
          id: 10,
          initialYearRange: "2010",
          eventYear: "2011",
          image: "/sqm/time-10.svg",
          eventDetail: {
            name: "Nueva Planta",
            description:
              "Comienza la etapa productiva en la nueva planta de nitrato de potasio en Coya Sur, con lo que se incrementa la producción en 300.000 toneladas anuales.",
          },
        },
        {
          id: 11,
          initialYearRange: "",
          eventYear: "2012",
          image: "/sqm/time-11.svg",
          eventDetail: {
            name: "Ampliaciones",
            description:
              "SQM amplía la capacidad de elaboración de productos de potasio en sus instalaciones del Salar de Atacama, logrando una producción de aproximadamente 2 millones de toneladas por año.",
          },
        },
        {
          id: 12,
          initialYearRange: "",
          eventYear: "2016",
          image: "/sqm/time-12.svg",
          eventDetail: {
            name: "Nuevo puerto",
            description:
              "SQM abre una nueva terminal de logística en Terneuzen, Países Bajos.",
          },
        },
      ],
      extraInfo: `<h2>Historia del Caliche, El Nitrato de Chile</h2>
      <p>
      El caliche es un mineral rico en nitrato, yodo y, en menor medida, potasio, encontrado en capas de hasta 5 metros de grosor en el desierto chileno. Conocido por los pueblos originarios y utilizado como fertilizante desde la conquista española en el siglo XVII, su explotación industrial comenzó en el siglo XIX. Inicialmente extraído de manera artesanal en asentamientos llamados "paradas", el caliche fue clave en la industria salitrera chilena, que alcanzó su apogeo tras el primer envío a Europa en 1830. La Oficina María Elena, inaugurada en 1926, es la única planta salitrera aún en operación, utilizando el sistema de extracción de los hermanos Guggenheim.
      </p>
      <p>
      En el contexto de la economía global actual, tenemos un nuevo enfoque para la explotación del caliche. Este recurso, junto con las salmueras del Salar de Atacama, son vitales para el desarrollo nacional y mundial. Para SQM, que es hoy el heredero de esta gran industria, estos recursos naturales son esenciales en la elaboración de los mejores productos y servicios para sus clientes. Por ello, en SQM desarrollamos e implementamos continuamente nuevos procesos, empleando las tecnologías más avanzadas, y generando soluciones innovadoras para maximizar los recursos disponibles mediante operaciones sostenibles y eficientes.

      </p>`,
      carouselImages: [
        { id: 1, image: "/placeholder.svg", imageAlt: "text alt" },
        { id: 2, image: "/placeholder.svg", imageAlt: "text alt" },
      ],
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(path, params, options, adapterHistoryPage);
  return response;
}
