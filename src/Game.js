import React from 'react';
import { GameProvider } from './contexts/game.context';

import './Game.css';

import HeaderDice from './HeaderDice';
import ScoreTable from './ScoreTable';

export default function Game() {
  return (
    <div className='Game'>
      <GameProvider>
        <HeaderDice />
        <ScoreTable />
      </GameProvider>
    </div>
  );
}
