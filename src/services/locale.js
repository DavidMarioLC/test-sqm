"use server";
import { cookies } from "next/headers";

export async function setUserLocale(locale) {
  cookies().set("language", locale);
}
