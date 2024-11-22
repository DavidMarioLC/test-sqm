export function adapterPageHome(data) {
  return {
    video: data.video || "",
    title: data.title || "",
    subtitle: data.subtitle || "",
    sectionBanner: {
      image: data.sectionBanner.image || "/placeholder.svg",
      imageAlt: data.sectionBanner.imageAlt || "text alt",
    },
    sectionMeetUs: {
      title: data.sectionMeetUs[0].title || "",
      description: data.sectionMeetUs[0].description || "",
      buttonText: data.sectionMeetUs[0].buttonText || "",
      images:
        data.sectionMeetUs[0].images.length > 0
          ? data.sectionMeetUs[0].images.map((item) => ({
              id: item.id,
              image: item.image || "/placeholder.svg",
              imageAlt: item.imageAlt || "text alt",
            }))
          : Array.from({ length: 5 }).map((_, i) => ({
              id: i,
              image: "/placeholder.svg",
              imageAlt: "text alt",
            })),
    },
    sectionHistory: {
      title: data.sectionHistory[0].title || "",
      description: data.sectionHistory[0].description || "",
      buttonText: data.sectionHistory[0].buttonText || "",
      images:
        data.sectionHistory[0].images.length > 0
          ? data.sectionHistory[0].images.map((item) => ({
              id: item.id,
              image: item.image || "/placeholder.svg",
              imageAlt: item.imageAlt || "text alt",
            }))
          : Array.from({ length: 5 }).map((_, i) => ({
              id: i,
              image: "/placeholder.svg",
              imageAlt: "text alt",
            })),
    },
    sectionGlobalCompany: {
      title: data.sectionGlobalCompany[0].title || "",
      subtitle: data.sectionGlobalCompany[0].subtitle || "",
      description: data.sectionGlobalCompany[0].description || "",
      buttonText: data.sectionGlobalCompany[0].buttonText || "",
      image: data.sectionGlobalCompany[0].image || "/placeholder.svg",
      imageAlt: "text alt",
    },
  };
}

export function adapterPageHomeBrands(data) {
  return {
    sectionBrand: {
      title: data.title || "",
      items: data.items.map((item) => ({
        id: item.id,
        name: item.name || "",
        whiteLogo: item.whiteLogo || "/placeholder.svg",
        mediumImage: item.mediumImage || "/placeholder.svg",
        shortDescription: item.shortDescription || "",
        slug: item.slug,
      })),
    },
  };
}

export function adapterPageHomeSolutions(data) {
  const solutions = Object.entries(data.sectionSolutions)
    .slice(1)
    .map(([key, value], index) => ({ id: index, type: key, ...value }));

  return {
    sectionSolutions: {
      title: data.sectionSolutions.title || "",
      solutions: solutions.map((item) => ({
        id: item.id,
        parentSlug:
          item.type === "applications"
            ? "aplicacion"
            : item.type === "nutrients"
              ? "solucion-nutricional"
              : item.type === "efficiency"
                ? "alta-eficiencia"
                : "",
        title: item.title,
        description: item.description,
        items: item.items.map((item) => ({
          id: item.id,
          name: item.name,
          whiteLogo: item.whiteLogo,
          mediumImage: item.mediumImage,
          shortDescription: item.shortDescription,
          slug: item.slug,
        })),
      })),
    },
  };
  return {
    sectionSolutions: {
      title: data.sectionSolutions.title || "",
      applications: {
        title: data.sectionSolutions.applications.title || "",
        description: data.sectionSolutions.applications.description || "",
        items: data.sectionSolutions.applications.items.map((item) => ({
          id: item.id,
          name: item.name || "",
          whiteLogo: item.whiteLogo || "/placeholder.svg",
          mediumImage: item.mediumImage || "/placeholder.svg",
          shortDescription: item.shortDescription || "",
          slug: item.slug,
        })),
      },
      solutions: {
        title: data.sectionSolutions.nutrients.title || "",
        description: data.sectionSolutions.nutrients.description || "",
        items: data.sectionSolutions.nutrients.items.map((item) => ({
          id: item.id,
          name: item.name || "",
          whiteLogo: item.whiteLogo || "/placeholder.svg",
          mediumImage: item.mediumImage || "/placeholder.svg",
          shortDescription: item.shortDescription || "",
          slug: item.slug,
        })),
      },
      highEfficiency: {
        title: data.sectionSolutions.efficiency.title || "",
        description: data.sectionSolutions.efficiency.description || "",
        items: data.sectionSolutions.efficiency.items.map((item) => ({
          id: item.id,
          name: item.name || "",
          whiteLogo: item.whiteLogo || "/placeholder.svg",
          mediumImage: item.mediumImage || "/placeholder.svg",
          shortDescription: item.shortDescription || "",
          slug: item.slug,
        })),
      },
    },
  };
}

export function adapterPageHomeAgriculture(data) {
  return {
    sectionAgriculture: {
      title: data.sectionAgriculture.title || "",
      lastArticles: {
        title: data.sectionAgriculture.lastArticles.title || "",
        buttonText: data.sectionAgriculture.lastArticles.buttonText || "",
        items: data.sectionAgriculture.lastArticles.items.map((item) => ({
          id: item.id,
          image: item.mediumImage || "/placeholder.svg",
          imageAlt: item.mediumImageAlt || "text alt",
          title: item.title || "",
          slug: item.slug,
        })),
      },
      lastVideos: {
        title: data.sectionAgriculture.lastVideos.title || "",
        buttonText: data.sectionAgriculture.lastVideos.buttonText || "",
        items: data.sectionAgriculture.lastVideos.items.map((item) => ({
          id: item.id,
          image:
            item.mediumImage ||
            `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` ||
            "/placeholder.svg",
          imageAlt: item.mediumImageAlt || "text alt",
          title: item.title || "",
          slug: item.slug,
          videoId: item.videoId,
        })),
      },
    },
  };
}
