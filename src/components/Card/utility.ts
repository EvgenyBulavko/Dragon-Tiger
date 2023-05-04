import { PlayingCard } from '../../common/types';
import { cardSuits, cardValues } from '../../common/allData';

const leftStep = 334;
const topStep = 440;

export const getCardSpriteCoordinates = ({ suit, value }: PlayingCard) => {
  const leftCoordinate = value === 'backward' ? 12 * leftStep: cardValues.indexOf(value) * leftStep;
  const topCoordinate = cardSuits.indexOf(suit) * topStep;

  return {
    leftCoordinate,
    topCoordinate,
  };
};
