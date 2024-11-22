import { fetchCountryByIp } from "@/services/general";
import { cookies } from "next/headers";

export async function getLanguageAnCountry() {
  const cookieStore = cookies();
  const userCountry = await fetchCountryByIp();

  const language = cookieStore.get("language")?.value || "es";
  const country = cookieStore.get("country")?.value || userCountry;

  return { language, country };
}
