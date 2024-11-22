import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Search } from "../search";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

export const MobileNavigationMenu = ({ data, menuIsOpen, toggleMenu }) => {
  const [level, setLevel] = React.useState(1);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedSubItem, setSelectedSubItem] = React.useState(null);

  const renderMenuItem = (item, onClick) => {
    const commonClasses = "flex items-center  p-2 w-full text-left";

    if (item.sections?.links.length > 0 || item.list) {
      return (
        <button
          className={`${commonClasses} cursor-pointer font-montserrat font-medium text-sqm-gray-dark`}
          onClick={onClick}
        >
          <span>{item.title || item.heading || item.name}</span>
          <ChevronRight />
        </button>
      );
    } else if (item.variant === "variant-only-link") {
      return (
        <Link
          href={`${item.slug}`}
          onClick={toggleMenu}
          className={`${commonClasses} font-montserrat font-medium text-sqm-gray-dark`}
        >
          <span>{item.title || item.heading || item.name}</span>
        </Link>
      );
    } else {
      return (
        <ItemCard
          typeId={item?.typeId}
          logo={item.whiteLogo}
          mediumImage={item.mediumImage || item.banner}
          title={item.title || item.name}
          slug={item.slug}
        />
      );
    }

    return null;
  };

  const renderFirstLevel = () => (
    <ul className="space-y-2">
      {data.mainMenuItems.map((item) => (
        <li key={item.id}>
          {renderMenuItem(item, () => {
            if (item.sections) {
              setSelectedItem(item);
              setLevel(2);
            }
          })}
        </li>
      ))}
    </ul>
  );

  const renderSecondLevel = () => (
    <div className="flex flex-col overflow-hidden">
      <button
        className="flex w-full cursor-pointer items-center pb-5 pe-2 ps-0 pt-2 text-left font-montserrat font-medium text-sqm-gray-dark"
        onClick={() => setLevel(1)}
      >
        <ChevronLeft className="mr-1 text-sqm-green" />
        <span className="text-sqm-blue">{selectedItem.title}</span>
      </button>
      <ul className="space-y-2 overflow-y-auto">
        {selectedItem.sections.links.map((subItem) => (
          <li key={subItem.id}>
            {renderMenuItem(subItem, () => {
              if (subItem.list) {
                setSelectedSubItem(subItem);
                setLevel(3);
              }
            })}
          </li>
        ))}
      </ul>
    </div>
  );

  const renderThirdLevel = () => (
    <div className="flex flex-col overflow-hidden">
      <button
        className="flex w-full cursor-pointer items-center pb-5 pe-2 ps-0 pt-2 text-left font-montserrat font-medium text-sqm-gray-dark"
        onClick={() => setLevel(2)}
      >
        <ChevronLeft className="mr-1 text-sqm-green" />
        <span className="text-sqm-blue">{selectedSubItem.heading}</span>
      </button>
      <ul className="space-y-2 overflow-y-auto">
        {selectedSubItem.list.map((item) => (
          <li key={item.id}>{renderMenuItem(item)}</li>
        ))}
      </ul>
    </div>
  );

  const ItemCard = ({ typeId, mediumImage, logo, title, slug }) => {
    const MAP_URL = {
      brands: `/marca/${slug}`,
      applications: `/aplicacion/${slug}`,
      nutrients: `/solucion-nutricional/${slug}`,
      efficiency: `/alta-eficiencia/${slug}`,
    };

    const url = MAP_URL[typeId] || `${slug}`;
    return (
      <Link
        href={url}
        onClick={toggleMenu}
        className="relative flex h-[120px] items-center justify-center overflow-hidden rounded-t-xl rounded-br-xl"
      >
        <div className="inset absolute z-[1] h-full w-full bg-sqm-black/10"></div>
        <img
          src={mediumImage}
          className="absolute h-full w-full object-cover"
          alt="text alt"
        />
        {typeId === "brands" ? (
          <img src={logo} className="relative z-[2]" />
        ) : (
          <p className="relative z-[2] font-museosans text-lg font-bold text-sqm-white">
            {title}
          </p>
        )}
      </Link>
    );
  };

  const { translations } = useTranslations();

  return (
    <nav
      className={cn(
        `mobileNavigationMenu`,
        menuIsOpen && "visible translate-x-0",
      )}
    >
      <Search placeholder={translations.search.searchPlaceholder} />
      {level === 1 && renderFirstLevel()}
      {level === 2 && renderSecondLevel()}
      {level === 3 && renderThirdLevel()}
    </nav>
  );
};
