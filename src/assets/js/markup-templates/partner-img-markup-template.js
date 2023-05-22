function createPartnerImageMarkupTemplate(partner) {
  return `<img class='partner-logo' src='${partner.img.src}' alt='${partner.img.alt}' />`;
}

export default createPartnerImageMarkupTemplate;
