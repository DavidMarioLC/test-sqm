export const dynamic = "force-dynamic";

import { PageBanner } from "@/components/banner";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContentWP } from "@/components/contentWP";
import { fetchKnowPage, fetchMetadataKnowPage } from "@/services/know";
import { Title } from "@/components/title";
import Image from "next/image";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    language,
    country,
  };
  const metadata = await fetchMetadataKnowPage(query);
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
    language,
    country,
  };
  const content = await fetchKnowPage(query);

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
        {content.sections.length > 0 && (
          <div className="flex flex-col gap-6">
            {content.sections.map((item) => (
              <section key={item.id}>
                <Title level={2} className="mb-6">
                  {item.title}
                </Title>
                <ContentWP content={item.description} className="mb-6" />
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={800}
                  height={600}
                  className="h-[520px] w-full rounded-t-xl rounded-br-xl object-cover"
                />
              </section>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
