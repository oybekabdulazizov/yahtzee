import React, { useContext } from 'react';
import { FunctionsContext } from './contexts/game.context';

import './Die.css';

export default function Die({ id, locked, val }) {
  const { toggleDie } = useContext(FunctionsContext);

  let classDie = 'Die ' + (locked ? 'Die-locked' : '');
  return (
    <button onClick={() => toggleDie(id)} className={classDie}>
      {val}
    </button>
  );
}
