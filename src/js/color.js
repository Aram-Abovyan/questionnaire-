export const getButtonColorByPageName = (pageName) => {
  switch (pageName) {
    case 'binaryx':
      return '#FFFFFF';
    
    case 'digital-agency':
      return '#F05050';

    case 'ease':
      return '#CEEC1A';

    case 'foodex':
      return '#31B574';

    case 'powercode':
      return '#0075FC';

    default:
      return null;
  }
};

export const getStartPageTextColorByPageName = (pageName) => {
  switch (pageName) {
    case 'binaryx':
    case 'ease':
    case 'powercode':
      return 'white';
    
    case 'digital-agency':
    case 'foodex':
      return 'black';

    default:
      return null;
  }
};

export const getButtonTextColorByPageName = (pageName) => {
  switch (pageName) {
    case 'foodex':
    case 'digital-agency':
      return '#FFFFFF';

    case 'binaryx':
      return '#1651F0';

    case 'ease':
      return '#081A3D';

    case 'powercode':
      return '#081A3D';

    default:
      return null;
  }
};