import React from "react";
import { observer } from "mobx-react";
import { useGameStore } from "../../store/gameStore";

import "./Settings.scss";

export const Settings = observer(() => {
  const { selectVolume,selectOption, isVolume } = useGameStore();
  const handleClickVolume = () => {
    selectVolume();
  };
  const handleClickOption = () => {
    selectOption();
  };

  return (
    <>
      <div className="settings">
        <div
          className={
            isVolume === true
              ? "settings-volume button active-volume"
              : "settings-volume button no-active-volume"
          }
          onClick={handleClickVolume}
        ></div>
         <div
          className={"settings-menu button"}
          onClick={handleClickOption}
        ></div>
      </div>
    </>
  );
});
