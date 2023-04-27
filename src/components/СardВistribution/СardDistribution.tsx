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

export const СardDistribution = observer(() => {
  const { prevCard, openCards, openNextCards, checkWin, clearBets } =
    useGameStore();

  const onClick = () => {
    openNextCards();
    checkWin();
    //clearBets();
  };
  return (
    <Stage
      width={1000}
      height={300}
      options={{ autoDensity: true, backgroundAlpha:0 }}
    >
      <GameStoreContext.Provider value={gameStore}>
        <Card suit="hearts" value="backward" x={750} y={50} onClick={onClick} />
        {prevCard && (
          <Card suit={prevCard.suit} value={prevCard.value} x={150} y={50} />
        )}
        {openCards.length >= 2 && (
          <>
            <Card
              suit={openCards[0].suit}
              value={openCards[0].value}
              x={400}
              y={150}
            />
            <Card
              suit={openCards[1].suit}
              value={openCards[1].value}
              x={500}
              y={150}
            />
          </>
        )}
      </GameStoreContext.Provider>
    </Stage>
  );
});
