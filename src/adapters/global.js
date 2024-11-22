export function metadataAdapter(data) {
  return {
    title: data.title || "",
    description: data.description || "",
    url: data.url || "",
    shareImage: data.shareImage || "",
    keywords: data.Keywords || "",
  };
}

export function headerAdapter(data) {
  return {
    largeLogo: data.largeLogo || "",
    smallLogo: data.smallLogo || "",
    mainMenuItems: data.mainMenuItems?.map((item) => ({
      id: item.id,
      variant: item.variant,
      title: item.title,
      banner: item?.image || "",
      slug: item?.slug,
      sections: {
        links: item?.sections?.links?.map((item) => ({
          id: item.id,
          variant: item.variant,
          heading: item.heading,
          title: item.title,
          image: item.image || "",
          banner: item?.banner || "",
          shortDescription: item.shortDescription,
          slug: item.slug,
          list: item?.list?.map((item) => ({
            id: item?.id,
            name: item?.title,
            typeId: item?.typeId,
            whiteLogo: item?.whiteLogo || "",
            mediumImage: item?.mediumImage || "",
            promotionImage: item.promotionImage || "",
            shortDescription: item?.shortDescription,
            slug: item?.slug,
          })),
        })),
        banner: item?.image || "",
      },
    })),
  };
}

export function footerAdapter(data) {
  return {
    salitreText: data.salitreText,
    logo: data.logo,
    copyright: data.copyright,
    socials: data.socials.map((item) => ({
      id: item.id,
      name: item.name,
      link: item.link,
    })),
    links: data.links.map((item) => ({
      id: item.id,
      text: item.text,
      target: item.target,
      link: item.link,
    })),
  };
}

export function notFoundAdapter(data) {
  return {
    text: data.text,
    paragraph01: data.paragraph01,
    paragraph02: data.paragraph02,
    buttonText: data.buttonText,
    image: data.bannerImage,
    imageAlt: data.bannerImageAlt,
  };
}

export function languagesAdapter(data) {
  return data[0].languages.map((item) => ({
    id: item.id,
    native_name: item.native_name,
    translated_name: item.translated_name,
    code: item.code,
  }));
}

export function countriesAdapter(data) {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    nameTranslated: item.nameTranslated,
    image: item.image,
    code: item.code,
  }));
}

export function globalAdapter(data) {
  return {
    common: {
      readMore: data.common[0].readMore,
      keyword: data.common[0].keyword,
      selectApplication: data.common[0].selectApplication,
      selectSolution: data.common[0].selectSolution,
      selectEfficiency: data.common[0].selectEfficiency,
      selectBrand: data.common[0].selectBrand,
      selectNutrient: data.common[0].selectNutrient,
      selectCrop: data.common[0].selectCrop,
      filter: data.common[0].filter,
      date: data.common[0].date,
      deleteFilters: data.common[0].deleteFilters,
      state: data.common[0].state,
      author: data.common[0].author,
      download: data.common[0].download,
      downloadStudy: data.common[0].downloadStudy,
      relatedVideos: data.common[0].relatedVideos,
      relatedArticles: data.common[0].relatedArticles,
      relatedProducts: data.common[0].relatedProducts,
      relatedNews: data.common[0].relatedNews,
      informationNotFound: data.common[0].informationNotFound,
    },
    form: {
      namesValidation: data.forms[0].namesValidation,
      lastnamesValidation: data.forms[0].lastnamesValidation,
      directionValidation: data.forms[0].directionValidation,
      businessValidation: data.forms[0].businessValidation,
      ocupationValidation: data.forms[0].ocupationValidation,
      countryValidation: data.forms[0].countryValidation,
      provincieValidation: data.forms[0].provincieValidation,
      messageValidation: data.forms[0].messageValidation,
      ocupationPlaceholder: data.forms[0].ocupationPlaceholder,
      namesPlaceholder: data.forms[0].namesPlaceholder,
      lastnamePlaceholder: data.forms[0].lastnamePlaceholder,
      emailPlaceholder: data.forms[0].emailPlaceholder,
      businessPlaceholder: data.forms[0].businessPlaceholder,
      paisPlaceholder: data.forms[0].paisPlaceholder,
      provincePlaceholder: data.forms[0].provincePlaceholder,
      messagePlaceholder: data.forms[0].messagePlaceholder,
      send: data.forms[0].send,
      rol: data.forms[0].rol,
      sending: data.forms[0].sending,
    },
    filters: {
      newsFilterLabel: data.filtros[0].newsFilterLabel,
      articleFilterLabel: data.filtros[0].articleFilterLabel,
      videoFilterLabel: data.filtros[0].videoFilterLabel,
      solutionFilterLabel: data.filtros[0].solutionFilterLabel,
    },
    search: {
      cancelar: data.busqueda[0].cancelar,
      searchNotFound: data.busqueda[0].searchNotFound,
      trySearchAgain: data.busqueda[0].trySearchAgain,
      searchPlaceholder: data.busqueda[0].searchPlaceholder,
      searchUbication: data.busqueda[0].searchUbication,
    },
    solution: {
      title: data.solucion[0].titleSolution,
      articleTitle: data.solucion[0].articleTitle,
      videoTitle: data.solucion[0].videoTitle,
      comerce: data.solucion[0].comerce,
      contact: data.solucion[0].contact,
      viewSolution: data.solucion[0].viewSolution,
      moreInformation: data.solucion[0].moreInformation,
      contactus: data.solucion[0].contactus,
      back: data.solucion[0].back,
    },
    product: {
      articleAbout: data.product[0].articleAbout,
      videoAbout: data.product[0].videoAbout,
      testimonies: data.product[0].testimonies,
      solutionRelated: data.product[0].solutionRelated,
    },
    languageAndCountry: {
      selectUbicationTitle: data.lenguaje[0].selectUbicationTitle,
      selectCountryTitle: data.lenguaje[0].selectCountryTitle,
      selectCountry: data.lenguaje[0].selectCountry,
      selectLanguage: data.lenguaje[0].selectLanguage,
      select: data.lenguaje[0].select,
    },
  };
}
