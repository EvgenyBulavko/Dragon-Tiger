import { action, computed, makeAutoObservable } from "mobx";
import { BetsList, BetsValue, PlayingCard, TCard } from "../common/types";
import { createDeck } from "./utils";
import React from "react";
import { cardSuits, cardValues } from "../common/allData";

export class GameStore {
  playerBalance: number = 700;
  deck: TCard[];
  openCards: TCard[] = [];
  bets: BetsList = {
    dragon: 0,
    tiger: 0,
    tie: 0,
    dragon_spades: 0,
    dragon_hearts: 0,
    dragon_big: 0,
    dragon_diamonds: 0,
    dragon_clubs: 0,
    dragon_small: 0,
    tiger_big: 0,
    tiger_hearts: 0,
    tiger_diamonds: 0,
    tiger_clubs: 0,
    tiger_spades: 0,
    tiger_small: 0,
  };
  selectedBet: BetsValue | null = null;
  prevCard: PlayingCard | null = null;
  // bankerScore: number | null = null;
  // isGame: boolean = false;
  // playerMinScore: MinScore = minScoreForStart;
  // bankerMinScore: MinScore = minScoreForStart;

  constructor() {
    this.deck = createDeck();
    makeAutoObservable(this, {
      openNextCards: action.bound,
      checkWin: action.bound,
      selectBet: action.bound,
      makeBet: action.bound,
      removeBet: action.bound,
     clearBets: action.bound,
     openCardsLength: computed,
      // changeBankerMinScore: action.bound,
    });
    //autoSaveKeys(this, 'game', ['playerMinScore', 'bankerMinScore']);
  }

  get openCardsLength(){
    return this.openCards.length;
  }

  openNextCards() {
    if (this.deck.length >= 2) {
        if(this.openCards.length >=2){
            this.prevCard = this.openCards.pop()!;
        }
        this.openCards = [];
      this.openCards.push(this.deck.pop()!);
      this.openCards.push(this.deck.pop()!);
    }
    else{
        this.openCards = [];
        this.prevCard = null;
        this.deck = createDeck();
    }
    console.log(this.bets)
  }

  selectBet(newBet: BetsValue) {
    this.selectedBet = newBet;
  }

  makeBet(value: number) {
    if (this.selectedBet && this.playerBalance >= value) {
      this.bets[this.selectedBet] += value;
      this.playerBalance -= value;
    }
    
  }
  removeBet(value: number, betValue: string | undefined) {
    if (betValue === this.selectedBet) {
      this.bets[betValue] -= value;
      this.playerBalance += value;
    }
  }

  checkWin() {
    // console.log(this.openCards[0].value, this.openCards[1].value,this.bets);
    // console.log(this.openCards.length);
    // console.log(this.bets.tiger);
    if (this.openCards.length) {
      if (
        cardValues.indexOf(this.openCards[0].value) === cardValues.indexOf(this.openCards[1].value) &&
        this.bets.tie > 0
      ) {
        this.playerBalance += this.bets.tie * 8;
      }
      if (
        cardValues.indexOf(this.openCards[0].value) > cardValues.indexOf(this.openCards[1].value) &&
        this.bets.dragon > 0
      ) {
        this.playerBalance += this.bets.dragon * 2;
      }
      if (
        cardValues.indexOf(this.openCards[0].value) < cardValues.indexOf(this.openCards[1].value) &&
        this.bets.tiger > 0
      ) {
        this.playerBalance += this.bets.tiger * 2;
      }

      if (
        this.openCards[1].suit === 'clubs' &&
        this.bets.tiger_clubs > 0
      ) {
        this.playerBalance += this.bets.tiger_clubs * 2;
      }
      if (
        this.openCards[1].suit === 'diamonds' &&
        this.bets.tiger_diamonds > 0
      ) {
        this.playerBalance += this.bets.tiger_diamonds * 2;
      }
      if (
        this.openCards[1].suit === 'hearts' &&
        this.bets.tiger_hearts > 0
      ) {
        this.playerBalance += this.bets.tiger_hearts * 2;
      }
      if (
        this.openCards[1].suit === 'spades' &&
        this.bets.tiger_spades > 0
      ) {
        this.playerBalance += this.bets.tiger_spades * 2;
      }

      if (
        cardValues.indexOf(this.openCards[1].value) < 6 &&
        this.bets.tiger_small > 0
      ) {
        this.playerBalance += this.bets.tiger_small * 2;
      }

      if (
        cardValues.indexOf(this.openCards[1].value) > 5 &&
        this.bets.tiger_big > 0
      ) {
        this.playerBalance += this.bets.tiger_big * 2;
      }


      if (
        this.openCards[0].suit === 'clubs' &&
        this.bets.dragon_clubs > 0
      ) {
        this.playerBalance += this.bets.dragon_clubs * 2;
      }
      if (
        this.openCards[0].suit === 'diamonds' &&
        this.bets.dragon_diamonds > 0
      ) {
        this.playerBalance += this.bets.dragon_diamonds * 2;
      }
      if (
        this.openCards[0].suit === 'hearts' &&
        this.bets.dragon_hearts > 0
      ) {
        this.playerBalance += this.bets.dragon_hearts * 2;
      }
      if (
        this.openCards[0].suit === 'spades' &&
        this.bets.dragon_spades > 0
      ) {
        this.playerBalance += this.bets.dragon_spades * 2;
      }

      if (
        cardValues.indexOf(this.openCards[0].value) < 6 &&
        this.bets.dragon_small > 0
      ) {
        this.playerBalance += this.bets.dragon_small * 2;
      }

      if (
        cardValues.indexOf(this.openCards[0].value) > 5 &&
        this.bets.dragon_big > 0
      ) {
        this.playerBalance += this.bets.dragon_big * 2;
      }





      this.bets.tiger = 0;
      this.bets.tie = 0;
      this.bets.dragon = 0;

      this.bets.dragon_big = 0;
      this.bets.dragon_clubs = 0;
      this.bets.dragon_diamonds = 0;
      this.bets.dragon_hearts = 0;
      this.bets.dragon_small = 0;
      this.bets.dragon_spades = 0;

      this.bets.tiger_big = 0;
      this.bets.tiger_clubs = 0;
      this.bets.tiger_diamonds = 0;
      this.bets.tiger_hearts = 0;
      this.bets.tiger_small = 0;
      this.bets.tiger_spades = 0;

    }
  }

  clearBets(){
    this.bets.dragon = 0;
    this.bets.tie = 0;
    this.bets.tiger = 0;
  }

  // resetElements() {
  //   this.playerCards = [];
  //   this.bankerCards = [];
  //   this.playerScore = null;
  //   this.bankerScore = null;
  //   this.bettingStore.restBets();
  // }

  // finishGame() {
  //   this.isGame = false;
  //   this.bettingStore.unlockBets();
  // }
}

export const GameStoreContext = React.createContext<GameStore | null>(null);
export const gameStore = new GameStore();

export function useGameStore() {
  const context = React.useContext(GameStoreContext);
  if (!context) {
    throw new Error("Wrap element with context first!");
  }
  return context;
}
