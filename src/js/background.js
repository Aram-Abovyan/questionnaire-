import {
  binaryxBackgroundImage,
  digitalAgencyBackgroundImage,
  easeBackgroundImage,
  foodexBackgroundImage,
} from '../assets/images/start/startPageBackgrounds';

export const getBackgroundImageByPageName = (pageName) => {
  switch (pageName) {
    case 'binaryx':
      return binaryxBackgroundImage;
    
    case 'digital-agency':
      return digitalAgencyBackgroundImage;

    case 'ease':
      return easeBackgroundImage;

    case 'foodex':
      return foodexBackgroundImage;

    default:
      return null;
  }
};