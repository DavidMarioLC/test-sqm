"use client";
import React from "react";

import dynamic from "next/dynamic";
const WorldMap = dynamic(
  () => import("react-svg-worldmap").then((mod) => mod.WorldMap),
  { ssr: false }, 
);

export const InteractiveWorldMap = ({
  data,
  handleCountryClick,
  selectedCountry,
}) => {
  return (
    <WorldMap
      color="#233D94"
      valueSuffix="seleccionado"
      size="responsive"
      data={data}
      onClickFunction={handleCountryClick}
      backgroundColor="#F8F8F8"
      // styleFunction={(defaultStyle, country) => {}}
    />
  );
};
