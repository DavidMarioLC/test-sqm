"use client";
import React from "react";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import { DesktopNavigationMenu } from "./DesktopNavigationMenu";
import { CountryAndLanguageModal } from "../countryAndLanguageModal";
import Link from "next/link";

export const Header = ({
  data,
  countries,
  languages,
  currentCountry,
  currentLanguage,
}) => {
  const [menuIsOpen, setMenu] = React.useState(false);
  const [modalCountryAndLanguage, setModalCountryAndLanguage] =
    React.useState(false);

  const toggleMenu = () => setMenu(!menuIsOpen);

  React.useEffect(() => {
    window.document.body.style.overflow =
      menuIsOpen || modalCountryAndLanguage ? "hidden" : "auto";
  }, [menuIsOpen, modalCountryAndLanguage]);

  return (
    <React.Fragment>
      <header className="top-0 z-[100] bg-sqm-white lg:sticky">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-[120px] px-5 py-[12px]">
          <Link href="/">
            <img className="hidden w-[136px] md:block" src={data.largeLogo} />
            <img className="md:hidden" src={data.smallLogo} />
          </Link>

          <MobileNavigationMenu
            data={data}
            toggleMenu={toggleMenu}
            menuIsOpen={menuIsOpen}
          />
          <DesktopNavigationMenu data={data} />
          <div className="flex flex-shrink-0 gap-2">
            {/* modal country and language */}
            <CountryAndLanguageModal
              modalCountryAndLanguage={modalCountryAndLanguage}
              setModalCountryAndLanguage={setModalCountryAndLanguage}
              languages={languages}
              countries={countries}
              currentCountry={currentCountry}
              currentLanguage={currentLanguage}
            />
            {/* mobile menu */}
            <button
              onClick={toggleMenu}
              className={`button-menu md:hidden ${menuIsOpen ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
