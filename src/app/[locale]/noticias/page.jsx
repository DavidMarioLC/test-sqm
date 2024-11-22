import { Suspense } from "react";
import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { Pagination } from "@/components/pagination";
import { NewFilters } from "@/components/filters";
import { News } from "./news";
import {
  fetchMetadataNewsPage,
  fetchNews,
  fetchNewsPage,
  fetchNewsTotalPages,
} from "@/services/news";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { Await } from "@/components/await";
import { NewsSkeleton } from "@/components/skeleton";

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataNewsPage(query);

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
  const date = searchParams.date || "";
  const currentPage = parseInt(searchParams.page) || 1;

  const query = {
    search,
    date,
    page: currentPage,
    limit: ITEM_LIMIT,
    country: country,
    language: language,
  };

  const paginationParams = { search, date };

  const [contentPage, totalPages] = await Promise.all([
    fetchNewsPage(query),
    fetchNewsTotalPages(query),
  ]);

  const promise = fetchNews(query);
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
          <NewFilters />
        </Container>
      </section>
      <Container className="px-5 pb-20 pt-10 md:px-0">
        <Suspense fallback={<NewsSkeleton />}>
          <Await promise={promise}>{({ data }) => <News news={data} />}</Await>
        </Suspense>
        <Pagination
          totalPages={totalPages.totalPages}
          currentPage={currentPage}
          baseUrl="/noticias"
          searchParams={paginationParams}
        />
      </Container>
    </main>
  );
}
