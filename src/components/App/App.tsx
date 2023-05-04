import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as PIXI from 'pixi.js';
import { Game } from "../../pages/Game";
import { GameStoreContext, gameStore } from "../../store/gameStore";
import { Home } from "../../pages/Home";

export const App = () => {
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  return (

    <div className="app">
      <GameStoreContext.Provider value={gameStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/game" element={<Game/>} />
        </Routes>
      </BrowserRouter>
      </GameStoreContext.Provider>
      
    </div>
  );
};
