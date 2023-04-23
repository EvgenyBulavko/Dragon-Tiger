import React, { useState } from 'react';
import { PlayingCard } from '../../common/types';
import { getCardSpriteCoordinates } from './utility';
import CardSprite from '../../assets/img/cards.svg';
import CardS from '../../assets/img/cardsSun.png';
import BackwardIcon from '../../assets/img/backward.svg';
import * as PIXI from 'pixi.js';

import './Card.scss';
import { Sprite } from '@pixi/react';

export const Card = ({ suit, value }: PlayingCard) => {
  const { leftCoordinate, topCoordinate } = getCardSpriteCoordinates({ suit, value });
  
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const [xCard, setXCard] = useState(750);
  const [yCard, setYCard] = useState(150);

  const ImgTable = () => {
    const texture = PIXI.Texture.from(CardS, { resourceOptions: 1 });
     let rectangle = new PIXI.Rectangle(0,0,140,190);
     
    // console.log(rectangle);
    console.log(texture);
     texture.frame = rectangle;
     console.log(texture.frame);
      return <Sprite texture={texture} x={xCard} y={yCard} width={150} height={250} interactive={true}   pointerdown={() => {
        console.log("click");
        setXCard(xCard+1);
        setYCard(yCard+1);
      }}/>;
  }

  const load = async() =>{
    return PIXI.Texture.from(CardS, { resourceOptions: 1 });
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
      
      <ImgTable  />
      {/* </div> */}
      {/* <div className=".cardBack">
        <BackwardIcon />
      </div> */}
    </>
  );
};
