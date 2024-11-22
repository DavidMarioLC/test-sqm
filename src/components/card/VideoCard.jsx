"use client";
import Image from "next/image";
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

export const VideoCard = ({ video }) => {
  const [open, setOpen] = React.useState(false);
  const { image, imageAlt, title, videoId, type } = video;
  const [imageSrc, setImageSrc] = React.useState(image);

  return (
    <React.Fragment>
      <article
        className="group relative cursor-pointer font-museosans"
        onClick={() => setOpen(true)}
      >
        <figure className="relative mb-5 aspect-video overflow-hidden rounded-t-xl rounded-br-xl bg-sqm-bg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
            width={300}
            height={200}
            onError={() => {
              setImageSrc("/placeholder.svg");
            }}
          />
          <span className="absolute inset-0 z-10 flex items-center justify-center bg-sqm-black/50 opacity-0 duration-300 ease-in-out group-hover:opacity-100">
            <VideoIconSQM />
          </span>
        </figure>

        <h2 className="line-clamp-3 text-lg font-medium text-sqm-gray-dark">
          <span className="absolute inset-0"></span>
          {title}
        </h2>
      </article>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[800px]">
          <DialogHeader>
            <DialogTitle className="pb-6">{title}</DialogTitle>
            <DialogDescription>
              {type === "vimeo" ? (
                <LiteVimeoEmbed videoId={videoId} />
              ) : (
                <LiteYoutubeEmbed videoId={videoId} />
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

const VideoIconSQM = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={56}
    fill="none"
    {...props}
  >
    <circle
      cx={27.5}
      cy={27.75}
      r={25.5}
      fill="#fff"
      stroke="#80BC00"
      strokeWidth={4}
    />
    <path
      fill="#233D94"
      stroke="#233D94"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M24.07 19.551a.7.7 0 0 0-1.058.603v16.239a.701.701 0 0 0 1.059.603l13.7-8.12a.702.702 0 0 0 0-1.206l-13.7-8.119Z"
    />
  </svg>
);
