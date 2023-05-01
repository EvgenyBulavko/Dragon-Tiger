import React, { useEffect, useState } from "react";
import { PlayingCard, TypeCard } from "../../common/types";
import { getCardSpriteCoordinates } from "./utility";
import CardSprite from "../../assets/img/cards.svg";
import CardS from "../../assets/img/cards.png";
import Back from "../../assets/img/back.png";
import BackwardIcon from "../../assets/img/backward.svg";
import * as PIXI from "pixi.js";

import "./Card.scss";
import { Sprite, useTick } from "@pixi/react";

export const Card = ({ suit, value, x, y, onClickCard, isMove, speed, index, cursor='default' }: TypeCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({
    suit,
    value,
  });

  const [xCard, setXCard] = useState(x);
  const [width, setWidth] = useState(100);
  const [yCard, setYCard] = useState(y);
  const [isFlip, setIsFlip] = useState(false);
  const [ticker, setTicker] = useState<PIXI.Ticker | null>(null);

  const flip = (ticker: PIXI.Ticker) => {
    if(isFlip){
      setWidth((prev) => {
        const newW = prev + 25;
        return newW;
      })
      setXCard(prev => prev - 12.5)
      if(width >= 100) ticker.stop();
    } 
    else {
      
      setWidth((prev) => {
        const newW = prev - 25;
        return newW;
      });
      if(width <= 0) setIsFlip(true);
      setXCard(prev => prev + 12.5)
    }
  };

  useTick((delta, ticker) => {
    setTicker(ticker);

    if (yCard < 150 && speed) {
      setXCard((prev) => prev + speed.x);
      setYCard((prev) => prev + speed.y);
    }

    if (yCard >= 150) {
      flip(ticker);
      
    }
  }, isMove !== undefined);

  useEffect(() => {
    if (isMove !== undefined && ticker) {
      setXCard(x);
      setYCard(y);
      setWidth(100);
      setIsFlip(false);
      ticker.start();
    }
  }, [isMove, suit, value, index]);

  const SpriteCard = () => {
    let textureBase = PIXI.BaseTexture.from(CardS);
    let texture = new PIXI.Texture(
      textureBase,
      new PIXI.Rectangle(leftCoordinate, topCoordinate, 334, 440)
    );
    if (value === "backward" || (isMove !== undefined && isFlip === false)) {
      textureBase = PIXI.BaseTexture.from(Back);
      texture = new PIXI.Texture(
        textureBase,
        new PIXI.Rectangle(56, 40, 590, 826)
      );
    }

    return (
      <Sprite
        texture={texture}
        x={xCard}
        y={yCard}
        width={width}
        height={140}
        interactive={true}
        cursor={cursor}
        pointerdown={() => {
          if (onClickCard) {
            onClickCard();
          }
        }}
      />
    );
  };

  return <>{SpriteCard()}</>;
};
