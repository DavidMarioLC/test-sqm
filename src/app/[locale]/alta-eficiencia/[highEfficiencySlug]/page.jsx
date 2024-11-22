import {
  fetchMetadataTaxonomy,
  fetchSingleTaxonomy,
} from "@/services/taxonomy";

import { SolutionTemplate } from "@/components/templates";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
    slug: params.highEfficiencySlug,
  };

  const metadata = await fetchMetadataTaxonomy(query);
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url,
      images: {
        url: metadata.shareImage,
        width: 800,
        height: 600,
      },
    },
  };
}

export default async function Page({ params, searchParams }) {
  const { language, country } = await getLanguageAnCountry();
  const ITEM_LIMIT = 8;
  const search = searchParams.search || "";
  const application = searchParams.application || "";
  const solution = searchParams.solution || "";
  const efficiency = params.highEfficiencySlug || "";
  const brand = searchParams.brand || "";
  const nutrients = searchParams.nutrients || "";

  const currentPage = parseInt(searchParams.page) || 1;

  const query = {
    search,
    application,
    solution,
    efficiency,
    brand,
    nutrients,
    page: currentPage,
    limit: ITEM_LIMIT,
    country: country,
    language: language,
    taxonomy: "efficiency",
  };

  const paginationParams = {
    search,
    application,
    solution,
    brand,
    nutrients,
  };
  const contentSingle = await fetchSingleTaxonomy(query);

  return (
    <SolutionTemplate
      taxonomy="alta-eficiencia"
      contentSingle={contentSingle}
      paginationParams={paginationParams}
      products={contentSingle.data}
      currentPage={currentPage}
      country={country}
      language={language}
    />
  );
}
