import { VideoCard } from "@/components/card";
import { NoSearchResults } from "@/components/noSearchResults";

export const Videos = ({ videos }) => {
  return (
    <section className="grid grid-cols-1 gap-[35px] pb-20 sm:grid-cols-2 md:grid-cols-3 md:gap-[70px]">
      {videos.length === 0 ? (
        <div className="col-span-full flex items-center justify-center text-center">
          <NoSearchResults />
        </div>
      ) : (
        videos.map((video, index) => <VideoCard video={video} key={index} />)
      )}
    </section>
  );
};
