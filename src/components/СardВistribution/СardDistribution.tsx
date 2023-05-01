import React, { useEffect, useState } from "react";
import * as PIXI from "pixi.js";
import { Container, Stage } from "@pixi/react";
import {
  GameStoreContext,
  gameStore,
  useGameStore,
} from "../../store/gameStore";
import { Card } from "../Card";
import { observer } from "mobx-react";
import "./СardDistribution.css";
import soundSell from "../../assets/mp3/dealCard.wav";
import useSound from "use-sound";

export const СardDistribution = observer(() => {
  const { prevCard, openCards, openNextCards, checkWin , openCardsLength} =
    useGameStore();
  const [playSound] = useSound(soundSell);
  const onClickCard = () => {
    playSound();
    openNextCards();
    checkWin();
  };
  return (
    <div className="stage">
      <div className="stage-wrapper">
    <Stage
      width={800}
      height={300}
      options={{ autoDensity: true, backgroundAlpha:0 }}
    >
      <GameStoreContext.Provider value={gameStore}>
        <Card suit="hearts" value="backward" x={650} y={50} onClickCard={onClickCard} cursor="pointer"/>
        {prevCard.length >= 2 && (
          <Container>
          <Card suit={prevCard[0].suit} value={prevCard[0].value} x={50} y={50} />
          <Card suit={prevCard[1].suit} value={prevCard[1].value} x={57} y={43} />
          </Container>
        )}
        {openCardsLength >= 2 && 
          <>
            <Card
              suit={openCards[0].suit}
              value={openCards[0].value}
              index={openCards[0].id}
              x={650}
              y={50}
              isMove={true}
              speed={{x: -44, y: 10}}
            />
            <Card
              suit={openCards[1].suit}
              value={openCards[1].value}
              index={openCards[1].id}
              x={650}
              y={50}
              isMove={true}
              speed={{x: -16, y: 10}}
            />
          </>
        }
      </GameStoreContext.Provider>
    </Stage>
    </div>
    </div>
  );
});
