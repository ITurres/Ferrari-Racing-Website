import upcomingRacesdb from '../../db/upcomingRacesdb.js';
import createUpcomingRaceMarkupTemplate from '../markup-templates/upcoming-race-markup-template.js';
import markupInjectorWithObjectValues from './injector-function.js';

const upcomingRacesMarkupHolder = document.querySelector(
  '[data-upcoming-races-holder]'
);

markupInjectorWithObjectValues({
  database: upcomingRacesdb,
  markupHolder: upcomingRacesMarkupHolder,
  markupCreator: createUpcomingRaceMarkupTemplate
});
