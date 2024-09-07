"use client";

import styles from "./Overlay.module.css";
import { usePlayer } from "@/app/CharacterContext";

export default function Overlay() {
  const {
    health,
    movementPoints,
    actionPoints,
    resetMovementPoints,
    resetActionPoints,
  } = usePlayer();

  const finishTurn = () => {
    resetMovementPoints(3);
    resetActionPoints(6);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.spells}></div>
      <div className={styles.info}>
        <div className={styles.health}>
          <p>{health}</p>
        </div>
        <div className={styles.points}>
          <div className={styles.pa}>
            <p>{actionPoints}</p>
          </div>
          <div className={styles.pm}>
            <p>{movementPoints}</p>
          </div>
        </div>
      </div>
      <div className={styles.pass}>
        <button type="button" onClick={finishTurn}>
          Finish turn
        </button>
      </div>
    </div>
  );
}
