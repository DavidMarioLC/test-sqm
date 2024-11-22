"use client";
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cleanParams } from "@/utils";
import qs from "qs";
import { useRouter, usePathname } from "next/navigation";

import { SelectSkeleton } from "../skeleton";
import { useTaxomony } from "@/hooks";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

// select with search
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
// select with search

const FormSchema = z
  .object({
    search: z.string(),
    application: z.string(),
    category: z.string(),
    crops: z.string(),
  })
  .partial();

export const VideoFilters = ({ country, language }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [cleanButton, setCleanButton] = React.useState(false);
  const form = useForm({
    defaultValues: {
      search: "",
      application: "",
      category: "",
      crops: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    const params = {
      search: data.search || "",
      application: data.application || "",
      category: data.category || "",
      crops: data.crops || "",
    };

    const cleanedParams = cleanParams(params);
    const urlString = qs.stringify(cleanedParams, { addQueryPrefix: true });
    const cleanUrl = `${pathname}${urlString}`;

    router.replace(cleanUrl, { scroll: false });
  };

  const onReset = () => {
    router.replace(`${pathname}`, { scroll: false });
    form.reset({
      search: "",
      application: "",
      category: "",
      crops: "",
    });
  };

  React.useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (value.search || value.application || value.category || value.crops) {
        setCleanButton(true);
      } else {
        setCleanButton(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const {
    applications,
    categories,
    crops,
    isLoadingApplications,
    isLoadingCategories,
    isLoadingCrops,
  } = useTaxomony(country, language);

  const { translations } = useTranslations();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <label className="font-montserrat text-base font-normal">
          {translations.filters.videoFilterLabel}
        </label>
        <div className="my-4 flex flex-col gap-4 md:flex-row md:justify-start">
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={translations.common.keyword}
                    {...field}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoadingApplications ? (
            <SelectSkeleton />
          ) : (
            <FormField
              control={form.control}
              name="application"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={translations.common.selectApplication}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {applications.map((item) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {isLoadingCategories ? (
            <SelectSkeleton />
          ) : (
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder={"Categoría"} />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((item) => (
                          <SelectItem key={item.id} value={item.value}>
                            {item.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {isLoadingCrops ? (
            <SelectSkeleton />
          ) : (
            <FormField
              control={form.control}
              name="crops"
              // render={({ field }) => (
              //   <FormItem className="flex-1">
              //     <FormControl>
              //       <Select value={field.value} onValueChange={field.onChange}>
              //         <SelectTrigger>
              //           <SelectValue
              //             placeholder={translations.common.selectCrop}
              //           />
              //         </SelectTrigger>
              //         <SelectContent>
              //           {crops.map((item) => (
              //             <SelectItem key={item.id} value={item.value}>
              //               {item.name}
              //             </SelectItem>
              //           ))}
              //         </SelectContent>
              //       </Select>
              //     </FormControl>
              //     <FormMessage />
              //   </FormItem>
              // )}
              render={({ field }) => (
                <FormItem className="flex-1">
                  {/* select with search */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "flex h-11 w-full items-center justify-between whitespace-nowrap rounded-md border border-input border-sqm-gray-dark bg-sqm-white px-3 py-2 font-montserrat text-base font-normal text-sqm-black shadow-sm hover:bg-sqm-white hover:text-sqm-black",
                          )}
                        >
                          {field.value
                            ? crops.find((item) => item.value === field.value)
                                ?.name
                            : translations.common.selectCrop}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search crops..." />
                        <CommandList>
                          <CommandEmpty>No crops found.</CommandEmpty>
                          <CommandGroup>
                            {crops.map((item) => (
                              <CommandItem
                                value={item.value}
                                key={item.value}
                                onSelect={() => {
                                  form.setValue("crops", item.value);
                                }}
                              >
                                {item.name}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    item.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  {/* select with search */}
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="flex flex-col justify-end gap-4 sm:flex-row">
          {cleanButton && (
            <Button
              onClick={onReset}
              variant="ghost"
              className="order-2 gap-2 bg-sqm-bg p-0 font-normal underline hover:bg-sqm-bg"
            >
              <CrossCircledIcon />
              {translations.common.deleteFilters}
            </Button>
          )}
          <Button
            type="submit"
            variant="secondary"
            className="self-center sm:order-2"
          >
            {translations.common.filter}
          </Button>
        </div>
      </form>
    </Form>
  );
};
