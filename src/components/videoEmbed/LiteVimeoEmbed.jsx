"use client";
import React from "react";

export const LiteVimeoEmbed = ({ videoId }) => {
  React.useEffect(() => {
    // Cargar el script de lite-vimeo-embed dinámicamente
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/lite-vimeo-embed/+esm";
    script.async = true;

    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <lite-vimeo videoid={videoId}></lite-vimeo>;
};
