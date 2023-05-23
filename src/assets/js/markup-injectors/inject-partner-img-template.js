import partnersdb from '../../db/partnersdb.js';
import createPartnerImageMarkupTemplate from '../markup-templates/partner-img-markup-template.js';
import markupInjectorWithObjectValues from './injector-function.js';

const partnersLogoHolder = document.querySelector(
  '[data-partner-logos-holder]'
);

markupInjectorWithObjectValues({
  database: partnersdb,
  markupHolder: partnersLogoHolder,
  markupCreator: createPartnerImageMarkupTemplate
});
