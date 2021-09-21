const getCoordinatesOf = (element) => {

  if (typeof element === 'string') {
    return document.querySelector(element).getBoundingClientRect();
  }

  return element.getBoundingClientRect();
};

export const areElementsIntersect = (area, element) => {

  const areaCoordinates = getCoordinatesOf(area);
  const elementCoordinates = getCoordinatesOf(element);

  return (elementCoordinates.right > areaCoordinates.left
    && elementCoordinates.left < areaCoordinates.right
    && elementCoordinates.top < areaCoordinates.bottom
    && elementCoordinates.bottom > areaCoordinates.top);
};