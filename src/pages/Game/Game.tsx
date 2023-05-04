import React from "react";
import { observer } from "mobx-react";
import { useGameStore } from "../../store/gameStore";
import { Settings } from "../../components/Settings";
import { Options } from "../../components/Options";
import { GameTable } from "../../components/GameTable";

import "./Game.scss";

export const Game = observer(() => {
  const { selectOption, playerBalance, playerBet, playerWin, isOptions } =
    useGameStore();

  const onClose = () => selectOption();

  return (
    <div className="game">
      <div className="player-balance">
        <div></div>
        <div className={"player-balance-text"}>
          {" "}
          BALANCE <br /> {playerBalance}€
        </div>
      </div>
      <GameTable />
      <div className="player-balance">
        <Settings />
        <div className="player-balance-wrapper">
          <div className="player-balance-win">
            <div className={"player-balance-win-text"}>BET</div>
            <div className={"player-balance-win-text"}>{playerBet}€</div>
          </div>
          <div className="player-balance-win">
            <div className={"player-balance-win-text"}>WIN</div>
            <div
              className={
                playerWin > 0
                  ? "player-balance-win-text activeWin"
                  : "player-balance-win-text "
              }
            >
              {playerWin}€
            </div>
          </div>
        </div>
      </div>
      <Options visible={isOptions} onClose={onClose} />
    </div>
  );
});
