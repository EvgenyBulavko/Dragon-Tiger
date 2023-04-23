import { PlayingCard } from '../../common/types';
import { cardSuits, cardValues } from '../../common/allData';

const leftStep = 150;
const topStep = 200;

export const getCardSpriteCoordinates = ({ suit, value }: PlayingCard) => {
  const leftCoordinate = cardValues.indexOf(value) * leftStep;
  const topCoordinate = cardSuits.indexOf(suit) * topStep;

  return {
    leftCoordinate,
    topCoordinate,
  };
};
