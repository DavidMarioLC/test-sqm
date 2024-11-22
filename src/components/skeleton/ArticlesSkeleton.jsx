import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ArticlesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-3">
      {Array.from({ length: 9 }).map((_, i) => (
        <article key={i}>
          <Skeleton className="mb-4 h-[169px] w-full rounded-t-xl rounded-br-xl" />
          <Skeleton className="mb-4 h-[18px] w-full" />
          <Skeleton className="h-[18px] w-1/3" />
        </article>
      ))}
    </div>
  );
};

