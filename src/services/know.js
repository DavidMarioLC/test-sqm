import { adapterKnowPage, metadataAdapter } from "@/adapters";
import { USE_MOCK, fetchData } from "@/utils";

export async function fetchMetadataKnowPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "conocenos",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Conocenos",
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

export async function fetchKnowPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "conocenos",
  };

  if (USE_MOCK) {
    return {
      title: "Conócenos",
      subtitle: "Últimas noticias y actualidad SQM",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
      description: "content wp",
      sections: Array.from({ length: 3 }).map((_, i) => ({
        id: i,
        title: "Somos SQM",
        description:
          "SQM, compañía minera global que desde el norte de Chile está presente en industrias estratégicas para el desarrollo sostenible, tales como la salud, la alimentación, la tecnología y las energías limpias que mueven al mundo.\r\n\r\nBajo sus valores corporativos: Excelencia, Seguridad, Integridad, Sostenibilidad y Desafío, SQM con más de 50 años de historia ha concretado una decisiva apuesta en innovación y desarrollo tecnológico. Logrando adaptar sus procesos productivos, comerciales, logísticos y de gestión a las diferentes condiciones de los mercados globales, asegurando la continuidad operacional bajo altos parámetros de sustentabilidad. Así, obtiene mejores resultados y crea más valor a sus clientes, accionistas y el entorno en que está inserta.",
        image: "/placeholder.svg",
        imageAlt: "text alt",
      })),
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(path, params, options, adapterKnowPage);
  return response;
}
