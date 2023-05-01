import React from "react";
import { observer } from "mobx-react";
import { Chip } from "../Chip";
import { useEffect, useState } from "react";
import "./DragonCell.scss"

interface PropsDragon {
    bet: number;
    selectedBet: string | null;
    className: string;
    textBody?: any;
    id: string;
}

export const DragonСell = observer(({bet,selectedBet,className,textBody,id}:PropsDragon) => { 
    const [dragonChips, setDragonChips] = useState<JSX.Element[]>([]);

    useEffect(() => {
        stackBetsDragon(bet);
      }, [bet])
    
      const stackBetsDragon = (bet: number) => {
        const chips: JSX.Element[] = [];
        let betClone = bet;
        console.log(betClone);
        while (betClone > 0) {
          if (betClone - 100 >= 0) {
            chips.push(<div className="stack-bet"><Chip id="100" isBet={true} betValue={id}/></div>);
            betClone = betClone - 100;
          } else if (betClone - 50 >= 0) {
            chips.push(<div className="stack-bet"><Chip id="50" isBet={true} betValue={id}/></div>);
            betClone = betClone - 50;
          } else if (betClone - 25 >= 0) {
            chips.push(<div className="stack-bet"><Chip id="25" isBet={true} betValue={id}/></div>);
            betClone = betClone - 25;
          } else if (betClone - 10 >= 0) {
            chips.push(<div className="stack-bet"><Chip id="10" isBet={true} betValue={id}/></div>);
            betClone = betClone - 10;
          } else if (betClone - 5 >= 0) {
            chips.push(<div className="stack-bet"><Chip id="5" isBet={true} betValue={id}/></div>);
            betClone = betClone - 5;
          }
        }

        console.log(chips);
        setDragonChips(chips);
      };
    
    
    return (<div
    className={
        id === selectedBet
        ? className + " active" + " bet-container"
        : className + " bet-container"
    }
  >
    <span className="text-bet">{textBody}</span>
    {bet > 0 && (
     // <div className="stack-bets">
     <>
        {
       // stackBets(bets.dragon)
      dragonChips
        }</>
        //</div>
    )}
  </div>);});