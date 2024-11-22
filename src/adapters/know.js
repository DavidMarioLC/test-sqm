export function adapterKnowPage(data) {
  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    imageAlt: data.imageAlt,
    description: data.description,
    sections: data.sections.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      imageAlt: item.imageAlt,
    })),
  };
}
