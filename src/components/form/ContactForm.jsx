"use client";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTranslations } from "@/providers/GeneralTranslateProvider";

export const ContactForm = ({ countries }) => {
  const { translations } = useTranslations();

  const FormSchema = z
    .object({
      names: z.string().min(1, { message: translations.form.namesValidation }),
      lastname: z
        .string()
        .min(1, { message: translations.form.lastnamesValidation }),
      email: z
        .string()
        .email({ message: translations.form.directionValidation }),
      business: z
        .string()
        .min(1, { message: translations.form.businessValidation }),
      ocupation: z
        .string()
        .min(1, { message: translations.form.ocupationValidation }),
      country: z
        .string()
        .min(1, { message: translations.form.countryValidation }),
      province: z
        .string()
        .min(1, { message: translations.form.provincieValidation }),
      message: z
        .string()
        .min(1, { message: translations.form.messageValidation }),
    })
    .partial();

  const form = useForm({
    defaultValues: {
      names: "",
      lastname: "",
      email: "",
      business: "",
      ocupation: "",
      country: "",
      province: "",
      message: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const [isSending, setSending] = React.useState(false);

  async function onSubmit(data) {
    setSending(true);
    const formData = new FormData();
    formData.append("names", data.names);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("business", data.business);
    formData.append("ocupation", data.ocupation);
    formData.append("country", data.country);
    formData.append("province", data.province);
    formData.append("message", data.message);

    const URL_API = process.env.NEXT_PUBLIC_SQM_API_URL;
    const PATH = "/contact/send-mail";

    const response = await fetch(`${URL_API}${PATH}`, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();

    if (json.status === "mail_sent") {
      onReset();
      setSending(false);
      toast.success(json.message);
    }
  }

  function onReset() {
    form.reset({
      names: "",
      lastname: "",
      email: "",
      business: "",
      ocupation: "",
      country: "",
      province: "",
      message: "",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="names"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.form.namesPlaceholder}</FormLabel>
              <FormControl>
                <Input
                  placeholder={translations.form.namesPlaceholder}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.form.lastnamePlaceholder}</FormLabel>
              <FormControl>
                <Input
                  placeholder={translations.form.lastnamePlaceholder}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.form.emailPlaceholder}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={translations.form.emailPlaceholder}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="business"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.form.businessPlaceholder}</FormLabel>
              <FormControl>
                <Input
                  placeholder={translations.form.businessPlaceholder}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ocupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.form.ocupationPlaceholder}</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={translations.form.ocupationPlaceholder}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {translations.form.rol.map((item, i) => (
                      <SelectItem key={item + i} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{translations.form.paisPlaceholder}</FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={translations.form.paisPlaceholder}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((item, i) => (
                      <SelectItem key={item.id} value={item.code}>
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
        <FormField
          control={form.control}
          name="province"
          render={({ field }) => (
            <FormItem className="md:col-start-1 md:col-end-3">
              <FormLabel>{translations.form.provincePlaceholder}</FormLabel>
              <FormControl>
                <Input
                  placeholder={translations.form.provincePlaceholder}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-start-1 md:col-end-3">
              <FormLabel>{translations.form.messagePlaceholder}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={translations.form.messagePlaceholder}
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  className="h-[100px] rounded-md border border-sqm-gray-dark font-montserrat text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isSending ? (
          <Button variant="secondary" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {translations.form.sending}
          </Button>
        ) : (
          <Button
            className="md:max-w-[100px]"
            type="submit"
            variant="secondary"
          >
            {translations.form.send}
          </Button>
        )}
      </form>
      <Toaster position="bottom-center" />
    </Form>
  );
};
