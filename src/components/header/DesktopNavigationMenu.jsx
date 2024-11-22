"use client";
import React from "react";
import { ChevronDown, ChevronRight, Search as SearchIcon } from "lucide-react";
// import Link from "next/link";
import Link from "next/link";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Search } from "../search";
import { Button } from "../ui/button";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

export const DesktopNavigationMenu = ({ data }) => {
  const [openSubMenu, setOpenSubMenu] = React.useState(null);
  const [openSearch, setOpenSearch] = React.useState(false);
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const { translations } = useTranslations();

  return (
    <nav ref={navRef} className="relative hidden flex-1 lg:flex">
      {/* navigations */}
      <div
        className={cn(
          "flex flex-1 items-center justify-center gap-5",
          openSearch && "invisible opacity-0",
        )}
      >
        <ul className="flex gap-5">
          {data.mainMenuItems.map((item, index) => {
            if (item.variant === "variant-only-link") {
              return (
                <li
                  key={item.id}
                  className="cursor-pointer font-medium text-sqm-gray-dark hover:text-sqm-blue"
                >
                  <Link href={item.slug}>{item.title}</Link>
                </li>
              );
            } else {
              return (
                <Submenu
                  openSubMenu={openSubMenu === index}
                  handleToggle={() => handleToggle(index)}
                  key={item.id}
                  item={item}
                  onClose={() => setOpenSubMenu(null)}
                />
              );
            }
          })}
        </ul>
        <Button
          onClick={() => setOpenSearch(true)}
          variant="ghost"
          className="gap-2 bg-sqm-white px-4 py-2 font-normal underline"
        >
          <SearchIcon size={16} />
        </Button>
      </div>
      {/* search */}
      <div
        className={cn(
          "invisible absolute flex w-full flex-1 items-center justify-center gap-5 opacity-0 duration-300 ease-linear",
          openSearch && "visible opacity-100",
        )}
      >
        <div className={cn("flex-1")}>
          <Search placeholder={translations.search.searchPlaceholder} />
        </div>
        <Button
          onClick={() => setOpenSearch(false)}
          variant="ghost"
          className="gap-2 bg-sqm-white p-2 font-normal underline"
        >
          {translations.search.cancelar}
        </Button>
      </div>
    </nav>
  );
};

const Submenu = ({ item, openSubMenu, handleToggle, onClose }) => {
  const menuRef = React.useRef(null);

  const handleClick = (e) => {
    e.stopPropagation(); // Previene que el clic se propague al documento
    handleToggle();
  };

  if (item.variant === "variant-linksAndCard") {
    return (
      <li
        ref={menuRef}
        className="flex cursor-pointer items-center gap-1 font-medium text-sqm-gray-dark hover:text-sqm-blue"
        onClick={handleClick}
      >
        {item.title}
        <ChevronDown size={16} />
        {/* submenu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "invisible fixed left-0 right-0 top-[93px] z-10 w-full -translate-y-[10px] bg-sqm-bg pb-[60px] pt-[32px] opacity-0 duration-500 ease-out",
            openSubMenu && "visible translate-y-0 opacity-100",
          )}
        >
          <div className="mx-auto max-w-[960px]">
            <Tabs defaultValue="solution" className="flex justify-between">
              {/* tabTrigger */}
              <TabsList className="flex h-auto flex-col items-start justify-start p-0">
                <TabsTrigger value="solution" className="hidden">
                  solution
                </TabsTrigger>
                {item.sections.links.map((item, index) => (
                  <TabsTrigger
                    key={item.id}
                    value={index}
                    className="group flex items-center gap-1 border-none"
                  >
                    <span className="font-museosans font-medium group-data-[state=active]:font-bold group-data-[state=active]:text-sqm-blue">
                      {item.heading}
                    </span>
                    <ChevronRight
                      size={16}
                      className="opacity-0 group-data-[state=active]:text-sqm-green group-data-[state=active]:opacity-100"
                    />
                  </TabsTrigger>
                ))}
              </TabsList>
              {/* tabContent */}
              <TabsContent value="solution" className="">
                <img
                  src={item.sections.banner}
                  className="h-[260px] w-[630px] rounded-lg object-cover"
                  alt="text alt"
                />
              </TabsContent>
              {item.sections.links.map((item, index) => (
                <TabsContent key={item.id} value={index} className="p-0">
                  <div className="relative flex gap-[76px] p-0">
                    <ul className="flex w-[200px] flex-col">
                      {item.list.map((item, index) => {
                        const MAP_URL = {
                          brands: `/marca/${item.slug}`,
                          applications: `/aplicacion/${item.slug}`,
                          nutrients: `/solucion-nutricional/${item.slug}`,
                          efficiency: `/alta-eficiencia/${item.slug}`,
                        };

                        const url = MAP_URL[item.typeId] || `/${item.slug}`;
                        return (
                          <li key={index}>
                            <Link
                              href={url}
                              className="group inline-block border-b-2 border-sqm-bg p-[10px] font-montserrat font-medium hover:border-sqm-green hover:text-sqm-blue"
                              onClick={onClose}
                            >
                              {item.name}
                              <div className="invisible absolute bottom-0 right-0 top-0 w-[68%] bg-sqm-bg opacity-0 duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                                <img
                                  src={item.promotionImage}
                                  className="ms-auto h-[213px] w-[350px] rounded-lg object-contain"
                                  alt="texto descriptivo de la imagen"
                                />
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="max-w-[350px]">
                      <img
                        src={item.image}
                        className="mb-4 h-[200px] w-[310px] rounded-lg object-cover"
                        alt="texto descriptivo de la imagen"
                      />
                      <p>{item.shortDescription}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </li>
    );
  } else if (item.variant === "variant-cards") {
    return (
      <li
        ref={menuRef}
        className="flex cursor-pointer items-center gap-1 font-medium text-sqm-gray-dark hover:text-sqm-blue"
        onClick={handleClick}
      >
        {item.title}
        <ChevronDown size={16} />
        {/* submenu */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "invisible fixed left-0 right-0 top-[93px] z-10 w-full -translate-y-[10px] bg-sqm-bg pb-[60px] pt-[32px] opacity-0 duration-500 ease-out",
            openSubMenu && "visible translate-y-0 opacity-100",
          )}
        >
          <div className="mx-auto flex max-w-[960px] justify-between gap-5">
            {item.sections.links.map((item, index) => (
              <Link
                key={index}
                href={item.slug}
                className="group relative flex h-[208px] flex-1 items-end justify-center overflow-hidden rounded-t-xl rounded-br-xl"
                onClick={onClose}
              >
                <div className="inset absolute z-[1] h-full w-full bg-sqm-black/10 duration-100 ease-in group-hover:bg-sqm-black/60"></div>
                <img
                  src={item.banner}
                  className="absolute h-full w-full object-cover"
                  alt="texto descriptivo de la imagen"
                />
                <p className="relative z-[2] px-[10px] py-5 text-center font-museosans text-lg font-bold text-sqm-white duration-300 ease-in-out group-hover:-translate-y-[70%]">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </li>
    );
  }
};
