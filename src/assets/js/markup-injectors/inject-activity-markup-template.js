import activitiesdb from '../../db/activitiesdb.js';
import createActivityMarkupTemplate from '../markup-templates/activity-markup-template.js';

const activitiesHolder = document.querySelector('[data-activities-holder]');

Object.values(activitiesdb).forEach((activity) => {
  activitiesHolder.innerHTML += createActivityMarkupTemplate(activity);
});
