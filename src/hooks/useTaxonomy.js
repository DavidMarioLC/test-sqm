"use client";
import useSWR from "swr";
const URL_API = process.env.NEXT_PUBLIC_SQM_API_URL;
const fetcher = ({ country, language, taxonomy }) =>
  fetch(
    `${URL_API}/taxonomy/taxonomy-select?country=${country}&wpml_language=${language}&taxonomy=${taxonomy}`,
  ).then((res) => res.json());

export function useTaxomony(country, language) {
  const {
    data: applications,
    error: errorApplications,
    isLoading: isLoadingApplications,
  } = useSWR({ country: country, language, taxonomy: "applications" }, fetcher);

  const {
    data: solutions,
    error: errorSolutions,
    isLoading: isLoadingSolutions,
  } = useSWR(
    { country: country, language, taxonomy: "solution-nutrients" },
    fetcher,
  );

  const {
    data: efficiency,
    error: errorEfficiency,
    isLoading: isLoadingEfficiency,
  } = useSWR({ country: country, language, taxonomy: "efficiency" }, fetcher);

  const {
    data: brands,
    error: errorBrands,
    isLoading: isLoadingBrands,
  } = useSWR({ country: country, language, taxonomy: "brands" }, fetcher);

  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useSWR(
    { country: country, language, taxonomy: "video-category" },
    fetcher,
  );

  const {
    data: crops,
    error: errorCrops,
    isLoading: isLoadingCrops,
  } = useSWR({ country: country, language, taxonomy: "crops" }, fetcher);

  const {
    data: nutrients,
    error: errorNutrients,
    isLoading: isLoadingNutrients,
  } = useSWR({ country: country, language, taxonomy: "nutrients" }, fetcher);

  return {
    applications,
    solutions,
    efficiency,
    brands,
    crops,
    categories,
    nutrients,
    isLoadingApplications,
    isLoadingSolutions,
    isLoadingEfficiency,
    isLoadingBrands,
    isLoadingCrops,
    isLoadingCategories,
    isLoadingNutrients,
  };
}
