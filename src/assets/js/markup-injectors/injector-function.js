const markupInjectorWithObjectValues = (...elements) => {
  const elementsProperties = elements[0];
  Object.values(elementsProperties.database).forEach((element) => {
    elementsProperties.markupHolder.innerHTML += elementsProperties.markupCreator(element);
  });
};

export default markupInjectorWithObjectValues;
