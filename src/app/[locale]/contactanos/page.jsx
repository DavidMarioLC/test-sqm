import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { fetchContactPage, fetchMetadataContactPage } from "@/services/contact";
import { ContactForm } from "@/components/form";
import { fetchCountries } from "@/services/general";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };

  const metadata = await fetchMetadataContactPage(query);
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url,
      images: {
        url: metadata.shareImage,
        width: 800,
        height: 600,
      },
    },
  };
}

export default async function Page() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };

  const [content, countries] = await Promise.all([
    fetchContactPage(query),
    fetchCountries(query),
  ]);

  return (
    <main>
      <PageBanner
        title={content.title}
        description={content.subtitle}
        image={content.image}
        imageAlt={content.imageAlt}
      />
      <Container>
        <Breadcrumb />
        <div className="pb-20">
          <div className="text-center">
            <p className="mb-5 font-museosans text-lg font-medium">
              {content.informativeText}
            </p>
          </div>
          <div className="mx-auto max-w-[500px] px-5">
            <ContactForm countries={countries} />
          </div>
        </div>
      </Container>
    </main>
  );
}
