import { modalEmoji } from '../assets/modalEmojis';

export const getModalEmoji = (category) => {
  switch (category) {
    case 'binaryx':
      return modalEmoji.binaryx;
    
    case 'digital-agency':
      return modalEmoji.digitalAgency;

    case 'ease':
      return modalEmoji.ease;

    case 'foodex':
      return modalEmoji.foodex;

    case 'powercode':
      return modalEmoji.powercode;

    default:
      return;
  }
}