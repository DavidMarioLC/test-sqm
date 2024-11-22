import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import { LiteVimeoEmbed, LiteYoutubeEmbed } from "../videoEmbed";

export const VimeoVideoCard = ({ video }) => {
  const { title, videoId, type } = video;
  return (
    <article className="group relative font-museosans">
      <div className="relative mb-5 aspect-video overflow-hidden rounded-t-xl rounded-br-xl bg-sqm-bg">
        {type === "vimeo" ? (
          <LiteVimeoEmbed videoId={videoId} />
        ) : (
          <LiteYoutubeEmbed videoId={videoId} />
        )}
      </div>

      <h2 className="line-clamp-3 text-lg font-medium text-sqm-gray-dark">
        {title}
      </h2>
    </article>
  );
};
