export function adapterSustainabilitySqmPage(data) {
  return {
    title: data.title || "",
    subtitle: data.subtitle || "",
    image: data.image || "/placeholder.svg",
    imageAlt: data.imageAlt || "",
    content: data.content || "",
    description: data.description || "",
    sections: data.sections.map((item) => ({
      id: item.id,
      title: item.title || "",
      description: item.description || "",
      listTitle: item.listTitle || "",
      listItems: item.listItems.map((item) => ({
        id: item.id,
        title: item.title || "",
      })),
      logos: item.logos.map((item) => ({
        id: item.id,
        image: item.image || "/placeholder.svg",
        title: item.title || "",
      })),
    })),
  };
}

export function adapterSustainabilityAgriculturePage(data) {
  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    imageAlt: data.imageAlt,
    description: data.description,
    tabs: data.tabs.map((item) => ({
      id: item.id,
      title: item.title,
      logo: item.logo,
      content: item.content,
      subtitle: item.subtitle,
      downloadText: item.downloadText,
      file: item.file,
      cards: item.cards.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
      })),
    })),
  };
}

export function adapterCarbonFootPrintPage(data) {
  return {
    title: data.title,
    subtitle: data.subtitle,
    image: data.image,
    imageAlt: data.imageAlt,
    description: data.description,
    tabs: data.tabs.map((item) => ({
      id: item.id,
      title: item.title,
      content: item.contenido,
    })),
    sections: data.sections.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      imageAlt: item.imageAlt,
    })),
  };
}

export function adapterCertificationsPage(data) {
  return {
    title: data.title || "/placeholder.svg",
    subtitle: data.subtitle || "/placeholder.svg",
    image: data.image || "/placeholder.svg",
    imageAlt: data.imageAlt || "",
    description: data.description || "",
    certifications: data.certifications.map((item) => ({
      id: item.id,
      logo: item.logo || "/placeholder.svg",
      content: item.contenido || "",
      file: item.file || "",
    })),
  };
}
