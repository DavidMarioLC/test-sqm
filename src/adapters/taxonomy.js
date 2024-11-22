export function adapterSinglePageTaxonomy(data) {
  return {
    title: data.name || "Title",
    image: data.bannerImage || "/placeholder.svg",
    imageAlt: data.bannerImageAlt || "text alt",
    description: data.largeDescription || "description",
    logo: data.colorLogo || "/placeholder.svg",
    logoAlt: "text alt",
    slug: data.slug,
    data:
      data.data.map((item) => ({
        id: item.id,
        image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
        imageAlt: item.imageAlt,
        name: item.title,
        slug: item.slug,
      })) || [],
    pagination: {
      currentPage: data.pagination[0].currentPage,
      limit: data.pagination[0].limit,
      total: data.pagination[0].total,
      totalPages: data.pagination[0].totalPages,
    },
    relatedArticles:
      data?.relatedArticles?.map((item) => ({
        id: item.id,
        image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
        imageAlt: item.imageAlt,
        title: item.title,
        slug: item.slug,
      })) || [],
    // relatedVideos:
    //   data?.relatedvideos?.map((item) => ({
    //     id: item.id,
    //     image:
    //       item.mediumImage ||
    //       `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` ||
    //       "/placeholder.svg",
    //     videoId: item.videoId,
    //     imageAlt: item.imageAlt,
    //     title: item.title,
    //     slug: item.slug,
    //   })) || [],
  };
}

export function adapterSingleProduct(data) {
  return {
    name: data[0]?.name || "Product name",
    image: data[0]?.image || "/placeholder.svg",
    imageAlt: data[0].imageAlt || "text alt",
    slug: data[0].slug,
    details: {
      description: {
        title: data[0].details.description.title,
        content: data[0].details.description.content,
      },
      specs: {
        title: data[0].specs.title,
        list: data[0].specs.list.map((item) => ({
          id: item.id,
          name: item.name,
          value: item.value,
        })),
      },
      material: {
        title: data[0].material.title,
        files: data[0].material.files.map((item) => ({
          id: item.id,
          text: item.text,
          file: item.file,
        })),
      },
    },
    relatedArticles:
      data[0].articles?.map((item) => ({
        id: item.id,
        image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
        imageAlt: item.imageAlt,
        title: item.title,
        slug: item.slug,
      })) || [],
    relatedVideos:
      data[0].videos?.map((item) => ({
        id: item.id,
        image:
          item.mediumImage ||
          `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` ||
          "/placeholder.svg",
        imageAlt: item.imageAlt,
        title: item.title,
        slug: item.slug,
        videoId: item.videoId,
      })) || [],
    relatedProducts: data[0].relatedProducts.map((item) => ({
      id: item.id,
      image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
      imageAlt: item.imageAlt,
      name: item.title,
      slug: item.slug,
    })),
    testimonials:
      data[0].testimonials?.map((item) => ({
        id: item.id,
        title: item.title,
        videoId: item.videoId,
        type: item.type,
        image:
          item.mediumImage ||
          `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` ||
          "/placeholder.svg",
        imageAlt: item.imageAlt,
      })) || [],
  };
}
