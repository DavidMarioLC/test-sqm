import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  CarouselArticles,
  CarouselProducts,
  CarouselVideos,
} from "@/components/carousels";
import { Container } from "@/components/container";
import { ContentWP } from "@/components/contentWP";
import { Title } from "@/components/title";
import { Button } from "@/components/ui/button";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

import {
  fetchMetadataSingleArticle,
  fetchSingleArticle,
} from "@/services/articles";
import { fetchGeneralTranslations } from "@/services/general";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
    slug: params.slug,
  };

  const metadata = await fetchMetadataSingleArticle(query);
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
  const contentSingle = await fetchSingleArticle(query);
  const translations = await fetchGeneralTranslations(language);

  return (
    <main>
      <PageBanner
        title={contentSingle.title}
        image={contentSingle.image}
        imageAlt={contentSingle.imageAlt}
        description={contentSingle.tags}
      />

      <Container className="px-4">
        <Breadcrumb />

        {/* content */}
        <ContentWP content={contentSingle.content} />
      </Container>
      <Container className="ps-4 md:px-4">
        {/* download button */}
        {contentSingle.file && (
          <p className="text-center">
            <Button asChild>
              <a href={contentSingle.file} download={true}>
                {translations.common.downloadStudy}
              </a>
            </Button>
          </p>
        )}

        {/* author name */}
        {contentSingle.author && (
          <div className="mb-16 mt-8">
            <p className="font-museosans font-black">
              {translations.common.author}
            </p>
            <p>{contentSingle.author}</p>
          </div>
        )}

        {/* related news */}
        {contentSingle.relatedArticles.length > 0 && (
          <section className="pb-16">
            <Title level={2}>{translations.common.relatedArticles}</Title>
            <CarouselArticles
              parentSlug="/marca"
              items={contentSingle.relatedArticles}
            />
          </section>
        )}

        {/* related videos */}
        {contentSingle.relatedVideos.length > 0 && (
          <section className="pb-16">
            <Title level={2}> {translations.common.relatedVideos}</Title>
            <CarouselVideos items={contentSingle.relatedVideos} />
          </section>
        )}

        {/* related products */}
        {contentSingle.relatedProducts.length > 0 && (
          <section className="pb-16">
            <Title level={2}>{translations.common.relatedProducts}</Title>
            <CarouselProducts
              parentSlug="marca"
              items={contentSingle.relatedProducts}
            />
          </section>
        )}
      </Container>
    </main>
  );
}
