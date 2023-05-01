import { cardSuits, cardValues, betsValue } from './allData';

export type CardSuit = typeof cardSuits[number];
export type CardValue = typeof cardValues[number];
export type BetsValue = typeof betsValue[number];

export interface TypeCard {
    suit: CardSuit;
    value: CardValue | 'backward';
    x: number;
    y: number;
    onClickCard?: () => void;
    index?: number
    isMove?:boolean;
    speed?: {x: number, y: number};
    cursor?: string
}

export interface PlayingCard {
  suit: CardSuit;
  value: CardValue | 'backward';
}

export interface TCard {
  suit: CardSuit;
  value: CardValue;
  id: number;
}

export type BetsList = { [K in BetsValue]: number }

export interface PropsChip {
  id: string;
  isBet: boolean;
  betValue?: string;
}