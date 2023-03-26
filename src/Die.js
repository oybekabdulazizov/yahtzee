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

export default function Die({ id, locked, val, disabled }) {
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

  return (
    <i onClick={() => toggleDie(id)} className={classDie} disabled={disabled}>
      <FontAwesomeIcon icon={dices[val]} size='2xl' className='Die-icon' />
    </i>
  );
}
