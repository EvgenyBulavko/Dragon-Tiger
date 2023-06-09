import { cardSuits, cardValues } from "../common/allData";
import { TCard } from "../common/types";

const createShuffledCards = (deck: Array<TCard>) => {
  const shuffledCards = [...deck];

  for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * shuffledCards.length);
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  return shuffledCards;
};

export const createDeck = () => {
  let deck: Array<TCard> = [];
  let id = 0;
  while (deck.length < 52 * 8) {
    deck = [
      ...deck,
      ...cardSuits.flatMap((suit) =>
        cardValues.map((value) => {
          id++;
          return { suit, value, id: id };
        })
      ),
    ];
  }

  return createShuffledCards(deck);
};
