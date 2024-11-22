import { PageBanner } from "@/components/banner";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArticleCard,
  NewsCard,
  ProductCard,
  VideoCard,
} from "@/components/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Search } from "@/components/search";
import { fetchSearch, fetchSearchPage } from "@/services/search";
import { NoSearchResults } from "@/components/noSearchResults";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { fetchGeneralTranslations } from "@/services/general";

export const metadata = {
  title: "Search",
};

export default async function Page({ searchParams }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    ...searchParams,
    country: country,
    language: language,
  };

  const content = await fetchSearchPage(query);
  const results = await fetchSearch(query);
  const translations = await fetchGeneralTranslations(language);

  return (
    <div>
      <PageBanner
        title={content.title}
        image={content.image}
        imageAlt={content.imageAlt}
        description={`"${searchParams.q}"`}
      />
      <Container className="px-5 py-10 md:px-0">
        <Breadcrumb />
        <div className="mx-auto mb-10 max-w-[400px]">
          <Search placeholder={translations.search.searchPlaceholder} />
        </div>
        <Tabs defaultValue="01" className="">
          <ScrollArea className="-mx-6 w-screen pb-4 sm:w-auto md:mx-4 md:px-4">
            <TabsList className="flex">
              <TabsTrigger
                value="01"
                className="text-sm data-[state=active]:border-sqm-green md:px-5 md:text-base"
              >
                {results.solution.title} {`(${results.solution.quantity})`}
              </TabsTrigger>

              <TabsTrigger
                value="02"
                className="text-sm data-[state=active]:border-sqm-green md:px-5 md:text-base"
              >
                {results.articles.title} {`(${results.articles.quantity})`}
              </TabsTrigger>

              <TabsTrigger
                value="03"
                className="text-sm data-[state=active]:border-sqm-green md:px-5 md:text-base"
              >
                {results.videos.title} {`(${results.videos.quantity})`}
              </TabsTrigger>

              <TabsTrigger
                value="04"
                className="text-sm data-[state=active]:border-sqm-green md:px-5 md:text-base"
              >
                {results.news.title} {`(${results.news.quantity})`}
              </TabsTrigger>
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <TabsContent value="01" className="px-0 pt-10">
            {results.solution.items.length > 0 ? (
              <div className="grid- grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
                {results.solution.items.map((item, indx) => (
                  <ProductCard
                    parentSlug="marca"
                    key={item.id}
                    product={item}
                  />
                ))}
              </div>
            ) : (
              <NoSearchResults />
            )}
          </TabsContent>

          <TabsContent value="02" className="pt-10">
            {results.articles.items.length > 0 ? (
              <div className="grid- grid grid-cols-1 gap-10 md:grid-cols-3">
                {results.articles.items.map((item, indx) => (
                  <ArticleCard key={item.id} article={item} />
                ))}
              </div>
            ) : (
              <NoSearchResults />
            )}
          </TabsContent>

          <TabsContent value="03" className="pt-10">
            {results.videos.items.length > 0 ? (
              <div className="grid- grid grid-cols-1 gap-10 md:grid-cols-3">
                {results.videos.items.map((item, indx) => (
                  <VideoCard key={item.id} video={item} />
                ))}
              </div>
            ) : (
              <NoSearchResults />
            )}
          </TabsContent>

          <TabsContent value="04" className="pt-10">
            {results.news.items.length > 0 ? (
              <div className="grid- grid grid-cols-1 gap-10 md:grid-cols-3">
                {results.news.items.map((item, indx) => (
                  <NewsCard key={item.id} news={item} />
                ))}
              </div>
            ) : (
              <NoSearchResults />
            )}
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
}
