import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("m-auto max-w-[1042px]", className)}>{children}</div>
  );
};
