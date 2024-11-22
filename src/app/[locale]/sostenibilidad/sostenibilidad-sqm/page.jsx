export const dynamic = "force-dynamic";
import { PageBanner } from "@/components/banner";
import { Breadcrumb } from "@/components/breadcrumb";
import { Container } from "@/components/container";
import { ContentWP } from "@/components/contentWP";
import { Title } from "@/components/title";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { fetchGeneralTranslations } from "@/services/general";
import {
  fetchMetadataSustainabilityPage,
  fetchSustainabilityPage,
} from "@/services/sustainability";

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    country: country,
    language: language,
  };
  const metadata = await fetchMetadataSustainabilityPage(query);

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
  const content = await fetchSustainabilityPage(query);

  const translations = await fetchGeneralTranslations(language);

  return (
    <div>
      <PageBanner
        title={content.title}
        image={content.image}
        imageAlt={content.imageAlt}
        description={content.subtitle}
      />
      {/* content wp */}
      <Container className="px-5 md:px-0">
        <Breadcrumb />
        <div className="pt-10 md:pb-20">
          <ContentWP content={content.content} />
        </div>
      </Container>
      {/* sections */}
      {content.sections.map((item) =>
        item.id === 1 ? (
          <section
            key={item.id}
            className="relative bg-sqm-bg pb-[150px] pt-[100px] md:pb-[300px] md:pt-[200px]"
          >
            <img
              src="/decoration/decoration-01.svg"
              className="absolute left-0 right-0 top-0 z-[5] w-full"
              alt=""
              aria-hidden="true"
            />
            <Container className="px-5 md:px-0">
              <Title
                level={2}
                className="mx-auto mb-10 text-center font-museosans text-[2rem] font-black text-sqm-green-dark"
              >
                {item.title}
              </Title>
              <p className="mb-4 text-justify">{item.description}</p>
              <div className="mb-16 font-montserrat">
                <h3 className="mb-4 text-base font-semibold">
                  {item.listTitle}
                </h3>
                <ul className="flex list-disc flex-col gap-2 ps-4">
                  {item.listItems.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-[30px] md:grid-cols-3 md:gap-[75px] lg:grid-cols-4">
                {item.logos.map((item) => (
                  <figure key={item.id} className="flex flex-col gap-[20px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-t-xl rounded-br-xl"
                    />
                    <figcaption className="text-center font-museosans text-2xl font-medium">
                      {item.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Container>
            <img
              src="/decoration/decoration-02.svg"
              className="absolute bottom-0 left-0 right-0 z-[5] w-full"
              alt=""
              aria-hidden="true"
            />
          </section>
        ) : (
          <section key={item.id} className="py-20">
            <Container className="px-5 md:px-0">
              <Title
                level={2}
                className="mx-auto mb-10 text-center font-museosans text-[2rem] font-black text-sqm-green-dark"
              >
                {item.title}
              </Title>
              <p className="mb-4 text-justify">{item.description}</p>
              <div className="mb-16 font-montserrat">
                <h3 className="mb-4 text-base font-semibold">
                  {item.listTitle}
                </h3>
                <ul className="flex list-disc flex-col gap-2 ps-4">
                  {item.listItems.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-[30px] md:grid-cols-3 md:gap-[75px] lg:grid-cols-4">
                {item.logos.map((item) => (
                  <figure key={item.id} className="flex flex-col gap-[20px]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-t-xl rounded-br-xl"
                    />
                    <figcaption className="text-center font-museosans text-2xl font-medium">
                      {item.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>
        ),
      )}

      {/* section 02 */}
    </div>
  );
}
