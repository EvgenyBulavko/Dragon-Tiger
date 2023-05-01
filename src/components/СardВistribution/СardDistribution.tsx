import React, { useEffect, useState } from "react";
import * as PIXI from "pixi.js";
import { Stage } from "@pixi/react";
import {
  GameStoreContext,
  gameStore,
  useGameStore,
} from "../../store/gameStore";
import { Card } from "../Card";
import { observer } from "mobx-react";
import "./СardDistribution.css";

export const СardDistribution = observer(() => {
  const { prevCard, openCards, openNextCards, checkWin, clearBets , openCardsLength} =
    useGameStore();
// console.log(openCards.length);
  const onClick = () => {
    openNextCards();
    checkWin();
    //clearBets();
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
        <Card suit="hearts" value="backward" x={650} y={50} onClick={onClick} />
        {prevCard && (
          <Card suit={prevCard.suit} value={prevCard.value} x={50} y={50} />
        )}
        {openCardsLength >= 2 && 
          <>
            <Card
              suit={openCards[0].suit}
              value={openCards[0].value}
              x={650}
              y={50}
              isFirst={true}
            />
            <Card
              suit={openCards[1].suit}
              value={openCards[1].value}
              x={650}
              y={50}
              isFirst={false}
            />
          </>
        }
      </GameStoreContext.Provider>
    </Stage>
    </div>
    </div>
  );
});
