import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";
import {
  fetchDistribuitorsPage,
  fetchMetadataDistribuitorsPage,
} from "@/services/distribuitors";
import { DistribuitorClientSkeleton } from "@/components/skeleton";
import { fetchCountries } from "@/services/general";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

const DistributorsClient = dynamic(
  () =>
    import("@/components/distributorsClient").then(
      (mod) => mod.DistributorsClient,
    ),
  {
    ssr: false,
    loading: () => <DistribuitorClientSkeleton />,
  },
);

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataDistribuitorsPage(query);

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

export default async function Page() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const content = await fetchDistribuitorsPage(query);
  const countriesData = await fetchCountries(query);

  const currentCountry = countriesData?.find((item) => item.code === country);
  return (
    <div>
      <PageBanner
        title={content.title}
        description={content.subtitle}
        image={content.image}
        imageAlt={content.imageAlt}
      />
      <Container className="px-4 py-8 md:px-0">
        <Breadcrumb />
        <DistributorsClient country={currentCountry} language={language} />
        <Separator className="my-4" />
        <div className="mt-8 text-center">
          <p className="mb-3 font-montserrat text-base font-bold text-sqm-black">
            {content.informativeText}
          </p>
          <Button asChild>
            <Link href={`/contactanos`}>{content.buttonText}</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
