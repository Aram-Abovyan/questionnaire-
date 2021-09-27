import binaryx from '../assets/images/complete/binaryxText.svg';
import digitalAgency from '../assets/images/complete/digitalAgencyText.svg';
import ease from '../assets/images/complete/easeText.svg';
import foodex from '../assets/images/complete/foodexText.svg';
import powercode from '../assets/images/complete/powercodeText.svg';

export const getCompletePageText = (category) => {
  switch (category) {
    case 'binaryx':
      return binaryx;
    
    case 'digital-agency':
      return digitalAgency;

    case 'ease':
      return ease;

    case 'foodex':
      return foodex;

    case 'powercode':
      return powercode;

    default:
      return;
  }
}
