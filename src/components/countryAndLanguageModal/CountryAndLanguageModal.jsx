"use client";
import React from "react";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InteractiveWorldMap } from "../map";
import { useTranslations } from "@/providers/GeneralTranslateProvider";
import { useRouter } from "next/navigation";
import { setUserLocale } from "@/services/locale";
import { setUserCountry } from "@/services/country";

export const CountryAndLanguageModal = ({
  modalCountryAndLanguage,
  setModalCountryAndLanguage,
  countries,
  languages,
  currentCountry,
  currentLanguage,
}) => {
  const router = useRouter();
  const [isPendingLanguage, startTransitionLanguage] = React.useTransition();
  const [isPendingCountry, startTransitionCountry] = React.useTransition();

  // map interactive
  const selectedCountryMap = [{ country: currentCountry.code, value: 1 }];

  const handleSelectCountry = (value) => {
    setUserCountry(value);

    startTransitionCountry(() => {
      router.refresh();
    });
  };

  const handleSelectLanguage = (value) => {
    setUserLocale(value);

    startTransitionLanguage(() => {
      router.refresh();
    });
  };

  const handleCountryClickInMap = ({ countryCode }) => {
    const existCountry = countries.find(
      (country) => country.code === countryCode,
    );

    if (existCountry) {
      setUserCountry(countryCode);
      startTransitionCountry(() => {
        router.refresh();
      });
    }
  };

  const { translations } = useTranslations();

  return (
    <React.Fragment>
      <div
        className={cn(
          "invisible absolute inset-0 z-20 h-screen w-full bg-sqm-black/50 opacity-0 duration-300 ease-out",
          modalCountryAndLanguage && "visible opacity-100",
        )}
      >
        <div
          className={cn(
            "invisible relative -translate-y-[100px] bg-sqm-bg opacity-0 duration-300 ease-out",
            modalCountryAndLanguage && "visible translate-y-0 opacity-100",
          )}
        >
          <button
            onClick={() => setModalCountryAndLanguage(false)}
            className="absolute right-[14%] top-[20px]"
          >
            <X />
          </button>
          <div className="mx-auto max-w-[1040px] px-5 pb-10 pt-[44px] md:pb-[70px]">
            <p className="mb-8 font-museosans text-2xl font-bold text-sqm-blue md:text-[2rem]">
              {translations.languageAndCountry.selectUbicationTitle}
            </p>
            <div className="flex flex-col gap-5 md:gap-10 lg:flex-row">
              <div className="relative w-full md:w-[80%]">
                <InteractiveWorldMap
                  selectedCountry={currentCountry.code}
                  data={selectedCountryMap}
                  handleCountryClick={handleCountryClickInMap}
                />
                {isPendingCountry && (
                  <div className="absolute inset-0 flex items-center justify-center bg-sqm-gray-light/50">
                    <svg
                      className="text-white -ml-1 mr-3 h-5 w-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Loading...</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-10 lg:w-[30%]">
                {/* country select */}
                <div>
                  <p className="mb-3">
                    {translations.languageAndCountry.selectCountryTitle}
                  </p>
                  {isPendingCountry ? (
                    <div className="flex h-[44px] items-center gap-1">
                      <svg
                        className="text-white -ml-1 mr-3 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    <Select
                      value={currentCountry.code}
                      onValueChange={handleSelectCountry}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            translations.languageAndCountry.selectCountry
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.code}>
                            <div className="flex items-center gap-1">
                              <img
                                className="h-[16px] w-[24px]"
                                src={country.image}
                                width={24}
                                height={20}
                              />
                              {country.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
                {/* language select */}
                <div>
                  <p className="mb-3">
                    {translations.languageAndCountry.selectLanguage}
                  </p>
                  {isPendingLanguage ? (
                    <div className="flex h-[44px] items-center gap-1">
                      <svg
                        className="text-white -ml-1 mr-3 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Loading...</span>
                    </div>
                  ) : (
                    <Select
                      value={currentLanguage}
                      onValueChange={handleSelectLanguage}
                    >
                      <SelectTrigger>
                        <SelectValue
                          placeholder={translations.languageAndCountry.select}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((item) => (
                          <SelectItem key={item.id} value={item.code}>
                            {item.translated_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="flex items-center gap-1"
        onClick={() => setModalCountryAndLanguage(true)}
      >
        <img
          className="h-[14px] w-[20px]"
          src={currentCountry.image}
          width="20"
          height="20"
        />
        <ChevronDown size={16} />
      </button>
    </React.Fragment>
  );
};
