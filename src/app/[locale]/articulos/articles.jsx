import { ArticleCard } from "@/components/card";
import { NoSearchResults } from "@/components/noSearchResults";

export const Articles = ({ articles }) => {
  return (
    <section className="grid grid-cols-1 gap-[35px] pb-20 sm:grid-cols-2 md:grid-cols-3 md:gap-[70px]">
      {articles.length === 0 ? (
        <div className="col-span-full flex items-center justify-center text-center">
          <NoSearchResults />
        </div>
      ) : (
        articles.map((article, index) => (
          <ArticleCard article={article} key={index} />
        ))
      )}
    </section>
  );
};
