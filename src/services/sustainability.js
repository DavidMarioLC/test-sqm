import {
  adapterCarbonFootPrintPage,
  adapterCertificationsPage,
  adapterSustainabilityAgriculturePage,
  adapterSustainabilitySqmPage,
  metadataAdapter,
} from "@/adapters";
import { USE_MOCK, fetchData } from "@/utils";

export async function fetchSustainabilityPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "sostenibilidad-sqm",
  };

  if (USE_MOCK) {
    return {
      title: "Sostenibilidad SQM",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
      description: "Filtra nuestras soluciones, artículos y videos por:",
      content:
        "<p>En SQM Yodo Nutrición Vegetal desarrollamos un Plan en función de los Objetivos de Desarrollo Sostenible de las Naciones Unidas, que es complementado con una serie de iniciativas para garantizar nuestra convivencia en armonía con el medioambiente, las comunidades aledañas a nuestras operaciones y nuestros propios trabajadores.</p>",
      sections: [
        {
          id: 1,
          title: "Aporte a industrias sustentables",
          description: "lorem ipsum",
          listTitle: "Nuestro Compromiso:",
          listItems: [
            { id: 1, title: "item 01" },
            { id: 2, title: "item 02" },
            { id: 3, title: "item 03" },
          ],
          logos: [
            { id: 1, image: "/placeholder.svg", title: "title 01" },
            { id: 2, image: "/placeholder.svg", title: "title 02" },
            { id: 3, image: "/placeholder.svg", title: "title 03" },
            { id: 4, image: "/placeholder.svg", title: "title 04" },
            { id: 5, image: "/placeholder.svg", title: "title 05" },
          ],
        },
        {
          id: 2,
          title: "Nuestro Entorno",
          description: "lorem ipsum",
          listTitle: "Nuestro Compromiso:",
          listItems: [
            { id: 1, title: "item 01" },
            { id: 2, title: "item 02" },
            { id: 3, title: "item 03" },
          ],
          logos: [
            { id: 1, image: "/placeholder.svg", title: "title 01" },
            { id: 2, image: "/placeholder.svg", title: "title 02" },
            { id: 3, image: "/placeholder.svg", title: "title 03" },
            { id: 4, image: "/placeholder.svg", title: "title 04" },
          ],
        },
        {
          id: 3,
          title: "Nuestra Gente",
          description: "lorem ipsum",
          listTitle: "Nuestro Compromiso:",
          listItems: [
            { id: 1, title: "item 01" },
            { id: 2, title: "item 02" },
            { id: 3, title: "item 03" },
          ],
          logos: [
            { id: 1, image: "/placeholder.svg", title: "title 01" },
            { id: 2, image: "/placeholder.svg", title: "title 02" },
            { id: 3, image: "/placeholder.svg", title: "title 03" },
            { id: 4, image: "/placeholder.svg", title: "title 04" },
          ],
        },
      ],
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterSustainabilitySqmPage,
  );
  return response;
}

