import React from 'react';

import './RuleRow.css';

export default function RuleRow({ name, description, score, doScore }) {
  const disabled = score !== undefined;
  let classes = `RuleRow-row ${disabled ? `disabled` : ``}`;
  return (
    <tr onClick={disabled ? null : doScore} className={classes}>
      <td disabled={disabled}>{name}</td>
      <td>{disabled ? score : description}</td>
    </tr>
  );
}
