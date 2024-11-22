import { Skeleton } from "@/components/ui/skeleton";

export const DistribuitorClientSkeleton = () => {
  return (
    <div className="flex h-[660px] gap-4">
      <div className="flex w-full flex-col gap-5 md:w-4/12">
        <div className="flex flex-col gap-4 pe-4">
          <Skeleton className="h-[44px] w-full" />
          <Skeleton className="h-[44px] w-full" />
          <Skeleton className="h-[44px] w-full" />
        </div>
        <div className="flex flex-col gap-3">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              className="flex w-full flex-col gap-5 rounded-lg border border-primary/10 p-6"
              key={i}
            >
              <Skeleton className="h-[28px] w-3/4" />
              <Skeleton className="h-[20px]" />
              <Skeleton className="h-[20px] w-1/2" />
              <Skeleton className="h-[20px] w-[60%]" />
              <Skeleton className="h-[44px] w-[44px]" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton className="h-full w-full md:w-2/3" />
    </div>
  );
};
