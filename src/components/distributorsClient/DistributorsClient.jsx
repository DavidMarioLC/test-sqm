"use client";

import React from "react";
import { useMediaQuery, useDebounce } from "@uidotdev/usehooks";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DistributorCard } from "@/components/card";
import { useDistribuitors } from "@/hooks/useDistribuitors";
import { useStates } from "@/hooks";
import { DistribuitorsSkeleton, SelectSkeleton } from "../skeleton";
import { cn } from "@/lib/utils";
import { NoSearchResults } from "../noSearchResults";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

const GOOGLE_MAP_API = process.env.NEXT_PUBLIC_SQM_API_GOOGLE_MAP;

export const DistributorsClient = ({ country, language }) => {
  const isSmallDevice = useMediaQuery("(max-width : 768px)");
  const [open, setOpen] = React.useState(false);

  const { states, isLoadingStates } = useStates(country.code, language);

  const [state, setState] = React.useState("");
  const [word, setWord] = React.useState("");
  const debouncedSearchWord = useDebounce(word, 500);

  const { distribuitors, isLoadingDistribuitors } = useDistribuitors(
    country.code,
    language,
    state,
    debouncedSearchWord,
  );

  const [activeDistributor, setActiveDistributor] = React.useState({
    id: "",
    longitude: "",
    latitude: "",
    title: "",
    direction: "",
    phone: "",
    mail: "",
  });

  function showMap(distribuitor) {
    if (isSmallDevice) {
      setActiveDistributor(distribuitor);
      setOpen(true);
    } else {
      setActiveDistributor(distribuitor);
    }
  }

  function onSelectState(value) {
    setState(value);
  }

  function onChangeSearch(e) {
    setWord(e.target.value);
  }

  function cleanFilters() {
    setState("");
    setWord("");
  }

  React.useEffect(() => {
    if (distribuitors && distribuitors.length > 0) {
      setActiveDistributor(distribuitors[0]);
    }
  }, [distribuitors, state, word]);

  let cleanButton = state || word;

  const { translations } = useTranslations();

  return (
    <main className="flex">
      <div className="flex w-full flex-col gap-5 md:w-4/12">
        <div className="flex flex-col gap-3 md:pe-4">
          {/* country */}
          <div className="flex items-center justify-between rounded-lg bg-[#F1F4FF] px-6 py-[10px]">
            <span className="font-montserrat text-base font-normal text-sqm-gray-dark">
              {country.name}
            </span>
            <img
              className="h-[20px] w-[32px]"
              src={country.image}
              width={24}
              height={12}
            />
          </div>
          {/* state */}
          {isLoadingStates ? (
            <SelectSkeleton />
          ) : (
            states &&
            states.length > 0 && (
              <Select value={state} onValueChange={onSelectState}>
                <SelectTrigger className="">
                  <SelectValue placeholder={translations.common.state} />
                </SelectTrigger>
                <SelectContent>
                  {states.map((item) => (
                    <SelectItem key={item.id} value={item.name}>
                      {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )
          )}

          {/* search */}
          <div className="flex w-full overflow-hidden rounded-md border border-sqm-gray-dark">
            <Input
              value={word}
              placeholder={translations.search.searchUbication}
              onChange={onChangeSearch}
              className="rounded-none border-0"
            />
            <button className="pointer-events-none flex h-[44px] w-[44px] flex-shrink-0 items-center justify-center bg-sqm-white">
              <SearchIcon size={20} />
            </button>
          </div>
          {/* clear filters */}
          {cleanButton && (
            <Button
              onClick={cleanFilters}
              variant="ghost"
              className="justify-start gap-2 bg-sqm-white p-0 font-normal underline hover:bg-sqm-white"
            >
              <CrossCircledIcon />
              {translations.common.deleteFilters}
            </Button>
          )}
        </div>
        {/* list cards */}
        <ScrollArea className="h-[480px] pe-4">
          {isLoadingDistribuitors ? (
            <DistribuitorsSkeleton />
          ) : distribuitors.length > 0 ? (
            <div className="flex flex-col gap-3">
              {distribuitors.map((item, index) => (
                <DistributorCard
                  key={item.id}
                  distribuitor={item}
                  onOpenMap={showMap}
                  active={item.id === activeDistributor.id}
                />
              ))}
            </div>
          ) : (
            <div className="w-full">
              <NoSearchResults />
            </div>
          )}
        </ScrollArea>
      </div>
      {/* map */}
      <GoogleMap
        latitude={activeDistributor.latitude}
        longitude={activeDistributor.longitude}
        className="hidden md:block md:w-2/3"
      />
      {/* dialog */}
      <Dialog className="bg-sqm-black/50" open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-museosans text-xl font-black text-sqm-blue">
              {activeDistributor.title}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <GoogleMap
            latitude={activeDistributor.latitude}
            longitude={activeDistributor.longitude}
          />
        </DialogContent>
      </Dialog>

      {/* dialog */}
    </main>
  );
};

function GoogleMap({ latitude, longitude, className }) {
  return (
    <iframe
      className={cn("h-[50vh] w-full md:h-[660px]", className)}
      width={600}
      height={450}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?q=${latitude},${longitude}&key=${GOOGLE_MAP_API}`}
    ></iframe>
  );
}
