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

export const Card = ({ suit, value, x, y, onClick, isFirst }: TypeCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({
    suit,
    value,
  });

  const [xCard, setXCard] = useState(x);
  const [width, setWidth] = useState(100);
  const [yCard, setYCard] = useState(y);
  const [isFlip, setIsFlip] = useState(false);
  const [ticker, setTicker] = useState<PIXI.Ticker | null>(null);
  // const [texture, setTexture] = useState<any>(PIXI.Texture.from(CardS, { resourceOptions: 1 }));
  const flip = (ticker: PIXI.Ticker) => {
    if(isFlip){
      setWidth((prev) => {
        const newW = prev + 25;
        if(newW > 100) ticker.stop();
        return newW;
      })
      setXCard(prev => prev - 12.5)
    } 
    else {
      
      setWidth((prev) => {
        const newW = prev - 25;
        
        if(newW <= 0) setIsFlip(true);
        return newW;
      });
      setXCard(prev => prev + 12.5)
    }
  };
  useTick((delta, ticker) => {
    setTicker(ticker);

    if (!isFirst && yCard < 150) {
      setXCard((prev) => prev - 16);
      setYCard((prev) => prev + 10);
    }

    if (isFirst && yCard < 150) {
      setXCard((prev) => prev - 44);
      setYCard((prev) => prev + 10);
    }

    if (yCard >= 150) {
      flip(ticker);
      
    }
  }, isFirst !== undefined);

  useEffect(() => {
    // console.log(isFirst, ticker);
    if (isFirst !== undefined && ticker) {
      setXCard(x);
      setYCard(y);
      setWidth(100);
      setIsFlip(false);
      // console.log("+");
      ticker.start();
    }
  }, [isFirst, suit, value]);

  const SpriteCard = () => {
    let textureBase = PIXI.BaseTexture.from(CardS);
    let texture = new PIXI.Texture(
      textureBase,
      new PIXI.Rectangle(leftCoordinate, topCoordinate, 334, 440)
    );
    if (value === "backward" || (isFirst !== undefined && isFlip === false)) {
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
        pointerdown={() => {
          if (onClick) {
            onClick();
          }
        }}
      />
    );
  };

  return <>{SpriteCard()}</>;
};
