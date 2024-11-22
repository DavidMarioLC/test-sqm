"use client";

import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

export const Search = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="flex h-[44px] w-full flex-shrink-0 overflow-hidden rounded-md border border-sqm-gray-dark">
      <Input
        id="name"
        placeholder={placeholder}
        onChange={handleChange}
        className="rounded-none border-0"
      />
      <button
        onClick={handleSearch}
        className="flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center bg-sqm-white"
      >
        <SearchIcon size={20} />
      </button>
    </div>
  );
};
