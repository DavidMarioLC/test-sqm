"use client";
import useSWR from "swr";
const URL_API = process.env.NEXT_PUBLIC_SQM_API_URL;
const PATH = "/distribuitor/distribuitor-estados";

const fetcher = (country = "", language = "") =>
  fetch(`${URL_API}${PATH}?country=${country}&wpml_language=${language}`).then(
    (res) => res.json(),
  );

export function useStates(country, language) {
  const {
    data: states,
    error: errorStates,
    isLoading: isLoadingStates,
  } = useSWR(country, language, fetcher);

  return {
    states,
    errorStates,
    isLoadingStates,
  };
}
