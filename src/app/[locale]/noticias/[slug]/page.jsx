import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { NewsCard } from "@/components/card";
import { Container } from "@/components/container";
import { ContentWP } from "@/components/contentWP";
import { Title } from "@/components/title";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { fetchMetadataSingleNews, fetchSingleNews } from "@/services/news";
import { formatDate } from "@/utils";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();

  const query = {
    country: country,
    language: language,
    slug: params.slug,
  };

  const metadata = await fetchMetadataSingleNews(query);
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
    slug: params.slug,
  };

  const contentSingle = await fetchSingleNews(query);

  return (
    <main>
      <PageBanner
        title={contentSingle.title}
        image={contentSingle.image}
        imageAlt={contentSingle.imageAlt}
        description={formatDate(contentSingle.date)}
      />
      <Container className="px-5 md:px-0">
        <Breadcrumb />
        <ContentWP content={contentSingle.content} />
        {/* related news */}
        <section className="pb-20 pt-16">
          <Title level={2}>Noticias relacionadas</Title>
          <div className="grid grid-cols-1 gap-[35px] sm:grid-cols-2 md:grid-cols-3 md:gap-[70px]">
            {contentSingle.relatedNews.map((item, index) => (
              <NewsCard news={item} key={item.id} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
