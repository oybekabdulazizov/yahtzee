import React from 'react';

import './Die.css';

export default function Die({ idx, toggleDie, locked, val }) {
  const handleToggle = () => {
    toggleDie(idx);
  };

  let classDie = 'Die ' + (locked ? 'Die-locked' : '');
  return (
    <button onClick={handleToggle} className={classDie}>
      {val}
    </button>
  );
}
