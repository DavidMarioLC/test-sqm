import { Skeleton } from "@/components/ui/skeleton";

export const DistribuitorsSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          className="flex w-full flex-col gap-5 rounded-lg border border-primary/10 p-6 md:w-[330px]"
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
  );
};
