import React, { EventHandler, MouseEventHandler, useState } from "react";
import "./Game.scss";
import { СardDistribution } from "../../components/СardВistribution";
import { Chips } from "../../components/Chips";
import { observer } from "mobx-react";
import { useGameStore } from "../../store/gameStore";
import DragonImg from '../../assets/img/dracon.jpg';

export const Game = observer(() => {
  const [win, setWin] = useState("");
  const [active, setActive] = useState("");
  const { selectBet, selectedBet, playerBalance, bets } = useGameStore();
  /*  const handleClick = () => {
    console.log("The link was clicked.");
    Math.floor(Math.random() * 101) > 50
      ? setWin("win tiger")
      : setWin("win dragon");
  }; */

  const handleClickDragon = () => {
    setActive("dragon");
    selectBet("dragon");
  };
  const handleClickTie = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setActive("tie");
    selectBet("tie");
  };
  const handleClickTiger = () => {
    setActive("tiger");
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.currentTarget.id === "tiger" ||
      e.currentTarget.id === "dragon" ||
      e.currentTarget.id === "tie"
    ) {
      selectBet(e.currentTarget.id);
    }
  };

  return (
    <div className="game">
      <div className="game-body">
        <div className="game-body-wrapper-border-external">
          <div className="game-body-wrapper">
            <div className="game-body-wrapper-border">
              <div className="game_container">
                <div>{playerBalance}$</div>
                <СardDistribution />
              </div>
              <div className="game-bid">
                <div className="game-bid-dragon-side">
                  <div className="game-bid-dragon-side-wrapper">
                    <div className="game-bid-spades game-bid-size"></div>
                    <div className="game-bid-hearts game-bid-size"></div>
                    <div className="game-bid-big game-bid-size">
                      BIG <br />8 - K
                    </div>
                    <div className="game-bid-diamonds game-bid-size"></div>
                    <div className="game-bid-clubs game-bid-size"></div>
                    <div className="game-bid-small game-bid-size">
                      SMALL <br />A - 6
                    </div>
                  </div>
                  <div
                    onClick={handleClick}
                    id="dragon"
                    className={
                      "dragon" === selectedBet
                        ? "game-bid-dragon active"
                        : "game-bid-dragon"
                    }
                  >
                    <span className="text-bet">DRAGON</span>
                    {bets.dragon > 0 && <h3>{bets.dragon}</h3>}
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className={
                    "tie" === selectedBet
                      ? "game-bid-tie active"
                      : "game-bid-tie"
                  }
                  id="tie"
                >
                  <span className="text-bet">TIE <br/> 8 : 1</span>
                  {bets.tie > 0 && <h3>{bets.tie}</h3>}
                </div>
                <div className="game-bid-tiger-side">
                  <div className="game-bid-tiger-side-wrapper">
                    <div className="game-bid-big game-bid-size">
                      BIG <br />8 - K
                    </div>
                    <div className="game-bid-spades game-bid-size"></div>
                    <div className="game-bid-hearts game-bid-size"></div>
                    <div className="game-bid-small game-bid-size">
                      SMALL <br />A - 6
                    </div>
                    <div className="game-bid-diamonds game-bid-size"></div>
                    <div className="game-bid-clubs game-bid-size"></div>
                  </div>
                  <div
                    onClick={handleClick}
                    className={
                      "game-bid-tiger" +
                      ("tiger" === selectedBet ? " active" : "")
                    }
                    id="tiger"
                  >
                    <span className="text-bet">TIGER</span>
                    {bets.tiger > 0 && <h3>{bets.tiger}</h3>}
                  </div>
                </div>
              </div>
              <div className="game-chips">
                <Chips />
              </div>
              {win}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
