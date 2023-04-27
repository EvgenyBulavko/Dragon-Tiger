import { action, makeAutoObservable } from "mobx";
import { BetsList, BetsValue, PlayingCard, PlayingCard1 } from "../common/types";
import { createDeck } from "./utils";
import React from "react";
import { cardDT, cardSuits, cardValues } from "../common/allData";

export class GameStore {
  playerBalance: number = 700;
  deck: PlayingCard1[];
  openCards: PlayingCard1[] = [];
  bets: BetsList = {
    dragon: 0,
    tiger: 0,
    tie: 0,
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
     clearBets: action.bound,
      // changeBankerMinScore: action.bound,
    });
    //autoSaveKeys(this, 'game', ['playerMinScore', 'bankerMinScore']);
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

  checkWin() {
    // console.log(this.openCards[0].value, this.openCards[1].value,this.bets);
    // console.log(this.openCards.length);
    // console.log(this.bets.tiger);
    if (this.openCards.length) {
      if (
        cardDT.indexOf(this.openCards[0].value) === cardDT.indexOf(this.openCards[1].value) &&
        this.bets.tie > 0
      ) {
        this.playerBalance += this.bets.tie * 11;
      }
      if (
        cardDT.indexOf(this.openCards[0].value) > cardDT.indexOf(this.openCards[1].value) &&
        this.bets.dragon > 0
      ) {
        this.playerBalance += this.bets.dragon * 2;
      }
      if (
        cardDT.indexOf(this.openCards[0].value) < cardDT.indexOf(this.openCards[1].value) &&
        this.bets.tiger > 0
      ) {
        console.log(1)
        this.playerBalance += this.bets.tiger * 2;
      }
      this.bets.tiger = 0;
      this.bets.tie = 0;
      this.bets.dragon = 0;
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
