import React from "react";
import { observer } from "mobx-react";
import { useGameStore } from "../../store/gameStore";
import { HelpInfo } from "../HelpInfo";
import { ModalProps } from "../../common/types";

import "./Options.scss";

export const Options = observer(({ visible = false, onClose }: ModalProps) => {
  const { onResetBalance,selectHelp, isHelp } = useGameStore();
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <>
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">Options</h3>
            <span className="modal-close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <div className="modal-content">
              {!isHelp && <div className="modal-content-btn">
                <a href='/' className="btn-green-tr">Home</a>
                <div className="btn-green-tr" onClick={selectHelp}>
                  Help{" "}
                </div>
                <div className="btn-green-tr" onClick={onResetBalance}>
                  Reset €{" "}
                </div>
              </div> }
              {isHelp && <HelpInfo />}
            </div>
          </div>
          <div className="modal-footer">
            <div className="btn-green-tr" onClick={onClose}>
              Close
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
