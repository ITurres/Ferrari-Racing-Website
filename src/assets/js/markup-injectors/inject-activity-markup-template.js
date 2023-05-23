import activitiesdb from '../../db/activitiesdb.js';
import createActivityMarkupTemplate from '../markup-templates/activity-markup-template.js';
import markupInjectorWithObjectValues from './injector-function.js';

const activitiesHolder = document.querySelector('[data-activities-holder]');

markupInjectorWithObjectValues({
  database: activitiesdb,
  markupHolder: activitiesHolder,
  markupCreator: createActivityMarkupTemplate
});
