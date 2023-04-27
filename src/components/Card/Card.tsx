import React, { useEffect, useState } from 'react';
import { PlayingCard, TypeCard } from '../../common/types';
import { getCardSpriteCoordinates } from './utility';
import CardSprite from '../../assets/img/cards.svg';
import CardS from '../../assets/img/cardsSun.png';
import BackwardIcon from '../../assets/img/backward.svg';
import * as PIXI from 'pixi.js';

import './Card.scss';
import { Sprite } from '@pixi/react';

export const Card = ({ suit, value, x, y, onClick }: TypeCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({ suit, value });
  
  const [xCard, setXCard] = useState(x);
  const [yCard, setYCard] = useState(y);
  // const [texture, setTexture] = useState<any>(PIXI.Texture.from(CardS, { resourceOptions: 1 }));


  const spriteCard = () => {
     
        const textureBase = PIXI.BaseTexture.from(CardS);
        const texture = new PIXI.Texture(textureBase, new PIXI.Rectangle(leftCoordinate,topCoordinate,340,470))

      return <Sprite texture={texture} x={xCard} y={yCard} width={100} height={140} interactive={true}   pointerdown={() => {
        console.log("click");
        if(onClick){
          onClick();
        }}} />
      
  }

  
  // const ImgTable = () => (
  //   <CardSprite viewBox={`${leftCoordinate} ${topCoordinate} 140 190`} />
  // );

  return (
    <>
      {/* <div className=".cardFront"> */}
      {/* <Sprite
      x={250}
      y={250}
      anchor={[0.5, 0.5]}
      texture={texture}
      scale={scale}
      pointerdown={() => {
        console.log("click");
        setScale({ x: scale.x*1.25, y: scale.y*1.25 })
      }} */}
      
      {spriteCard()}
      {/* </div> */}
      {/* <div className=".cardBack">
        <BackwardIcon />
      </div> */}
    </>
  );
};
