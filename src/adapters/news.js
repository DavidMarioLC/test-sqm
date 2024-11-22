export function adapterPageNews(data) {
  return {
    title: data.title,
    description: data.subtitle,
    image: data.bannerImage,
    imageAlt: data.bannerImageAlt,
  };
}

export function adapterSinglePageNews(data) {
  return {
    id: data[0].id,
    title: data[0].title,
    date: data[0].date,
    image: data[0].largeImage ? data[0].largeImage : "/placeholder.svg",
    imageAlt: data[0].imageAlt,
    content: data[0].content,
    relatedNews: data[0].relatedNews.map((item) => ({
      id: item.id,
      image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
      imageAlt: item.imageAlt,
      date: item.date,
      title: item.title,
      slug: item.slug,
    })),
  };
}

export function adapterNews(data) {
  return {
    data: data.data.map((item) => ({
      id: item.id,
      image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
      imageAlt: item.imageAlt,
      date: item.date,
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

export function adapterNewsTotalPages(data) {
  return {
    totalPages: data.totalPages,
  };
}
