import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-10 pb-10 sm:grid-cols-3 md:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <article key={i}>
          <Skeleton className="h-[206px] w-[206px]" />
          <Skeleton className="h-[28px] w-[206px]" />
        </article>
      ))}
    </div>
  );
};
