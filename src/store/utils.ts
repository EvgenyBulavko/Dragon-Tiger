import { cardSuits, cardValues } from "../common/allData";
import { PlayingCard1 } from "../common/types";


const createShuffledCards = (deck: Array<PlayingCard1>) => {
    const shuffledCards = [...deck];

    for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * shuffledCards.length);
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    return shuffledCards;
  }

  export const createDeck = () =>  {
    const deck  = cardSuits.flatMap((suit) => cardValues.map((value) => ({ suit, value })));
    return createShuffledCards(deck);
  }