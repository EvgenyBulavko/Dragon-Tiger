import { PlayingCard } from '../../common/types';
import { cardSuits, cardValues } from '../../common/allData';

const leftStep = 341;
const topStep = 473.5;

export const getCardSpriteCoordinates = ({ suit, value }: PlayingCard) => {
  const leftCoordinate = value === 'backward' ? 13 * leftStep: cardValues.indexOf(value) * leftStep;
  const topCoordinate = cardSuits.indexOf(suit) * topStep;

  return {
    leftCoordinate,
    topCoordinate,
  };
};
