// fonts
import { font_museo_sans, font_montserrat } from "@/fonts";
//global CSS
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  fetchCountries,
  fetchFooter,
  fetchGeneralTranslations,
  fetchHeader,
  fetchLanguages,
} from "@/services/general";

import { GeneralTranslateProvider } from "@/providers/GeneralTranslateProvider";
import { getLanguageAnCountry } from "@/services/languageAndCountry";

export default async function LocaleLayout({ children }) {
  const { language, country } = await getLanguageAnCountry();
  const initialTranslations = await fetchGeneralTranslations(language);

  const query = {
    country: country,
    language: language,
  };

  const [headerData, languagesData, countriesData, footerData] =
    await Promise.all([
      fetchHeader(query),
      fetchLanguages(query),
      fetchCountries(query),
      fetchFooter(query),
    ]);

  const currentCountry = countriesData?.find((item) => item.code === country);

  return (
    <html lang={language} className={`${font_museo_sans} ${font_montserrat}`}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="SQM" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <GeneralTranslateProvider
          initialTranslations={initialTranslations}
          initialLanguage={language}
        >
          <Header
            data={headerData}
            countries={countriesData}
            languages={languagesData}
            currentCountry={currentCountry}
            currentLanguage={language}
          />
          {children}
          <Footer data={footerData} />
        </GeneralTranslateProvider>
      </body>
    </html>
  );
}
