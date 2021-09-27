import {
  binaryxLogo,
  binaryxDarkLogo,
  digitalAgencyLogo,
  easeLogo,
  foodexLogo,
  powercodeLogo,
} from '../assets/logos';

export const getLogo = (category) => {
  switch (category) {
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
      return;
  }
};

export const getHeaderLogo = (category) => {
  switch (category) {
    case 'binaryx':
      return binaryxDarkLogo;
    
    case 'digital-agency':
      return digitalAgencyLogo;

    case 'ease':
      return easeLogo;

    case 'foodex':
      return foodexLogo;

    case 'powercode':
      return powercodeLogo;

    default:
      return;
  }
};