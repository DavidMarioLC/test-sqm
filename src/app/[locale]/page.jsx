import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ImageBanner, VideoBanner } from "@/components/banner";
import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  CarouselArticles,
  CarouselBrands,
  CarouselVideos,
} from "@/components/carousels";
import {
  fetchHomePage,
  fetchHomePageAgriculture,
  fetchHomePageBrands,
  fetchHomePageSolutions,
  fetchMetadataHomePage,
} from "@/services/home";
import { cn } from "@/lib/utils";
import { getLanguageAnCountry } from "@/services/languageAndCountry";
import { Suspense } from "react";

const CarouselSolutions = dynamic(
  () => import("@/components/carousels").then((mod) => mod.CarouselSolutions),
  { ssr: false },
);

export async function generateMetadata() {
  const { language, country } = await getLanguageAnCountry();
  const query = {
    language: language,
    country: country,
  };

  const metadata = await fetchMetadataHomePage(query);
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

export default async function HomePage() {
  const { language, country } = await getLanguageAnCountry();

  const query = {
    language: language,
    country: country,
  };

  const homePage = await fetchHomePage(query);

  return (
    <div>
      <VideoBanner
        video={homePage.video}
        title={homePage.title}
        description={homePage.subtitle}
      />

      {/* marcas */}
      <Suspense fallback={<p>Loading...</p>}>
        <SectionBrands query={query} />
      </Suspense>

      {/* tabs soluciones */}
      <Suspense fallback={<p>Loading...</p>}>
        <SectionSolutions query={query} />
      </Suspense>

      {/* banner */}
      <ImageBanner
        image={homePage.sectionBanner.image}
        imageAlt={homePage.sectionBanner.imageAlt}
      />

      {/* agricultura inteligente */}
      <Suspense fallback={<p>Loading...</p>}>
        <SectionAgriculture query={query} />
      </Suspense>

      {/* conocenos */}
      <Container className="pb-16 md:pb-32">
        {/* mobile */}
        <div className="bg-sqm-blue px-5 pb-20 pt-5 md:hidden">
          <Title
            level={2}
            className="text-center font-museosans text-[2rem] font-black text-sqm-white"
          >
            {homePage.sectionMeetUs.title}
          </Title>
          <Image
            src={
              homePage.sectionMeetUs.images[
                homePage.sectionMeetUs.images.length - 1
              ]?.image
            }
            alt={
              homePage.sectionMeetUs.images[
                homePage.sectionMeetUs.images.length - 1
              ]?.imageAlt
            }
            width={350}
            height={240}
            className="h-[240px] w-full rounded-t-xl rounded-br-xl object-cover"
          />
          <p className="pb-10 pt-20 text-justify font-montserrat text-base text-sqm-white">
            {homePage.sectionMeetUs.description}
          </p>
          <p className="flex flex-col">
            <Button asChild variant="secondary">
              <Link href={`/sobre-nosotros`}>
                {homePage.sectionMeetUs.buttonText}
              </Link>
            </Button>
          </p>
        </div>
        {/* desktop */}
        <div className="hidden md:block">
          <div className="flex justify-between gap-[200px]">
            <div>
              <Title level={2} className="">
                {homePage.sectionMeetUs.title}
              </Title>
            </div>
            <div className="bg-sqm-blue p-16 font-montserrat text-base text-sqm-white">
              <p className="text-justify">
                {homePage.sectionMeetUs.description}
              </p>
              <p className="flex justify-center pt-10">
                <Button asChild variant="secondary">
                  <Link href={`/conocenos`}>
                    {homePage.sectionMeetUs.buttonText}
                  </Link>
                </Button>
              </p>
            </div>
          </div>
          {/* images x 5 */}
          <div className="-mt-10 flex">
            <div className="grid flex-shrink-0 grid-cols-2 grid-rows-2">
              {homePage.sectionMeetUs.images.map((item, index) => {
                if (index <= 2) {
                  return (
                    <Image
                      key={item.id}
                      src={item.image}
                      alt={item.imageAlt}
                      width={280}
                      height={280}
                      className={cn(
                        "h-[280px] w-[280px] rounded-t-xl rounded-br-xl object-cover",
                        index === 1 && "col-start-2 col-end-3",
                        index === 2 &&
                          "col-start-2 col-end-3 row-start-2 row-end-3",
                      )}
                    />
                  );
                }
              })}
            </div>
            <div className="flex pt-8">
              <Image
                src={
                  homePage.sectionMeetUs.images[3]?.image
                    ? homePage.sectionMeetUs.images[3]?.image
                    : "/placeholder.svg"
                }
                alt={homePage.sectionMeetUs.images[3]?.imageAlt}
                width={564}
                height={331}
                className="h-[331px] rounded-t-xl rounded-br-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* history */}
      <Container className="pb-16 md:pb-32">
        {/* mobile */}
        <div className="bg-[#497637] px-5 pb-20 pt-5 md:hidden">
          <Title
            level={2}
            className="text-center font-museosans text-[2rem] font-black text-sqm-white"
          >
            {homePage.sectionHistory.title}
          </Title>
          <Image
            src={
              homePage.sectionHistory.images[
                homePage.sectionHistory.images.length - 1
              ].image
            }
            alt={
              homePage.sectionHistory.images[
                homePage.sectionHistory.images.length - 1
              ].imageAlt
            }
            width={350}
            height={240}
            className="h-[240px] w-full rounded-t-xl rounded-br-xl object-cover"
          />
          <p className="pb-10 pt-20 text-justify font-montserrat text-base text-sqm-white">
            {homePage.sectionHistory.description}
          </p>
          <p className="flex flex-col">
            <Button asChild>
              <Link href={`/nuestra-historia`}>
                {homePage.sectionHistory.buttonText}
              </Link>
            </Button>
          </p>
        </div>
        {/* desktop */}
        <div className="hidden md:block">
          <div className="flex justify-between gap-[200px]">
            <div>
              <Title level={2} className="">
                {homePage.sectionHistory.title}
              </Title>
            </div>
            <div className="bg-[#497637] p-16 font-montserrat text-base text-sqm-white">
              <p className="text-justify">
                {homePage.sectionHistory.description}
              </p>
              <p className="flex justify-center pt-10">
                <Button asChild>
                  <Link href={`/nuestra-historia`}>
                    {homePage.sectionHistory.buttonText}
                  </Link>
                </Button>
              </p>
            </div>
          </div>
          {/* images x 5 */}
          <div className="-mt-8 flex">
            <div className="grid grid-flow-col grid-cols-2 grid-rows-2">
              {homePage.sectionHistory.images.map((item, index) => {
                if (item.id <= 4) {
                  return (
                    <Image
                      key={item.id}
                      src={item.image}
                      alt={item.imageAlt}
                      width={280}
                      height={280}
                      className="h-[280px] w-[280px] rounded-t-xl rounded-br-xl object-cover"
                    />
                  );
                }
              })}
            </div>
            <div className="flex items-center justify-start">
              {homePage.sectionHistory.images.length === 5 && (
                <Image
                  src={
                    homePage.sectionHistory.images[
                      homePage.sectionHistory.images.length - 1
                    ].image
                  }
                  alt={
                    homePage.sectionHistory.images[
                      homePage.sectionHistory.images.length - 1
                    ].imageAlt
                  }
                  width={470}
                  height={331}
                  className="h-[331px] rounded-t-xl rounded-br-xl object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* sqm global*/}
      <Container className="px-5 pb-20 md:px-0 md:py-20">
        <section className="flex flex-col gap-10 md:flex-row md:items-center">
          <figure className="md:w-1/2">
            <img
              src={homePage.sectionGlobalCompany.image}
              alt={homePage.sectionGlobalCompany.imageAlt || "text alt"}
              width={350}
              height={180}
              className="h-[180px] w-full md:h-[280px]"
            />
          </figure>
          <div className="flex flex-col md:w-1/2 md:items-start">
            <Title
              level={2}
              className="mb-0 font-museosans text-2xl font-black text-sqm-green"
            >
              {homePage.sectionGlobalCompany.title}
            </Title>
            <Title level={3} className="mb-0 font-museosans text-lg font-black">
              {homePage.sectionGlobalCompany.subtitle}
            </Title>
            <div className="my-6 font-montserrat text-base text-sqm-black">
              <p>{homePage.sectionGlobalCompany.description}</p>
            </div>
            <Button asChild>
              <Link href={"/"}>{homePage.sectionGlobalCompany.buttonText}</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}

// section brands
async function SectionBrands({query}) {
  const homePageBrands = await fetchHomePageBrands(query);
  return (
    <Container className="ps-5 md:ps-0">
      <Title
        level={2}
        className="mb-8 text-center text-2xl md:mb-16 md:text-[2rem]"
      >
        {homePageBrands.sectionBrand.title}
      </Title>
      {homePageBrands.sectionBrand.items.length > 0 && (
        <CarouselBrands items={homePageBrands.sectionBrand.items} />
      )}
    </Container>
  );
}
// section solutions
async function SectionSolutions({query}) {
  const homePageSolutions = await fetchHomePageSolutions(query);
  return (
    <section className="relative bg-sqm-bg pt-[100px] md:pt-[180px]">
      <img
        src="/decoration/decoration-03.svg"
        className="absolute left-0 right-0 top-0 z-[5] w-full"
        alt="texto descriptivo de la imagen"
        aria-hidden="true"
      />
      <Container className="px-5">
        <Title
          level={2}
          className="mb-8 text-center text-2xl md:mb-16 md:text-[2rem]"
        >
          {homePageSolutions.sectionSolutions.title}
        </Title>
        <Tabs defaultValue={0} className="w-full">
          <TabsList className="flex justify-center md:gap-6">
            {homePageSolutions.sectionSolutions.solutions.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="inline-flex flex-wrap whitespace-normal text-sm data-[state=active]:border-sqm-green md:px-16 md:text-lg"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {homePageSolutions.sectionSolutions.solutions.map((item) => (
            <TabsContent key={item.id} value={item.id} className="px-0 py-6">
              <p>{item.description}</p>
              <CarouselSolutions
                parentSlug={item.parentSlug}
                items={item.items}
              />
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
}
// section agriculture
async function SectionAgriculture({query}) {
  const homePageAgriculture = await fetchHomePageAgriculture(query);
  return (
    <section className="relative bg-sqm-bg pb-20 pt-20 md:pb-[200px]">
      <Container>
        <Title level={2} className="mb-8 text-center text-2xl md:text-[2rem]">
          {homePageAgriculture.sectionAgriculture.title}
        </Title>
        <Tabs defaultValue="last-articles" className="w-full">
          <TabsList className="flex md:gap-6">
            <TabsTrigger
              className="inline-flex flex-wrap whitespace-normal text-sm data-[state=active]:border-sqm-green md:text-lg"
              value="last-articles"
            >
              {homePageAgriculture.sectionAgriculture.lastArticles.title}
            </TabsTrigger>
            <TabsTrigger
              className="inline-flex flex-wrap whitespace-normal text-sm data-[state=active]:border-sqm-green md:text-lg"
              value="last-videos"
            >
              {homePageAgriculture.sectionAgriculture.lastVideos.title}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="last-articles" className="px-0 py-6 md:py-10">
            <CarouselArticles
              items={homePageAgriculture.sectionAgriculture.lastArticles.items}
            />
            <p className="flex flex-col px-5 pt-16 text-center md:block md:pt-20">
              <Button asChild>
                <Link href="/">
                  {
                    homePageAgriculture.sectionAgriculture.lastArticles
                      .buttonText
                  }
                </Link>
              </Button>
            </p>
          </TabsContent>
          <TabsContent value="last-videos" className="px-0 py-6 md:py-10">
            <CarouselVideos
              items={homePageAgriculture.sectionAgriculture.lastVideos.items}
            />
            <p className="flex flex-col px-5 text-center md:block md:pt-20">
              <Button asChild>
                <Link href="/">
                  {homePageAgriculture.sectionAgriculture.lastVideos.buttonText}
                </Link>
              </Button>
            </p>
          </TabsContent>
        </Tabs>
      </Container>
      <img
        src="/decoration/decoration-05.svg"
        className="absolute bottom-0 left-0 right-0 z-[5] hidden w-full md:block"
        alt="texto descriptivo de la imagen"
        aria-hidden="true"
      />
    </section>
  );
}
