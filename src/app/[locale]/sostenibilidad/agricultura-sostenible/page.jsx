export const dynamic = "force-dynamic";
import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { ContentWP } from "@/components/contentWP";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  fetchMetadataSustainabilityAgriculturePage,
  fetchSustainabilityAgriculturePage,
} from "@/services/sustainability";

import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { fetchGeneralTranslations } from "@/services/general";

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataSustainabilityAgriculturePage(query);

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
  const content = await fetchSustainabilityAgriculturePage(query);
  const translations = await fetchGeneralTranslations(language);
  return (
    <div>
      <PageBanner
        title={content.title}
        image={content.image}
        imageAlt={content.imageAlt}
        description={content.subtitle}
      />
      <Container className="px-5 lg:px-0">
        <Breadcrumb />
        <ContentWP className="text-justify" content={content.description} />
        {/* tabs */}
        <Tabs defaultValue={0} className="flex w-full gap-[98px] py-10">
          <TabsList className="md fixed bottom-0 left-0 right-0 z-[9] h-auto flex-shrink-0 items-start justify-start rounded-t-xl bg-sqm-bg pt-5 shadow-[0px_-8px_31.8px_0px_rgba(0,0,0,0.20)] md:static md:flex-col md:gap-6 md:bg-sqm-white md:shadow-none">
            {content.tabs.map((item, index) => (
              <TabsTrigger
                className="group flex flex-col items-center gap-3 whitespace-normal border-b-0 text-sqm-gray-light data-[state=active]:text-sqm-green-dark md:flex-row"
                value={index}
                key={item.id}
              >
                <img
                  src={item.logo}
                  alt={"text alt"}
                  className="h-[40px] w-[40px] object-cover grayscale group-data-[state=active]:grayscale-0 md:h-[80px] md:w-[80px]"
                />
                <p className="max-w-[120px] font-montserrat text-xs font-semibold md:text-base">
                  {item.title}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="w-full">
            {content.tabs.map((item, index) => (
              <TabsContent key={item.id} value={index} className="px-0 py-6">
                <Title level={2} className="text-center text-sqm-green-dark">
                  {item.title}
                </Title>
                <ContentWP className="text-justify" content={item.content} />
                <Title
                  level={2}
                  className="mb-10 text-center font-museosans text-2xl font-black text-sqm-green-dark"
                >
                  {item.subtitle}
                </Title>
                <div className="grid grid-cols-1 gap-[54px] sm:grid-cols-2 md:gap-[67px]">
                  {item.cards.map((item, index) => (
                    <article
                      key={item.id}
                      className="rounded-t-xl rounded-br-xl bg-sqm-bg px-5 py-6"
                    >
                      <h3 className="mb-4 text-center font-museosans text-lg font-black text-sqm-blue">
                        {item.title}
                      </h3>
                      <p className="font-montserrat">{item.description}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-[74px] text-center">
                  <p className="mb-4 text-sqm-black">{item.downloadText}</p>
                  <Button variant="secondary" asChild>
                    <a href={item.file} download className="inline-flex gap-2">
                      {translations.common.download}
                      <Download size={16} />
                    </a>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </Container>
    </div>
  );
}
