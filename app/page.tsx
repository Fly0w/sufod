"use client";

import Grid from "@/components/Grid";
import Overlay from "@/components/Overlay";
import styles from "./page.module.css";
import { useState } from "react";
import { Position } from "@/types";
import { CharacterContext } from "@/app/CharacterContext";

export default function Home() {
  const [positionPlayer, setPositionPlayer] = useState<Position>({
    x: 10,
    y: 7,
  });

  const assignNewPosition = (position: Position) => {
    setPositionPlayer({
      x: position.x,
      y: position.y,
    });
  };
  return (
    <CharacterContext>
      <div className={styles.page}>
        <Grid pos={positionPlayer} setPos={assignNewPosition} />
        <Overlay />
      </div>
    </CharacterContext>
  );
}
