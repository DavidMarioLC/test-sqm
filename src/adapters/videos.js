export function adapterPageVideos(data) {
  return {
    title: data.title,
    description: data.subtitle,
    image: data.bannerImage,
    imageAlt: data.bannerImageAlt,
  };
}

export function adapterVideos(data) {
  return {
    data: data.data.map((item) => ({
      id: item.id,
      image:
        item.mediumImage ||
        `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` ||
        "/placeholder.svg",
      videoId: item.videoId,
      imageAlt: item.imageAlt,
      title: item.title,
      slug: item.slug,
    })),
    pagination: {
      currentPage: data.pagination[0].currentPage,
      limit: data.pagination[0].limit,
      total: data.pagination[0].total,
      totalPages: data.pagination[0].totalPages,
    },
  };
}

export function adapterVideosTotalPages(data) {
  return {
    totalPages: data.totalPages,
  };
}

export function adapterSinglePageVideos(data) {
  return {
    id: data[0].id,
    image: data[0].largeImage,
    imageAlt: data[0].imageAlt,
    title: data[0].title,
    slug: data[0].slug,
    tags: data[0].tags,
    videoId: data[0].videoId,
    content: data[0].content,
    relatedArticles: data[0].relatedArticles.map((item) => ({
      id: item.id,
      image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
      imageAlt: item.imageAlt,
      title: item.title,
      slug: item.slug,
    })),
    relatedVideos: data[0].relatedvideos.map((item) => ({
      id: item.id,
      image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
      imageAlt: item.imageAlt,
      title: item.title,
      slug: item.slug,
    })),
    relatedProducts: data[0].relatedProducts.map((item) => ({
      id: item.id,
      image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
      imageAlt: item.imageAlt,
      name: item.title,
      slug: item.slug,
    })),
  };
}
