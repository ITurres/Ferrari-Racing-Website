function createUpcomingRaceMarkupTemplate(country) {
  return `<div class="race-card--wrapper">
  <img class="race-card__image" src="${country.img.src}" alt="${country.img.alt}" />
  <div class="race-card__content--wrapper">
    <span class="race-card__name">${country.circuit.name}</span>
    <time class="race-card__date-time" datetime="${country.date.timeStamp}">${country.date.dateTime}</time>
    <hr />
    <p class="race-card__about">${country.circuit.about}</p>
  </div>
</div>`;
}

export default createUpcomingRaceMarkupTemplate;
