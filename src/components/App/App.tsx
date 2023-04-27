import React, { useState } from "react";
import "./App.scss";
import chip from "../../assets/img/100chip.svg";
import { СardDistribution } from "../СardВistribution";
import * as PIXI from 'pixi.js';
import { Game } from "../../pages/Game";
import { GameStoreContext, gameStore } from "../../store/gameStore";

export const App = () => {
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  return (
    <div className="app">
      <GameStoreContext.Provider value={gameStore}>
      < Game/>
      </GameStoreContext.Provider>
    </div>
  );
};
