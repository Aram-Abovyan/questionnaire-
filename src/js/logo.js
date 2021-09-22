import {
  binaryxLogo,
  digitalAgencyLogo,
  easeLogo,
  foodexLogo,
  powercodeLogo,
} from '../assets/images/logos';

export const getLogoByPageName = (pageName) => {
  switch (pageName) {
    case 'binaryx':
      return binaryxLogo;
    
    case 'digital-agency':
      return digitalAgencyLogo;

    case 'ease':
      return easeLogo;

    case 'foodex':
      return foodexLogo;

    case 'powercode':
      return powercodeLogo;

    default:
      return null;
  }
};