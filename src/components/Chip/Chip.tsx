import React, { useEffect, useState } from "react";
import chip5 from "../../assets/img/chips/chip5.png";
import chip10 from "../../assets/img/chips/chip10.png";
import chip25 from "../../assets/img/chips/chip25.png";
import chip50 from "../../assets/img/chips/chip50.png";
import chip100 from "../../assets/img/chips/chip100.png";

import { observer } from "mobx-react";
import { useGameStore } from "../../store/gameStore";
import "./Chip.scss";
import { PropsChip } from "../../common/types";

export const Chip = observer((props: PropsChip) => {
  const { makeBet, removeBet } = useGameStore();
  const id = props.id;
  const [imgChip, setImgChip] = useState(chip5);
  const imgChipComp = () => {
    return <img src={imgChip} alt="chip" className="game-chip-img" />;
  };

  useEffect(() => {
    switch (props.id) {
      case "10":
        setImgChip(chip10);
        break;
      case "25":
        setImgChip(chip25);
        break;
      case "50":
        setImgChip(chip50);
        break;
      case "100":
        setImgChip(chip100);
        break;
      default:
        setImgChip(chip5);
    }
  }, [props.id]);

  const makeNewBet = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!props.isBet) {
      makeBet(+e.currentTarget.id);
    } else {
      removeBet(+e.currentTarget.id, props.betValue);
    }
  };
  return (
    <>
      <div className="game-chip" id={id} onClick={makeNewBet}>
        {imgChipComp()}
      </div>
    </>
  );
});
