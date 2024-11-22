import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const DistributorCard = ({ distribuitor, onOpenMap, active }) => {
  const { title, direction, phone, mail } = distribuitor;
  return (
    <article
      className={cn(
        "flex flex-col gap-4 rounded-lg border border-sqm-gray-light bg-sqm-white p-6 font-montserrat text-sm font-normal text-sqm-black",
        active && "border-sqm-blue",
      )}
    >
      <h2 className="font-museosans text-xl font-black text-sqm-blue">
        {title}
      </h2>
      <p>{direction}</p>
      <a href="#" className="underline underline-offset-2">
        {phone}
      </a>
      <a href="#" className="underline underline-offset-2">
        {mail}
      </a>

      <Button
        onClick={() => onOpenMap(distribuitor)}
        className="self-start rounded-lg border-2 border-sqm-gray-light bg-sqm-bg px-3 hover:border-sqm-blue"
      >
        <IconGoogleMap />
      </Button>
    </article>
  );
};

const IconGoogleMap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#34A853"
        d="M3.86 14.575c.58.7 1.11 1.438 1.581 2.207.404.724.572 1.215.867 2.087.18.482.344.626.695.626.383 0 .556-.245.69-.623.279-.824.497-1.452.842-2.046.677-1.147 1.518-2.166 2.344-3.146.224-.277 1.67-1.891 2.321-3.166 0 0 .8-1.4.8-3.354 0-1.828-.789-3.097-.789-3.097l-2.272.576-1.38 3.44-.341.475-.068.086-.091.108-.16.171-.227.216-1.229.948-3.072 1.679-.51 2.813Z"
      />
      <path
        fill="#FBBC04"
        d="M.69 10.279c.75 1.62 2.195 3.046 3.174 4.296L9.059 8.75s-.732.907-2.06.907c-1.479 0-2.673-1.118-2.673-2.528 0-.967.614-1.63.614-1.63l-3.527.894-.723 3.887Z"
      />
      <path
        fill="#4285F4"
        d="M9.117.8c1.725.526 3.202 1.632 4.096 3.263L9.06 8.747s.615-.676.615-1.637c0-1.443-1.283-2.52-2.67-2.52-1.31 0-2.063.904-2.063.904v-2.95L9.117.8Z"
      />
      <path
        fill="#1A73E8"
        d="M1.642 2.87A7.085 7.085 0 0 1 6.986.5c1.213 0 2.127.301 2.127.301L4.938 5.497H1.98l-.338-2.628Z"
      />
      <path
        fill="#EA4335"
        d="M.69 10.279S0 9 0 7.148c0-1.75.719-3.281 1.641-4.279l3.3 2.628L.69 10.279Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h14v19H0z" />
      </clipPath>
    </defs>
  </svg>
);
