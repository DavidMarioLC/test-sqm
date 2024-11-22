// utils - paginate adapter
export const paginationAdapter = (items, page, limit, total) => ({
  data: items,
  pagination: {
    currentPage: page,
    limit: limit,
    total: total,
    totalPages: Math.ceil(total / limit),
  },
});

// news
export const adapterNews = {
  metadata: (data) => ({
    title: data.title,
    description: data.description,
    url: data.url,
    shareImage: data.shareImage,
    keywords: data.keywords,
  }),
  page: (data) => ({
    title: data.title,
    description: data.description,
    image: data.image,
    imageAlt: data.imageAlt,
  }),
  newsItem: (data) => ({
    id: data.id,
    image: data.image,
    imageAlt: data.imageAlt,
    title: data.title,
    date: data.date,
    slug: data.slug,
    content: data.content,
  }),
  allNews: (data) => data.map(adapterNews.newsItem),
};

// articles
export const adapterArticle = {
  metadata: (data) => ({
    title: data.title,
    description: data.description,
    url: data.url,
    shareImage: data.shareImage,
    keywords: data.keywords,
  }),
  page: (data) => ({
    title: data.title,
    description: data.description,
    image: data.image,
    imageAlt: data.imageAlt,
  }),
  articleItem: (data) => ({
    id: data.id,
    image: data.image,
    imageAlt: data.imageAlt,
    title: data.title,
    date: data.date,
    slug: data.slug,
    content: data.content,
    tags: data.tags,
    file: data.file,
    author: data.author,
  }),
  allArticles: (data) => data.map(adapterArticle.articleItem),
};

// videos
export const adapterVideo = {
  metadata: (data) => ({
    title: data.title,
    description: data.description,
    url: data.url,
    shareImage: data.shareImage,
    keywords: data.keywords,
  }),
  page: (data) => ({
    title: data.title,
    description: data.description,
    image: data.image,
    imageAlt: data.imageAlt,
  }),
  videoItem: (data) => ({
    id: data.id,
    image: data.image,
    imageAlt: data.imageAlt,
    date: data.date,
    title: data.title,
    slug: data.slug,
    content: data.content,
    tags: data.tags,
    videoId: data.videoId,
  }),
  allVideos: (data) => data.map(adapterVideo.videoItem),
};

// applications
export const adapterApplication = {
  applicationItem: (data) => ({
    id: data.id,
    image: data.image,
    imageAlt: data.imageAlt,
    title: data.title,
    slug: data.slug,
    description: data.description,
    logo: data.logo,
    logoAlt: data.logoAlt,
  }),
  allApplications: (data) => adapterApplication.applicationItem(data),
};

// products
export const adapterProduct = {
  metadata: (data) => ({
    title: data.title,
    description: data.description,
    url: data.url,
    shareImage: data.shareImage,
    keywords: data.keywords,
  }),
  productItem: (data) => ({
    id: data.id,
    image: data.image,
    imageAlt: data.imageAlt,
    name: data.name,
    slug: data.slug,
    details: {
      description: {
        title: data.details.description.title,
        content: data.details.description.content,
      },
      specs: {
        title: data.details.specs.title,
        list: data.details.specs.list,
      },
      material: {
        title: data.details.material.title,
        files: data.details.material.files,
      },
    },
  }),
  allProducts: (data) => data.map(adapterProduct.productItem),
};
