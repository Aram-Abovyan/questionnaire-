import {
  binaryxBackgroundImage,
  digitalAgencyBackgroundImage,
  easeBackgroundImage,
  foodexBackgroundImage,
} from '../assets/images/start/startPageBackgrounds';

import { backgrounds } from '../assets/backgrounds';


export const getStartBackgroundImage = (category) => {
  switch (category) {
    case 'binaryx':
      return binaryxBackgroundImage;
    
    case 'digital-agency':
      return digitalAgencyBackgroundImage;

    case 'ease':
      return easeBackgroundImage;

    case 'foodex':
      return foodexBackgroundImage;

    default:
      return;
  }
};

export const getQuestionBackground = (category) => {
  switch (category) {
    case 'binaryx':
      return {
        components: backgrounds.binaryx,
        color: '#FFFFFF',
      };
    
    case 'digital-agency':
      return {
        components: backgrounds.digitalAgency,
        color: '#FFFFFF',
      };

    case 'ease':
      return {
        components: backgrounds.ease,
        color: '#001237',
      };

    case 'foodex':
      return {
        components: backgrounds.foodex,
        color: '#FFFFFF',
      };

    case 'powercode':
      return {
        components: backgrounds.powercode,
        color: '#FFFFFF',
      };

    default:
      return;
  }
};
