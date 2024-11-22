import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Download } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/breadcrumb";
import { Title } from "@/components/title";
import { Container } from "@/components/container";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CarouselArticles, CarouselVideos } from "@/components/carousels";
import { ProductCard } from "@/components/card";
import { ContentWP } from "@/components/contentWP";
import Link from "next/link";

import { ContactForm } from "../form";
import { fetchGeneralTranslations } from "@/services/general";

export const SingleProductTemplate = async ({
  contentSingle,
  parentSlug,
  countries,
  language,
}) => {
  const translations = await fetchGeneralTranslations(language);

  return (
    <main>
      {/* solution details */}
      <Container className="ps-4 sm:px-4">
        <Breadcrumb />
        {/* solution details */}
        <section className="flex flex-col items-center justify-center gap-16 py-5 pb-10 sm:gap-8 md:flex-row md:gap-16 md:pb-20">
          <figure className="flex-shrink-0">
            <Image
              src={contentSingle.image}
              alt={contentSingle.imageAlt}
              width={300}
              height={415}
            />
          </figure>
          <div className="self-start">
            <Title level={2} className="mb-5 text-4xl font-semibold">
              {contentSingle.name}
            </Title>
            <Tabs defaultValue="description">
              <ScrollArea className="-mx-4 w-screen pb-4 sm:w-auto md:mx-4 md:px-4">
                <TabsList className="flex justify-start px-0">
                  <TabsTrigger className="flex-1" value="description">
                    {contentSingle.details.description.title}
                  </TabsTrigger>
                  <TabsTrigger className="flex-1" value="specs">
                    {contentSingle.details.specs.title}
                  </TabsTrigger>
                  <TabsTrigger className="flex-1" value="files">
                    {" "}
                    {contentSingle.details.material.title}
                  </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>

              <TabsContent value="description" className="pt-0">
                {contentSingle.details.description.content ? (
                  <ContentWP
                    content={contentSingle.details.description.content}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-start">
                    <img src="/informationNotFound.svg" />
                    <p>
                      Lo sentimos aún no se ha añadido información para está
                      sección.
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="specs" className="pt-0">
                {contentSingle.details.specs.list.length > 0 ? (
                  <Table>
                    <TableBody>
                      {contentSingle.details.specs.list.map((item) => (
                        <TableRow key={item.id} className="even:bg-sqm-bg">
                          <TableCell className="font-medium">
                            {item.name}
                          </TableCell>
                          <TableCell className="text-right font-medium">
                            {item.value}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-start">
                    <img src="/informationNotFound.svg" />
                    <p>
                      Lo sentimos aún no se ha añadido información para está
                      sección.
                    </p>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="files" className="pt-0">
                {contentSingle.details.material.files.length > 0 ? (
                  <Table>
                    <TableBody>
                      {contentSingle.details.material.files.map((item) => (
                        <TableRow
                          className="flex justify-between"
                          key={item.id}
                        >
                          <TableCell className="font-medium">
                            {item.text}
                          </TableCell>
                          <TableCell className="font-medium">
                            <Button asChild variant="secondary">
                              <a
                                href={item.file}
                                download={true}
                                className="inline-flex gap-2"
                              >
                                {translations.common.download}
                                <Download size={16} />
                              </a>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-center md:flex-row md:text-start">
                    <img src="/informationNotFound.svg" />
                    <p>
                      Lo sentimos aún no se ha añadido información para está
                      sección.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        {/* related article */}
        {contentSingle.relatedArticles.length > 0 && (
          <section className="pb-10 md:pb-20">
            <Title level={2}>
              {translations.product.articleAbout}: {contentSingle.name}
            </Title>
            <CarouselArticles items={contentSingle.relatedArticles} />
          </section>
        )}

        {/* related videos */}
        {/* {contentSingle.relatedVideos.length > 0 && (
          <section className="pb-10 md:pb-20">
            <Title level={2}>
              {translations.product.videoAbout}: {contentSingle.name}
            </Title>
            <CarouselVideos items={contentSingle.relatedVideos} />
          </section>
        )} */}

        {/* related products */}
        {contentSingle.relatedProducts.length > 0 && (
          <Container className="px-5 py-10 md:px-0 md:py-20">
            <Title level={2}>{translations.product.solutionRelated}</Title>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {contentSingle.relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  parentSlug={parentSlug}
                  product={item}
                />
              ))}
            </div>
          </Container>
        )}

        {/* related testimonio */}
        {contentSingle.testimonials.length > 0 && (
          <section className="pb-10 md:pb-20">
            <Title level={2}>
              {translations.product.testimonies}: {contentSingle.name}
            </Title>
            <CarouselVideos items={contentSingle.testimonials} />
          </section>
        )}
      </Container>

      {/*  contact form */}
      <section className="bg-sqm-bg py-20 mb-20">
        <Container className="flex flex-col gap-8 px-5 md:flex-row md:justify-center md:px-0">
          <div className="">
            <div className="max-w-[400px]">
              <Title level={2}>{translations.solution.moreInformation}</Title>
              <p className="font-montserrat text-2xl font-black text-sqm-green">
                {translations.solution.contactus}
              </p>
            </div>
          </div>
          <ContactForm countries={countries} />
        </Container>
      </section>

      {/* <p className="text-center">
        <Button asChild>
          <Link href={`/${parentSlug}`}>{translations.solution.back}</Link>
        </Button>
      </p> */}
    </main>
  );
};
