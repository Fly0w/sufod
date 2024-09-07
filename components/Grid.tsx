"use client";

import styles from "./Grid.module.css";
import { useState, useEffect } from "react";
import { CellData, Position } from "@/types";
import { usePlayer } from "@/app/CharacterContext";

type GridProps = {
  pos: Position;
  setPos: (position: Position) => void;
};

const initializeGrid = () => {
  const gridSize = {
    x: 15,
    y: 15,
  };

  const gridArray: CellData[] = [];
  let indexGlobal = 0;
  for (let indexY = gridSize.y - 1; indexY >= 0; indexY--) {
    for (let indexX = 0; indexX < gridSize.x; indexX++) {
      gridArray.push({
        id: indexGlobal,
        x: indexX,
        y: indexY,
        data: {
          isOccupied: false,
          isMoveOk: false,
        },
      });
      indexGlobal++;
    }
    indexGlobal++;
  }

  return gridArray;
};

export default function Grid({ pos, setPos }: GridProps) {
  const {
    health,
    movementPoints,
    actionPoints,
    increaseHealth,
    decreaseHealth,
    increaseMovementPoints,
    decreaseMovementPoints,
  } = usePlayer();

  const [grid, setGrid] = useState<CellData[]>([]);

  useEffect(() => {
    setGrid(initializeGrid());
  }, []);

  const gridCss = (celldata: CellData) => {
    let classNames = `${styles.cell}`;

    (celldata.x + celldata.y) % 2 === 0
      ? (classNames += ` ${styles.even}`)
      : (classNames += ` ${styles.odd}`);

    if (pos.x === celldata.x && pos.y === celldata.y) {
      classNames += ` ${styles.currentPosition}`;
    }

    return classNames;
  };

  const moveCharacter = (data: CellData) => {
    const distance = Math.abs(pos.x - data.x) + Math.abs(pos.y - data.y);

    console.log(distance);

    if (movementPoints >= distance) {
      setPos({ x: data.x, y: data.y });
      decreaseMovementPoints(distance);
      return;
    }

    console.log("Not enough PM");
    return;
  };

  return (
    <div className={styles.test}>
      {grid.map((gridCell: CellData) => (
        <div
          onClick={() => moveCharacter(gridCell)}
          className={gridCss(gridCell)}
          key={gridCell.id}
        >
          {/* ({gridCell.x}, {gridCell.y}) */}
        </div>
      ))}
    </div>
  );
}
