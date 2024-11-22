"use client";
import React from "react";

import {
  Breadcrumb as BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { usePathname } from "next/navigation";

export const Breadcrumb = () => {
  const path = usePathname();

  const paths = path.split("/").filter(Boolean).slice(0);

  const breadcrumbItems = paths.map((segment, index) => {
    const href = "/" + paths.slice(0, index + 1).join("/");

    return {
      id: crypto.randomUUID(),
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href,
    };
  });

  return (
    <BreadcrumbRoot className="hidden pb-10 md:block">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Inicio</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        {breadcrumbItems.map((path, idx) => {
          if (path.label.toLowerCase() === paths[paths.length - 1]) {
            return (
              <BreadcrumbItem key={idx}>
                <BreadcrumbPage>
                  {path.label.replaceAll("-", " ")}
                </BreadcrumbPage>
              </BreadcrumbItem>
            );
          } else {
            return (
              <React.Fragment key={idx}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={path.href}>{path.label}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
              </React.Fragment>
            );
          }
        })}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
};
