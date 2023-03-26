import React, { useContext } from 'react';
import { FunctionsContext } from './contexts/game.context';
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

export default function Die({ id, locked, val }) {
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

  let classDie = 'Die ' + (locked ? 'Die-locked' : '');
  console.log(dices[val]);
  return (
    <button onClick={() => toggleDie(id)} className={classDie}>
      <FontAwesomeIcon icon={dices[val]} size='2xl' />
    </button>
  );
}
