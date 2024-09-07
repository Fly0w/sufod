"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { PlayerState, PlayerActions } from "@/types";

const PlayerContext = createContext<(PlayerState & PlayerActions) | undefined>(
  undefined
);

export function CharacterContext({ children }: { children: ReactNode }) {
  const [playerState, setPlayerState] = useState<PlayerState>({
    health: 100,
    movementPoints: 3,
    actionPoints: 6,
  });

  // Fonctions pour modifier les états
  const increaseHealth = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      health: prevState.health + amount,
    }));
  };

  const decreaseHealth = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      health: Math.max(prevState.health - amount, 0),
    }));
  };

  const increaseMovementPoints = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      movementPoints: prevState.movementPoints + amount,
    }));
  };

  const decreaseMovementPoints = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      movementPoints: Math.max(prevState.movementPoints - amount, 0),
    }));
  };

  const resetMovementPoints = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      movementPoints: amount,
    }));
  };

  const increaseActionPoints = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      actionPoints: prevState.actionPoints + amount,
    }));
  };

  const decreaseActionPoints = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      actionPoints: Math.max(prevState.actionPoints - amount, 0),
    }));
  };

  const resetActionPoints = (amount: number) => {
    setPlayerState((prevState) => ({
      ...prevState,
      actionPoints: amount,
    }));
  };

  return (
    <PlayerContext.Provider
      value={{
        ...playerState,
        increaseHealth,
        decreaseHealth,
        increaseMovementPoints,
        decreaseMovementPoints,
        increaseActionPoints,
        decreaseActionPoints,
        resetMovementPoints,
        resetActionPoints,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
}
