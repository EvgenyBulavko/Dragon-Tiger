import React, { useState } from 'react';
import './App.scss';
import card from '../../assets/img/card.png';
import chip from '../../assets/img/chip.png';
import { Stage, Sprite, Container } from '@pixi/react';
import { Card } from '../Card';
import * as PIXI from 'pixi.js';

export const App = () => {
  const [scale, setScale] = useState({ x: 1, y: 1 });
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

  return (
    <div className='app'>
      <Stage width={1000} height={500} options={{autoDensity: true, backgroundColor: 0x012b30 }}>
    {/* <Sprite
      x={250}
      y={250}
      anchor={[0.5, 0.5]}
      interactive={true}
      scale={scale}
      pointerdown={() => {
        console.log("click");
        setScale({ x: scale.x*1.25, y: scale.y*1.25 })
      }}
    ><Card suit='clubs' value='2' /></Sprite> */}
    <Card suit='clubs' value='2' />
  </Stage>
  <img src={chip}/>
    </div>
  )
}
