"use client";
import React from "react";

export const LiteYoutubeEmbed = ({ videoId }) => {
  React.useEffect(() => {
    import("@justinribeiro/lite-youtube");
  }, []);

  return (
    <div className="aspect-video">
      <lite-youtube videoid={videoId}></lite-youtube>
    </div>
  );
};
