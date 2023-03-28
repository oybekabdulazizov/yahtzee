import React, { useContext } from 'react';
import { FunctionsContext, StateContext } from './contexts/game.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquare,
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

import './Die.css';

export default function Die({ id, val }) {
  const { rollsLeft, rolling, locked } = useContext(StateContext);
  const { toggleDie } = useContext(FunctionsContext);

  const dices = {
    0: faSquare,
    1: faDiceOne,
    2: faDiceTwo,
    3: faDiceThree,
    4: faDiceFour,
    5: faDiceFive,
    6: faDiceSix,
  };

  let classDie = 'Die';
  if (locked[id]) classDie += ' Die-locked';
  if (rolling && !locked[id]) classDie += ' Die-rolling';

  return (
    <FontAwesomeIcon
      icon={dices[val]}
      size='2xl'
      className={classDie}
      onClick={() => toggleDie(id)}
      disabled={rollsLeft < 1}
    />
  );
}
