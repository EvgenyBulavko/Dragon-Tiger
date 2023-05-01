import React from "react";
import { Chip } from "../Chip/";
import { observer } from "mobx-react";
import "./Chips.scss";

export const Chips = observer(() => {
  return (
    <>
      <div className="chips-wrapper">
        <Chip id="5" isBet={false} />
        <Chip id="10" isBet={false} />
        <Chip id="25" isBet={false} />
        <Chip id="50" isBet={false} />
        <Chip id="100" isBet={false} />
      </div>
    </>
  );
});
