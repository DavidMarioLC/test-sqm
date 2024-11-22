"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { useRouter, usePathname } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import qs from "qs";
import { cleanParams } from "@/utils";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

const FormSchema = z
  .object({
    date: z.date(),
    search: z.string(),
  })
  .partial();

export const NewFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [cleanButton, setCleanButton] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data) => {
    const params = {
      search: data.search || "",
      date: data.date?.toISOString() || "",
    };

    const cleanedParams = cleanParams(params);
    const urlString = qs.stringify(cleanedParams, { addQueryPrefix: true });
    const cleanUrl = `${pathname}${urlString}`;

    router.replace(cleanUrl, { scroll: false });
  };

  const onReset = () => {
    router.replace(`${pathname}`, { scroll: false });
    form.reset();
  };

  React.useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (value.search || value.date) {
        setCleanButton(true);
      } else {
        setCleanButton(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const { translations } = useTranslations();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Label className="font-montserrat text-base font-normal">
          {translations.filters.newsFilterLabel}
        </Label>
        <div className="my-4 flex flex-col gap-4 md:max-w-screen-sm md:flex-row md:justify-start">
          {/* input */}
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormControl rules={{ required: false }}>
                  <Input
                    placeholder={translations.common.keyword}
                    {...field}
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: false }}
          />
          {/* input */}
          {/* date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="ghost"
                        className={cn(
                          "border border-sqm-gray-dark bg-sqm-white pl-3 text-left font-montserrat text-base font-normal md:w-[240px]",
                          !field.value && "text-sqm-gray-dark",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>{translations.common.date}</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* date */}
          <Button type="submit" variant="secondary" className="self-center">
            {translations.common.filter}
          </Button>
        </div>
      </form>
      <div className="text-center md:text-start">
        {cleanButton && (
          <Button
            onClick={onReset}
            variant="ghost"
            className="gap-2 bg-sqm-bg p-0 font-normal underline hover:bg-sqm-bg"
          >
            <CrossCircledIcon />
            {translations.common.deleteFilters}
          </Button>
        )}
      </div>
    </Form>
  );
};
