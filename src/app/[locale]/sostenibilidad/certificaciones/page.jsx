export const dynamic = "force-dynamic";
import { PageBanner } from "@/components/banner";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContentWP } from "@/components/contentWP";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  fetchCertificationsPage,
  fetchMetadataCertificationsPage,
} from "@/services/sustainability";

import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { fetchGeneralTranslations } from "@/services/general";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataCertificationsPage(query);
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
  const content = await fetchCertificationsPage(query);
  const translations = await fetchGeneralTranslations(language);
  return (
    <div>
      <PageBanner
        title={content.title}
        image={content.image}
        imageAlt={content.imageAlt}
        description={content.subtitle}
      />
      <Container className="px-5 py-10 md:px-0">
        <Breadcrumb />
        <ContentWP
          className="mb-[54px] text-justify font-montserrat text-sqm-black"
          content={content.description}
        />
        <section className="flex flex-col gap-8">
          {content.certifications.map((item, index) => (
            <article
              key={item.id}
              className="flex flex-col items-center gap-10 rounded-t-xl rounded-br-xl bg-sqm-bg p-10 md:flex-row md:items-start"
            >
              <img
                src={item.logo}
                width="160"
                height="160"
                className="h-[160px] w-[160px] object-cover"
                alt=""
              />
              <div>
                <ContentWP
                  className="mb-6 text-justify font-montserrat text-sm text-sqm-black"
                  content={item.content}
                />
                <Button variant="secondary" asChild>
                  <a
                    href={item.file}
                    target="_blank"
                    download
                    className="inline-flex gap-2"
                  >
                    {translations.common.download}
                    <Download size={16} />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
