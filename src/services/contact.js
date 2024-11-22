import {
  adapterContactFormPage,
  adapterContactPage,
  metadataAdapter,
} from "@/adapters";
import { USE_MOCK, fetchData } from "@/utils";

export async function fetchMetadataContactPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "contacto",
    type_post: "page",
  };

  if (USE_MOCK) {
    return {
      title: "contactanos",
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

export async function fetchContactPage(query) {
  const params = {
    country: query.country,
    wpml_language: query.language,
    slug: "contacto",
  };

  if (USE_MOCK) {
    return {
      title: "Contáctanos",
      subtitle: "Forma parte de nuestra red global de distribuidores",
      image: "/sqm/banner-contactanos.png",
      imageAlt: "text alt",
      informativeText:
        "Si quieres saber más sobre nuestras soluciones, contáctanos",
    };
  }

  const path = "/pages";
  const options = {};
  const response = await fetchData(path, params, options, adapterContactPage);
  return response;
}

export async function fetchContactForm() {
  const params = {};

  if (USE_MOCK) {
    return {
      contact_form_id: 174053,
      status: "mail_sent",
      message: "Gracias por tu mensaje. Ha sido enviado.",
      posted_data_hash: "cc4e490ff160d480025306a1f37727de",
      into: "#wpcf7-f174053-p174045-o1",
      invalid_fields: [],
    };
  }

  const path = "/contact/send-mail";
  const options = {
    method: "POST",
    body: "formData",
  };
  const response = await fetchData(
    path,
    params,
    options,
    adapterContactFormPage,
  );
  return response;
}
