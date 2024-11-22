export const dynamic = "force-dynamic";
import { PageBanner } from "@/components/banner";
import { Container } from "@/components/container";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContentWP } from "@/components/contentWP";
import { Title } from "@/components/title";
import { CarouselImages } from "@/components/carousels";
import { fetchHistoryPage, fetchMetadataHistoryPage } from "@/services/history";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export async function generateMetadata({ params }) {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    language,
    country,
  };
  const metadata = await fetchMetadataHistoryPage(query);
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
    language,
    country,
  };
  const content = await fetchHistoryPage(query);

  return (
    <div>
      <PageBanner
        title={content.title}
        image={content.image}
        imageAlt={content.imageAlt}
        description={content.subtitle}
      />
      <Container className="px-5 py-10 lg:px-0">
        <Breadcrumb />
        <ContentWP content={content.description} />
        {/* timeline */}
        <div className="relative flex flex-col gap-10 py-16 md:block">
          <div className="absolute left-14 top-16 -z-[1] h-[calc(100%-164px)] w-[4px] bg-sqm-blue md:left-1/2 lg:h-[calc(100%-264px)]"></div>
          {/* items */}
          {content.timeline.map((item, index) => (
            <div key={item.id} className="parent-timeline-item">
              {item.initialYearRange && (
                <section className="grid grid-cols-[450px_140px_132px]">
                  <div></div>
                  <p className="hidden bg-sqm-white text-center font-museosans text-[2rem] font-black text-sqm-blue lg:block">
                    {item.initialYearRange}
                  </p>
                  <div></div>
                </section>
              )}
              <section className="child-timeline-item-container flex gap-6 md:my-20 md:gap-[60px]">
                <div className="child-timeline-item flex flex-shrink-0 flex-col items-center justify-start gap-[10px] lg:flex-row lg:gap-[60px]">
                  <p className="bg-sqm-white font-museosans text-[2rem] font-medium text-sqm-blue lg:order-2">
                    {item.eventYear}
                  </p>
                  <img
                    src={item.image}
                    className="h-[120px] w-[120px] rounded-full border object-cover md:h-[140px] md:w-[140px]"
                    width={140}
                    heigh={140}
                    alt=""
                  />
                </div>
                <article className="max-w-[390px] rounded-t-xl rounded-br-xl bg-sqm-bg p-6">
                  <Title
                    level={3}
                    className="mb-3 font-museosans text-2xl font-black"
                  >
                    {item.eventDetail.name}
                  </Title>
                  <p className="font-montserrat text-sqm-gray-dark">
                    {item.eventDetail.description}
                  </p>
                </article>
              </section>
            </div>
          ))}
        </div>

        <ContentWP content={content.extraInfo} />
        {/* carousel */}
        <CarouselImages items={content.carouselImages} />
      </Container>
    </div>
  );
}
