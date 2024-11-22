import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["es", "en"],
  // Used when no locale matches
  defaultLocale: "es",
  // always use a locale prefix example: /es
  localePrefix: "never",
  localeCookie: {
    name: "language",
  },
  pathnames: {
    "/": "/",
    "/articulos": {
      es: "/articulos",
      en: "/articles",
    },
    "/articulos/[slug]": {
      es: "/articulos/[slug]",
      en: "/articles/[slug]",
    },
    "/conocenos": {
      es: "/conocenos",
      en: "/about-us",
    },
    "/distribuidores": {
      es: "/distribuidores",
      en: "/distribuitors",
    },
    "/noticias": {
      es: "/noticias",
      en: "/news",
    },
    "/noticias/[slug]": {
      es: "/noticias/[slug]",
      en: "/news/[slug]",
    },
    "/nuestra-historia": {
      es: "/nuestra-historia",
      en: "/our-history",
    },
    "/search": {
      es: "/search",
      en: "/search",
    },
    "/sostenibilidad/agricultura-sostenible": {
      es: "/sostenibilidad/agricultura-sostenible",
      en: "/sustainability/sustainable-agriculture",
    },
    "/sostenibilidad/sostenibilidad-sqm": {
      es: "/sostenibilidad/sostenibilidad-sqm",
      en: "/sustainability/sustainability-sqm",
    },
    "/sostenibilidad/certificaciones": {
      es: "/sostenibilidad/certificaciones",
      en: "/sustainability/certifications",
    },
    "/videos": {
      es: "/videos",
      en: "/videos",
    },
    "/contactanos": {
      es: "/contactanos",
      en: "/contact-us",
    },
    "/alta-eficiencia/[highEfficiencySlug]": {
      es: "/alta-eficiencia/[highEfficiencySlug]",
      en: "/high-efficiency/[highEfficiencySlug]",
    },
    "/alta-eficiencia/[highEfficiencySlug]/[productSlug]": {
      es: "/alta-eficiencia/[highEfficiencySlug]/[productSlug]",
      en: "/high-efficiency/[highEfficiencySlug]/[productSlug]",
    },
    "/aplicacion/[applicationSlug]": {
      es: "/aplicacion/[applicationSlug]",
      en: "/application/[applicationSlug]",
    },
    "/aplicacion/[applicationSlug]/[productSlug]": {
      es: "/aplicacion/[applicationSlug]/[productSlug]",
      en: "/application/[applicationSlug]/[productSlug]",
    },
    "/marca/[brandSlug]": {
      es: "/marca/[brandSlug]",
      en: "/brand/[brandSlug]",
    },
    "/marca/[brandSlug]/[productSlug]": {
      es: "/marca/[brandSlug]/[productSlug]",
      en: "/brand/[brandSlug]/[productSlug]",
    },
    "/solucion-nutricional/[nutritionalSolutionSlug]": {
      es: "/solucion-nutricional/[nutritionalSolutionSlug]",
      en: "/nutritional-solution/[nutritionalSolutionSlug]",
    },
    "/solucion-nutricional/[nutritionalSolutionSlug]/[productSlug]": {
      es: "/solucion-nutricional/[nutritionalSolutionSlug]/[productSlug]",
      en: "/nutritional-solution/[nutritionalSolutionSlug]/[productSlug]",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
