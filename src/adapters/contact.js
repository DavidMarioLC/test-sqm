export function adapterContactPage(data) {
  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.bannerImage,
    imageAlt: data.bannerImageAlt,
    informativeText: data.informativeText,
  };
}

export function adapterContactFormPage(data) {
  return data;
}
