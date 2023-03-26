import React from 'react';

export default function RuleRow({ name, description, score, doScore }) {
  const disabled = score !== undefined;
  return (
    <tr onClick={disabled ? null : doScore}>
      <td>{name}</td>
      <td>{disabled ? score : description}</td>
    </tr>
  );
}
