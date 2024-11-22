export function adapterHistoryPage(data) {
  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    imageAlt: data.imageAlt,
    description: data.description,
    timeline: data.timeline.map((item) => ({
      id: item.id,
      initialYearRange: item.initialYearRange,
      eventYear: item.eventYear,
      image: item.image,
      eventDetail: {
        name: item.eventDetail.name,
        description: item.eventDetail.description,
      },
    })),
    extraInfo: data.extraInfo,
    carouselImages: data.carouselImages.map((item) => ({
      id: item.id,
      image: item.image,
      imageAlt: item.imageAlt,
    })),
  };
}
