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

const FormSchema = z
  .object({
    search: z.string(),
    solution: z.string(),
    efficiency: z.string(),
    brand: z.string(),
  })
  .partial();

export const ApplicationFilters = ({ country, language }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [cleanButton, setCleanButton] = React.useState(false);
  const form = useForm({
    defaultValues: {
      search: "",
      solution: "",
      efficiency: "",
      brand: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    const params = {
      search: data.search || "",
      solution: data.solution || "",
      efficiency: data.efficiency || "",
      brand: data.brand || "",
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
      solution: "",
      efficiency: "",
      brand: "",
    });
  };

  React.useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (value.search || value.solution || value.efficiency || value.brand) {
        setCleanButton(true);
      } else {
        setCleanButton(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const {
    solutions,
    efficiency,
    brands,

    isLoadingSolutions,
    isLoadingEfficiency,
    isLoadingBrands,
  } = useTaxomony(country, language);

  const { translations } = useTranslations();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <label className="font-montserrat text-base font-normal">
          {translations.filters.solutionFilterLabel}
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

          {isLoadingSolutions ? (
            <SelectSkeleton />
          ) : (
            <FormField
              control={form.control}
              name="solution"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={translations.common.selectSolution}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {solutions.map((item) => (
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
          {isLoadingEfficiency ? (
            <SelectSkeleton />
          ) : (
            <FormField
              control={form.control}
              name="efficiency"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={translations.common.selectEfficiency}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {efficiency.map((item) => (
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
          {isLoadingBrands ? (
            <SelectSkeleton />
          ) : (
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={translations.common.selectBrand}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map((item) => (
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
