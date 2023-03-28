import React, { createContext } from 'react';
import useGameState from '../hooks/useGameState';

export const StateContext = createContext();
export const FunctionsContext = createContext();

export function GameProvider(props) {
  const { state, animateRoll, toggleDie, doScore } = useGameState();
  return (
    <StateContext.Provider value={state}>
      <FunctionsContext.Provider value={{ animateRoll, toggleDie, doScore }}>
        {props.children}
      </FunctionsContext.Provider>
    </StateContext.Provider>
  );
}
