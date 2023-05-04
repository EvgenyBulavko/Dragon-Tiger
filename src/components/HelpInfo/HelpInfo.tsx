import React from "react";
import { observer } from "mobx-react";

import "./HelpInfo.scss";

export const HelpInfo = observer(() => {
  return (
    <>
      <div className="info">
        <h1>PAY TABLE</h1>
        <br />
        <div className="info-text info-margin-text">
          <span>DRAGON / TIGER </span>
          <span>1/1</span>
        </div>
        <div className="info-text info-margin-text">
          <span>TIE </span>
          <span>8/1</span>
        </div>
        <br />
        <div className="info-text info-margin-text">
          <span>BIG WIN </span>
          <span>1/1</span>
        </div>
        <div className="info-text info-margin-text">
          <span>SMALL WIN </span>
          <span>1/1</span>
        </div>
        <div className="info-text info-margin-text">
          <div className="info-icons">
            <div className="info-clubs">
            </div>
            <div className="info-diamonds">
            </div>
            <div className="info-hearts">
            </div >
            <div className="info-spades">
            </div> WIN{" "}
          </div>
          <span>3/1</span>
        </div>
        <br />
        <div className="info-margin-text">
          ALL BIG, SMALL AND SUIT BETS WILL LOSE FOR DRAGON IF A 7 IS DRAWN FOR
          THE DRAGON CARD.
        </div>
        <div className="info-margin-text">
          ALL BIG, SMALL AND SUIT BETS WILL LOSE FOR TIGER IF A 7 IS DRAWN FOR
          THE TIGER CARD.
        </div>
      </div>
    </>
  );
});
