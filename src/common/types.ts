import { cardSuits, cardValues } from './allData';

export type CardSuit = typeof cardSuits[number];
export type CardValue = typeof cardValues[number];

export interface PlayingCard {
    suit: CardSuit;
    value: CardValue;
  }
