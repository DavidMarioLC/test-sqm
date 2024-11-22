export function adapterDistribuitorsPage(data) {
  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.bannerImage,
    imageAlt: data.bannerImageAlt,
    informativeText: data.informativeText,
    buttonText: data.buttonText,
  };
}
