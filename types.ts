export type CellData = {
  id: number;
  x: number;
  y: number;
  data: {
    isOccupied: boolean;
    isMoveOk: boolean;
  };
};

export type Position = {
  x: number;
  y: number;
};

// Définir le type des informations du joueur
export type PlayerState = {
  health: number;
  movementPoints: number;
  actionPoints: number;
};

// Définir le type des actions possibles
export type PlayerActions = {
  increaseHealth: (amount: number) => void;
  decreaseHealth: (amount: number) => void;
  increaseMovementPoints: (amount: number) => void;
  decreaseMovementPoints: (amount: number) => void;
  increaseActionPoints: (amount: number) => void;
  decreaseActionPoints: (amount: number) => void;
  resetMovementPoints: (amount: number) => void;
  resetActionPoints: (amount: number) => void;
};
