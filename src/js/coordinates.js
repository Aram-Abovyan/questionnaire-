const getCoordinates = (element) => {

  if (typeof element === 'string') {
    return document.querySelector(element).getBoundingClientRect();
  }

  return element.getBoundingClientRect();
};

export const areIntersect = (area, element) => {

  const areaCoordinates = getCoordinates(area);
  const elementCoordinates = getCoordinates(element);

  return (elementCoordinates.right > areaCoordinates.left
    && elementCoordinates.left < areaCoordinates.right
    && elementCoordinates.top < areaCoordinates.bottom
    && elementCoordinates.bottom > areaCoordinates.top);
};