export function adapterSearchPage(data) {
  return {
    title: data.title,
    image: data.bannerImage,
    imageAlt: data.bannerImageAlt,
  };
}

export function adapterSearch(data) {
  return {
    solution: {
      title: data.solution.title,
      quantity: data.solution.quantity,
      items:
        data.solution.items.map((item) => ({
          id: item.id,
          image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
          imageAlt: item.imageAlt,
          name: item.name,
          slug: item.slug,
        })) || [],
    },
    articles: {
      title: data.articles.title,
      quantity: data.articles.quantity,
      items:
        data.articles.items.map((item) => ({
          id: item.id,
          image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
          imageAlt: item.imageAlt,
          title: item.name,
          slug: item.slug,
        })) || [],
    },
    videos: {
      title: data.videos.title,
      quantity: data.videos.quantity,
      items:
        data.videos.items.map((item) => ({
          id: item.id,
          image:
            item.mediumImage ||
            `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg` ||
            "/placeholder.svg",
          videoId: item.videoId,
          imageAlt: item.imageAlt,
          title: item.name,
          slug: item.slug,
        })) || [],
    },
    news: {
      title: data.noticias.title,
      quantity: data.noticias.quantity,
      items:
        data.noticias.items.map((item) => ({
          id: item.id,
          image: item.mediumImage ? item.mediumImage : "/placeholder.svg",
          imageAlt: item.imageAlt,
          date: item.date,
          title: item.name,
          slug: item.slug,
        })) || [],
    },
  };
}
