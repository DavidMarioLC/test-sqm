import { SingleProductTemplate } from "@/components/templates";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { fetchCountries } from "@/services/general";
import { fetchMetadataProduct, fetchSingleProduct } from "@/services/taxonomy";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
    slug: params.productSlug,
  };

  const metadata = await fetchMetadataProduct(query);
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

export default async function Page({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
    slug: params.productSlug,
  };
  const [contentSingle, countries] = await Promise.all([
    fetchSingleProduct(query),
    fetchCountries(query),
  ]);

  return (
    <SingleProductTemplate
      parentSlug={`solucion-nutricional/${params.nutritionalSolutionSlug}`}
      contentSingle={contentSingle}
      countries={countries}
      language={language}
    />
  );
}
