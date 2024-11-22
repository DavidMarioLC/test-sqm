export const dynamic = "force-dynamic";
import { PageBanner } from "@/components/banner";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { Title } from "@/components/title";
import { ContentWP } from "@/components/contentWP";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  fetchCarbonFootPrintPage,
  fetchMetadataCarbonFootPrintPage,
} from "@/services/sustainability";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataCarbonFootPrintPage(query);
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
  const content = await fetchCarbonFootPrintPage(query);
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
        <p>{content.description}</p>
        <Tabs
          defaultValue={0}
          className="relative flex flex-col items-start gap-[20px] pt-10 lg:flex-row"
        >
          <TabsList className="top-6 flex h-auto flex-row md:gap-2 lg:sticky lg:flex-col lg:items-start">
            {content.tabs.map((item, index) => (
              <TabsTrigger
                value={index}
                key={item.id}
                className="data-[state=active]:border-sqm-green"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-grow">
            {content.tabs.map((item, index) => (
              <TabsContent value={index} key={item.id} className="pt-4">
                <Title
                  level={2}
                  className="text-center font-museosans text-2xl font-black text-sqm-green-dark"
                >
                  {item.title}
                </Title>

                <ContentWP content={item.content} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
        {content.sections.map((item, index) => (
          <section className="mb-10" key={item.id}>
            <Title
              level={2}
              className="mb-10 text-center font-museosans text-2xl font-black text-sqm-green-dark"
            >
              {item.title}
            </Title>
            <p className="mb-10">{item.description}</p>
            <img
              className="w-full rounded-t-xl rounded-br-xl object-cover md:h-[520px]"
              src={item.image}
              alt={item.imageAlt}
            />
          </section>
        ))}
      </Container>
    </div>
  );
}
