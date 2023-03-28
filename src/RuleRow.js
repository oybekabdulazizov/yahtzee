import React, { useContext } from 'react';
import { StateContext } from './contexts/game.context';

import './RuleRow.css';

export default function RuleRow({ name, description, score, doScore }) {
  const { rollsLeft } = useContext(StateContext);

  let disabled = score !== undefined;
  let gameNotStarted = rollsLeft > 2;
  let classes = `RuleRow-row ${disabled ? `disabled` : ``}`;

  return (
    <tr
      onClick={disabled || gameNotStarted ? null : doScore}
      className={classes}
      disabled={disabled || gameNotStarted}
    >
      <td disabled={disabled}>{name}</td>
      <td>{disabled ? score : description}</td>
    </tr>
  );
}
