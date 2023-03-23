import React from 'react';
import { GameProvider } from './contexts/game.context';

import HeaderDice from './HeaderDice';
import ScoreTable from './ScoreTable';

export default function Game() {
  return (
    <GameProvider>
      <HeaderDice />
      <ScoreTable />
    </GameProvider>
  );
}
