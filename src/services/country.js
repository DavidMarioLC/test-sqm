"use server";
import { cookies } from "next/headers";

export async function setUserCountry(country) {
  cookies().set("country", country);
}
