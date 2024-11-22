"use client";
import useSWR from "swr";
const URL_API = process.env.NEXT_PUBLIC_SQM_API_URL;
const PATH = "/distribuitor/distribuitor-cards";

function adapterDistribuitorsList(data) {
  return (
    data.map((item) => ({
      id: item.id,
      longitude: item.longitud,
      latitude: item.latitud,
      title: item.title,
      direction: item.direction,
      phone: item.phone,
      mail: item.mail,
    })) || []
  );
}

const fetcher = async ({ country, language, state, word }) => {
  const url = `${URL_API}${PATH}?country=${country}&wpml_language=${language}&estado=${state}&palabra=${word}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error en la solicitud");
  }
  const data = await response.json();
  return adapterDistribuitorsList(data);
};

export function useDistribuitors(country, language, state, word) {
  const {
    data: distribuitors,
    error: errorDistribuitors,
    isLoading: isLoadingDistribuitors,
  } = useSWR({ country, language, state, word }, fetcher);

  return {
    distribuitors,
    errorDistribuitors,
    isLoadingDistribuitors,
  };
}
