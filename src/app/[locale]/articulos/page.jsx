import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { ArticleFilters } from "@/components/filters";
import { Articles } from "./articles";
import { Suspense } from "react";
import { Pagination } from "@/components/pagination";
import {
  fetchMetadataArticlesPage,
  fetchArticlesPage,
  fetchArticlesTotalPages,
  fetchArticles,
} from "@/services/articles";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { Await } from "@/components/await";
import { ArticlesSkeleton } from "@/components/skeleton";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataArticlesPage(query);
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

export default async function Page({ searchParams }) {
  const { language, country } = await getLanguageAnCountry();
  const ITEM_LIMIT = 9;
  const search = searchParams.search || "";
  const application = searchParams.application || "";
  const nutrients = searchParams.nutrients || "";
  const crops = searchParams.crops || "";

  const currentPage = parseInt(searchParams.page) || 1;

  const query = {
    search,
    application,
    nutrients,
    crops,
    page: currentPage,
    limit: ITEM_LIMIT,
    country: country,
    language: language,
  };

  const paginationParams = {
    search,
    application,
    nutrients,
    crops,
  };

  const [contentPage, { totalPages }] = await Promise.all([
    fetchArticlesPage(query),
    fetchArticlesTotalPages(query),
  ]);

  const promise = fetchArticles(query);

  return (
    <main key={crypto.randomUUID()}>
      <PageBanner
        image={contentPage.image}
        title={contentPage.title}
        imageAlt={contentPage.imageAlt}
        description={contentPage.description}
      />
      <Container>
        <Breadcrumb />
      </Container>
      <section className="bg-sqm-bg py-8">
        <Container className="px-5 md:px-0">
          <ArticleFilters country={country} language={language} />
        </Container>
      </section>
      <Container className="px-5 pb-20 pt-10 md:px-0">
        <Suspense fallback={<ArticlesSkeleton />}>
          <Await promise={promise}>
            {({ data }) => <Articles articles={data} />}
          </Await>
        </Suspense>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          baseUrl="/articulos"
          searchParams={paginationParams}
        />
      </Container>
    </main>
  );
}
