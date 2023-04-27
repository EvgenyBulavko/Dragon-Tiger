import React from 'react';
import chip from "../../assets/img/100chip.svg";
import { observer } from 'mobx-react';
import { useGameStore } from '../../store/gameStore';

export const Chips = observer(() => {
  const { makeBet} = useGameStore();

  const makeNewBet = (e :   React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    makeBet(+e.currentTarget.id);
  }
  return (
    <>
      <div className="game-chip" id='5' onClick={makeNewBet}>
          <img src={chip} alt="chip" />
        </div>
        <div className="game-chip" id='25' onClick={makeNewBet}>
          <img src={chip} alt="chip" />
        </div>
        <div className="game-chip" id='100' onClick={makeNewBet}>
          <img src={chip} alt="chip" />
        </div>
    </>
  );
});
