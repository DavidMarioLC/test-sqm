import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchNotFound } from "@/services/general";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export default async function NotFoundPage() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    language,
    country,
  };
  const content = await fetchNotFound(query);

  return (
    <div className="relative flex h-[550px] items-center justify-center text-center font-museosans">
      <img
        src={content.image}
        className="absolute -z-[2] h-full w-full object-cover"
      />
      <div>
        <h1 className="mb-8 text-[2.5rem] font-black text-sqm-blue">
          {content.text}
        </h1>
        <p className="mb-4 text-lg text-sqm-black">{content.paragraph01}</p>
        <p className="mb-8 text-lg text-sqm-black">{content.paragraph02}</p>
        <Button variant="secondary" asChild>
          <Link href="/">{content.buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}
