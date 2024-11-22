export const dynamic = "force-dynamic";
import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { VideoFilters } from "@/components/filters";
import { Pagination } from "@/components/pagination";
import { Suspense } from "react";
import { Videos } from "./videos";
import {
  fetchMetadataVideosPage,
  fetchVideos,
  fetchVideosPage,
  fetchVideosTotalPages,
} from "@/services/videos";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

import { VideosSkeleton } from "@/components/skeleton";
import { Await } from "@/components/await";

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };

  const metadata = await fetchMetadataVideosPage(query);
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
  const category = searchParams.category || "";
  const crops = searchParams.crops || "";

  const currentPage = parseInt(searchParams.page) || 1;

  const query = {
    search,
    application,
    category,
    crops,
    page: currentPage,
    limit: ITEM_LIMIT,
    country: country,
    language: language,
  };

  const paginationParams = {
    search,
    application,
    category,
    crops,
  };

  const [contentPage, { totalPages }] = await Promise.all([
    fetchVideosPage(query),
    fetchVideosTotalPages(query),
  ]);

  const promise = fetchVideos(query);

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
          <VideoFilters country={country} language={language} />
        </Container>
      </section>
      <Container className="px-5 pb-20 pt-10 md:px-0">
        <Suspense fallback={<VideosSkeleton />}>
          <Await promise={promise}>
            {({ data }) => <Videos videos={data} />}
          </Await>
        </Suspense>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          baseUrl="/videos"
          searchParams={paginationParams}
        />
      </Container>
    </main>
  );
}
