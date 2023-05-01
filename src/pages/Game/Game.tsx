import React, {
  EventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import "./Game.scss";
import { СardDistribution } from "../../components/СardВistribution";
import { Chips } from "../../components/Chips";
import { observer } from "mobx-react";
import { useGameStore } from "../../store/gameStore";
import DragonImg from "../../assets/img/dracon.jpg";
import { Chip } from "../../components/Chip";
import { DragonСell } from "../../components/DragonСell";
import { betsValue } from "../../common/allData";

export const Game = observer(() => {
  const [win, setWin] = useState("");
  const [active, setActive] = useState("");
  const { selectBet, selectedBet, playerBalance, bets } = useGameStore();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (betsValue.includes(e.currentTarget.id)) {
      selectBet(e.currentTarget.id);
    }
  };

  return (
    <div className="game">
      <div className="player-balance">{playerBalance}$</div>
      <div className="game-body">
        <div className="game-body-wrapper-border-external">
          <div className="game-body-wrapper">
            <div className="game-body-wrapper-border">
              <div className="game_container">
                <СardDistribution />
              </div>
              <div className="game-bid">
                <div className="game-bid-dragon-side">
                  <div className="game-bid-dragon-side-wrapper">
                    <div onClick={handleClick} id="dragon_spades">
                      <DragonСell
                        bet={bets.dragon_spades}
                        selectedBet={selectedBet}
                        className="game-bid-spades game-bid-size"
                        id="dragon_spades"
                      />
                    </div>
                    <div onClick={handleClick} id="dragon_hearts">
                      <DragonСell
                        bet={bets.dragon_hearts}
                        selectedBet={selectedBet}
                        className="game-bid-hearts game-bid-size"
                        id="dragon_hearts"
                      />
                    </div>
                    <div onClick={handleClick} id="dragon_big">
                      <DragonСell
                        bet={bets.dragon_big}
                        selectedBet={selectedBet}
                        className="game-bid-big game-bid-size"
                        textBody={["BIG", <br/>,  "8 - K"]}
                        id="dragon_big"
                      />
                    </div>
                    <div onClick={handleClick} id="dragon_diamonds">
                      <DragonСell
                        bet={bets.dragon_diamonds}
                        selectedBet={selectedBet}
                        className="game-bid-diamonds game-bid-size"
                        id="dragon_diamonds"
                      />
                    </div>
                    <div onClick={handleClick} id="dragon_clubs">
                      <DragonСell
                        bet={bets.dragon_clubs}
                        selectedBet={selectedBet}
                        className="game-bid-clubs game-bid-size"
                        id="dragon_clubs"
                      />
                    </div>
                    <div onClick={handleClick} id="dragon_small">
                      <DragonСell
                        bet={bets.dragon_small}
                        selectedBet={selectedBet}
                        className="game-bid-small game-bid-size"
                        textBody={["SMALL", <br/>,  "A - 6"]}
                        id="dragon_small"
                      />
                    </div>
                  </div>
                  <div onClick={handleClick} id="dragon">
                    <DragonСell
                      bet={bets.dragon}
                      selectedBet={selectedBet}
                      className="game-bid-dragon"
                      textBody={["DRAGON", <br/>,  "龍"]}
                      id="dragon"
                    />
                  </div>
                </div>
                <div onClick={handleClick} id="tie">
                    <DragonСell
                      bet={bets.tie}
                      selectedBet={selectedBet}
                      className="game-bid-tie"
                      textBody={["TIE", <br/>,  "8 : 1"]}
                      id="tie"
                    />
                  </div>
                
                <div className="game-bid-tiger-side">
                  <div className="game-bid-tiger-side-wrapper">
                    <div onClick={handleClick} id="tiger_big">
                      <DragonСell
                        bet={bets.tiger_big}
                        selectedBet={selectedBet}
                        className="game-bid-big game-bid-size"
                        textBody={["BIG", <br/>,  "8 - K"]}
                        id="tiger_big"
                      />
                    </div>
                    <div onClick={handleClick} id="tiger_spades">
                      <DragonСell
                        bet={bets.tiger_spades}
                        selectedBet={selectedBet}
                        className="game-bid-spades game-bid-size"
                        id="tiger_spades"
                      />
                    </div>
                    <div onClick={handleClick} id="tiger_hearts">
                      <DragonСell
                        bet={bets.tiger_hearts}
                        selectedBet={selectedBet}
                        className="game-bid-hearts game-bid-size"
                        id="tiger_hearts"
                      />
                    </div>
                    <div onClick={handleClick} id="tiger_small">
                      <DragonСell
                        bet={bets.tiger_small}
                        selectedBet={selectedBet}
                        className="game-bid-small game-bid-size"
                        textBody={["SMALL", <br/>,  "A - 6"]}
                        id="tiger_small"
                      />
                    </div>

                    <div onClick={handleClick} id="tiger_diamonds">
                      <DragonСell
                        bet={bets.tiger_diamonds}
                        selectedBet={selectedBet}
                        className="game-bid-diamonds game-bid-size"
                        id="tiger_diamonds"
                      />
                    </div>
                    <div onClick={handleClick} id="tiger_clubs">
                      <DragonСell
                        bet={bets.tiger_clubs}
                        selectedBet={selectedBet}
                        className="game-bid-clubs game-bid-size"
                        id="tiger_clubs"
                      />
                    </div>
                  </div>
                  <div onClick={handleClick} id="tiger">
                    <DragonСell
                      bet={bets.tiger}
                      selectedBet={selectedBet}
                      className="game-bid-tiger"
                      textBody={["TIGER", <br/>,"虎"]}
                      id="tiger"
                    />
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
