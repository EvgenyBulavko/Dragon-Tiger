import { cardSuits, cardValues, betsValue, cardDT } from './allData';

export type CardSuit = typeof cardSuits[number];
export type CardValue = typeof cardValues[number];
export type BetsValue = typeof betsValue[number];
export type DTValue = typeof cardDT[number];

export interface TypeCard {
    suit: CardSuit;
    value: CardValue | 'backward';
    x: number;
    y: number;
    onClick?: () => void;
}

export interface PlayingCard {
  suit: CardSuit;
  value: CardValue | 'backward';
}

export interface PlayingCard1 {
  suit: CardSuit;
  value: DTValue;
}

export interface BetsList {
  "tiger": number,
  "dragon": number,
  "tie": number
}