export async function fetchSustainabilityAgriculturePage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "agricultura-sostenible",
  };

  if (USE_MOCK) {
    return {
      title: "Sostenibilidad SQM",
      subtitle: "Filtra nuestras soluciones, artículos y videos por:",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
      description:
        "Pulvinar eu faucibus est leo porta amet diam auctor. Leo sapien arcu ac donec porttitor tortor viverra arcu. Vulputate convallis at proin donec pharetra magnis leo. Elit elit vel a placerat. Adipiscing massa id vulputate nunc ipsum habitant. Risus euismod imperdiet eget non sit. Vitae ut tincidunt rhoncus nunc id interdum morbi sed. Mattis viverra massa ultrices purus urna. A consequat augue consectetur in eros tortor maecenas viverra.",
      tabs: [
        {
          id: 1,
          title: "uso eficiente del agua",
          logo: "/sqm/sostenibilidad-agricultura-tab-01.svg",
          content: `<img src="/sqm/uso-eficiente-agua.png" alt=""/>
          <p>
            En ese sentido, Leonor González, jefa de Asuntos Comunitarios Pampa de
            SQM Yodo Nutrición Vegetal, destacó: “Estamos muy orgullosos de ser
            parte de este programa que nos permite generar valor social compartido
            como compañía y que nos ayuda a formar comunidades que abrazan el
            medio ambiente. Un proyecto que también se abre a la comunidad,
            generando un tejido social medioambiental sumamente interesante que
            viene a mejorar la calidad de vida de sus habitantes”.
          </p>`,
          subtitle:
            "Entonces, ¿cómo mejora el nitrato de potasio la eficiencia del uso del agua?",
          cards: [
            {
              id: 1,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 2,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 3,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 4,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
          ],
          downloadText:
            "Descarga nuestro brochure  sobre Uso eficiente del agua",
          file: "/file.pdf",
        },
        {
          id: 2,
          title: "Nutrición balanceada de Cultivos",
          logo: "/sqm/sostenibilidad-agricultura-tab-02.svg",
          content: `<img src="/sqm/uso-eficiente-agua.png" alt=""/>
            <p>
              En ese sentido, Leonor González, jefa de Asuntos Comunitarios Pampa de
              SQM Yodo Nutrición Vegetal, destacó: “Estamos muy orgullosos de ser
              parte de este programa que nos permite generar valor social compartido
              como compañía y que nos ayuda a formar comunidades que abrazan el
              medio ambiente. Un proyecto que también se abre a la comunidad,
              generando un tejido social medioambiental sumamente interesante que
              viene a mejorar la calidad de vida de sus habitantes”.
            </p>`,
          subtitle:
            "Entonces, ¿cómo mejora el nitrato de potasio la eficiencia del uso del agua?",
          cards: [
            {
              id: 1,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 2,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 3,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 4,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
          ],
          downloadText:
            "Descarga nuestro brochure  sobre Uso eficiente del agua",
          file: "/file.pdf",
        },
        {
          id: 3,
          title: "Uso Eficiente de Nutrientes",
          logo: "/sqm/sostenibilidad-agricultura-tab-03.svg",
          content: `<img src="/sqm/uso-eficiente-agua.png" alt=""/>
            <p>
              En ese sentido, Leonor González, jefa de Asuntos Comunitarios Pampa de
              SQM Yodo Nutrición Vegetal, destacó: “Estamos muy orgullosos de ser
              parte de este programa que nos permite generar valor social compartido
              como compañía y que nos ayuda a formar comunidades que abrazan el
              medio ambiente. Un proyecto que también se abre a la comunidad,
              generando un tejido social medioambiental sumamente interesante que
              viene a mejorar la calidad de vida de sus habitantes”.
            </p>`,
          subtitle:
            "Entonces, ¿cómo mejora el nitrato de potasio la eficiencia del uso del agua?",
          cards: [
            {
              id: 1,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 2,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 3,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
            {
              id: 4,
              title: "Mejora el manejo del agua de la planta",
              description:
                "Las plantas alimentadas con nitrato utilizan el agua dos veces más eficientemente que las plantas alimentadas con amonio.",
            },
          ],
          downloadText:
            "Descarga nuestro brochure  sobre Uso eficiente del agua",
          file: "/file.pdf",
        },
      ],
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterSustainabilityAgriculturePage,
  );
  return response;
}

export async function fetchCarbonFootPrintPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "huella-de-carbono",
  };

  if (USE_MOCK) {
    return {
      title: "Huella de Carbono",
      subtitle: "Filtra nuestras soluciones, artículos y videos por:",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
      description:
        "Pulvinar eu faucibus est leo porta amet diam auctor. Leo sapien arcu ac donec porttitor tortor viverra arcu. Vulputate convallis at proin donec pharetra magnis leo. Elit elit vel a placerat. Adipiscing massa id vulputate nunc ipsum habitant. Risus euismod imperdiet eget non sit. Vitae ut tincidunt rhoncus nunc id interdum morbi sed. Mattis viverra massa ultrices purus urna. A consequat augue consectetur in eros tortor maecenas viverra.",
      tabs: [
        {
          id: 1,
          title: "Tema #1",
          content: `<p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                itaque hic architecto neque tenetur animi, ut inventore ullam
                voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                ab facere accusamus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                itaque hic architecto neque tenetur animi, ut inventore ullam
                voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                ab facere accusamus.
              </p>
                <img
            src="/placeholder.svg"
            alt=""
          />
              `,
        },
        {
          id: 2,
          title: "Tema #2",
          content: `<p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  itaque hic architecto neque tenetur animi, ut inventore ullam
                  voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                  ab facere accusamus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  itaque hic architecto neque tenetur animi, ut inventore ullam
                  voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                  ab facere accusamus.
                </p>
                  <img
              src="/placeholder.svg"
              alt=""
            />
                `,
        },
        {
          id: 3,
          title: "Tema #3",
          content: `<p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  itaque hic architecto neque tenetur animi, ut inventore ullam
                  voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                  ab facere accusamus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  itaque hic architecto neque tenetur animi, ut inventore ullam
                  voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                  ab facere accusamus.
                </p>
                  <img
              src="/placeholder.svg"
              alt=""
            />
                `,
        },
        {
          id: 4,
          title: "Tema #4",
          content: `<p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  itaque hic architecto neque tenetur animi, ut inventore ullam
                  voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                  ab facere accusamus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  itaque hic architecto neque tenetur animi, ut inventore ullam
                  voluptates dolor eos saepe quaerat quae nostrum non voluptatum
                  ab facere accusamus.
                </p>
                  <img
              src="/placeholder.svg"
              alt=""
            />
                `,
        },
      ],
      sections: [
        {
          id: 1,
          title: "Medición de la huella de carbono",
          description:
            "Pulvinar eu faucibus est leo porta amet diam auctor. Leo sapien arcu ac donec porttitor tortor viverra arcu. Vulputate convallis at proin donec pharetra magnis leo. Elit elit vel a placerat. Adipiscing massa id vulputate nunc ipsum habitant. Risus euismod imperdiet eget non sit. Vitae ut tincidunt rhoncus nunc id interdum morbi sed. Mattis viverra massa ultrices purus urna. A consequat augue consectetur in eros tortor maecenas viverra.",
          image: "/placeholder.svg",
          imageAlt: "text alt",
        },
        {
          id: 2,
          title: "Desafíos para seguir mejorando",
          description:
            "Pulvinar eu faucibus est leo porta amet diam auctor. Leo sapien arcu ac donec porttitor tortor viverra arcu. Vulputate convallis at proin donec pharetra magnis leo. Elit elit vel a placerat. Adipiscing massa id vulputate nunc ipsum habitant. Risus euismod imperdiet eget non sit. Vitae ut tincidunt rhoncus nunc id interdum morbi sed. Mattis viverra massa ultrices purus urna. A consequat augue consectetur in eros tortor maecenas viverra.",
          image: "/placeholder.svg",
          imageAlt: "text alt",
        },
      ],
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterCarbonFootPrintPage,
  );
  return response;
}

export async function fetchCertificationsPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "certificaciones",
  };

  if (USE_MOCK) {
    return {
      title: "Certificaciones",
      subtitle: "Filtra nuestras soluciones, artículos y videos por:",
      image: "/sqm/banner-noticia.png",
      imageAlt: "text alt",
      description:
        "Pulvinar eu faucibus est leo porta amet diam auctor. Leo sapien arcu ac donec porttitor tortor viverra arcu. Vulputate convallis at proin donec pharetra magnis leo. Elit elit vel a placerat. Adipiscing massa id vulputate nunc ipsum habitant. Risus euismod imperdiet eget non sit. Vitae ut tincidunt rhoncus nunc id interdum morbi sed. Mattis viverra massa ultrices purus urna. A consequat augue consectetur in eros tortor maecenas viverra.",
      certifications: [
        {
          id: 1,
          logo: "/sqm/certificado-01.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
        {
          id: 2,
          logo: "/sqm/certificado-02.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
        {
          id: 3,
          logo: "/sqm/certificado-03.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
        {
          id: 4,
          logo: "/sqm/certificado-04.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
        {
          id: 5,
          logo: "/sqm/certificado-05.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
        {
          id: 6,
          logo: "/sqm/certificado-06.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
        {
          id: 7,
          logo: "/sqm/certificado-07.png",
          content:
            "La Asociación Internacional de la Industria de Fertilizantes (IFA) certificó el compromiso de SQM con la gestión responsable y segura de sus productos, que incluye aspectos como calidad, salud, seguridad ocupacional, seguridad industrial y ambiental en las diferentes etapas del ciclo de vida del producto. Para esta certificación, los principios IFA SHE se alinean con la Política de Desarrollo Sostenible de SQM.",
          file: "/file.pdf",
        },
      ],
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(
    path,
    params,
    options,
    adapterCertificationsPage,
  );
  return response;
}

// Metadata

export async function fetchMetadataCarbonFootPrintPage(query) {
  const params = {
    country: query.country,
    // wpml_language: query.language,
    slug: "huella-de-carbono",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Huella de carbono",
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

export async function fetchMetadataCertificationsPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "certificaciones",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Certificaciones",
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

export async function fetchMetadataSustainabilityAgriculturePage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "agricultura-sostenible",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "Agricultura sostenible",
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

export async function fetchMetadataSustainabilityPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "sostenibilidad-sqm",
    type_post: "page",
  };

  if (true) {
    return {
      title: "Sostenibilidad SQM",
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
