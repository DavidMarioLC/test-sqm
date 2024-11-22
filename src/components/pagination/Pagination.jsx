"use client";
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";
import qs from "qs";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cleanParams } from "@/utils";

export const Pagination = ({
  totalPages,
  currentPage,
  baseUrl,
  searchParams,
}) => {
  // Función para generar URLs limpias
  const generateUrl = (page) => {
    const cleanedParams = cleanParams({
      ...searchParams,
      page: page.toString(),
    });

    const urlString = qs.stringify(cleanedParams, { addQueryPrefix: true });

    const cleanUrl = `${baseUrl}${urlString}`;

    return cleanUrl;
  };

  // end

  const getPaginationNumbers = () => {
    if (currentPage === 1 && totalPages >= 3) {
      return [1, 2, 3];
    } else if (totalPages === currentPage && totalPages < 2) {
      return [1];
    } else if (totalPages < 3) {
      return [1, 2];
    } else if (currentPage === totalPages) {
      return [currentPage - 2, currentPage - 1, currentPage];
    } else if (currentPage > totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  return (
    <PaginationRoot className="py-5">
      {totalPages !== 0 && (
        <PaginationContent>
          {currentPage !== 1 ? (
            <PaginationItem>
              <PaginationPrevious
                scroll={false}
                href={generateUrl(currentPage - 1)}
              />
            </PaginationItem>
          ) : (
            <button className="flex h-[38px] w-[38px] items-center justify-center opacity-50">
              <ChevronLeftIcon className="h-[20px] w-[20px]" />
            </button>
          )}
          {getPaginationNumbers().map((item, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                scroll={false}
                href={generateUrl(item)}
                isActive={item === currentPage}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages !== currentPage ? (
            <PaginationItem>
              <PaginationNext
                scroll={false}
                href={generateUrl(currentPage + 1)}
              />
            </PaginationItem>
          ) : (
            <button className="flex h-[38px] w-[38px] items-center justify-center opacity-50">
              <ChevronRightIcon className="h-[20px] w-[20px]" />
            </button>
          )}
        </PaginationContent>
      )}
    </PaginationRoot>
  );
};
