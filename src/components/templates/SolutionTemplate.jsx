import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";
import { Title } from "@/components/title";
import Image from "next/image";
import { ContentWP } from "@/components/contentWP";
import {
  ApplicationFilters,
  BrandFilters,
  HighEfficencyFilters,
  NutritionalSolutionFilters,
} from "@/components/filters";
import { CarouselArticles, CarouselVideos } from "@/components/carousels";
import { Products } from "@/components/products";
import { fetchGeneralTranslations } from "@/services/general";

export const SolutionTemplate = async ({
  taxonomy,
  contentSingle,
  paginationParams,
  products,
  currentPage,
  country,
  language,
}) => {
  const translations = await fetchGeneralTranslations(language);

  return (
    <main>
      <PageBanner
        title={contentSingle.title}
        image={contentSingle.image}
        imageAlt={contentSingle.imageAlt}
      />
      <Container className="px-5 md:px-0">
        <Breadcrumb />
        <section className="flex flex-col items-center gap-10 md:flex-row md:gap-[113px]">
          <ContentWP
            className="order-3 flex-grow md:order-1"
            content={contentSingle.description}
          />
          <Image
            className="order-1 md:order-2"
            src={contentSingle.logo}
            alt={contentSingle.logoAlt}
            width={130}
            height={130}
          />
        </section>
      </Container>
      <section className="my-10 bg-sqm-bg py-8">
        <Container className="px-5 md:px-0">
          {taxonomy === "marca" ? (
            <BrandFilters country={country} language={language} />
          ) : taxonomy === "aplicacion" ? (
            <ApplicationFilters country={country} language={language} />
          ) : taxonomy === "solucion-nutricional" ? (
            <NutritionalSolutionFilters country={country} language={language} />
          ) : taxonomy === "alta-eficiencia" ? (
            <HighEfficencyFilters country={country} language={language} />
          ) : null}
        </Container>
      </section>
      <Container className="px-5 md:px-0">
        <section className="pb-16">
          <Title level={2}>
            {translations.solution.title}: {contentSingle.title}
          </Title>
          <Products
            parentSlug={`${taxonomy}/${contentSingle.slug}`}
            products={products}
          />
          <Pagination
            totalPages={contentSingle.pagination.totalPages}
            currentPage={currentPage}
            baseUrl={`/${taxonomy}/${contentSingle.slug}`}
            searchParams={paginationParams}
          />
        </section>
      </Container>
      <Container className="ps-5">
        {contentSingle.relatedArticles.length > 0 && (
          <section className="pb-16">
            <Title level={2}>
              {translations.solution.articleTitle}: {contentSingle.title}
            </Title>
            <CarouselArticles items={contentSingle.relatedArticles} />
          </section>
        )}

        {/* {contentSingle.relatedVideos.length > 0 && (
          <section>
            <Title level={2}>
              {translations.solution.videoTitle}: {contentSingle.title}
            </Title>
            <CarouselVideos items={contentSingle.relatedVideos} />
          </section>
        )} */}
      </Container>
    </main>
  );
};
