import { Skeleton } from "@/components/ui/skeleton";

export const SelectSkeleton = () => {
  return (
    <div className="flex">
      <Skeleton className="h-[44px] min-w-full md:w-[160px]" />
    </div>
  );
};
