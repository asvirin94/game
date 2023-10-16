/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./styles.module.scss";
import { CELLS_COUNT } from "../../consts";
import Cell from "../Cell/Cell";
import { useState } from "react";
import MoveButton from "../MoveButton/MoveButton";
import { getCellsAvailableToMove } from "../../utils";

export default function GameScreen(): JSX.Element {
  const [activeCell, setActiveCell] = useState(0);
  const [playersCell, setPlayersCell] = useState(1);
  const [cellsAvailableToMove, setCellsAvailableToMove] = useState([-1]);
  const [isShowAvailableCells, setIsShowAvailableCells] = useState(false);

  const onMouseOverHandler = (index: number) => {
    setActiveCell(index);
  };

  const onMouseClickHandler = (index: number) => {
    setPlayersCell(index);
    console.log(getCellsAvailableToMove(index))
  };

  const onMoveButtonClickHandler = (index: number) => {
    setIsShowAvailableCells(!isShowAvailableCells);
    setCellsAvailableToMove(getCellsAvailableToMove(index));
  }

  const getCellsForField = (count: number): JSX.Element[] => {
    return Array.from({ length: count }, (_, index) => (
      <Cell
        key={index}
        index={index + 1}
        onMouseOver={onMouseOverHandler}
        onMouseClick={onMouseClickHandler}
        activeCell={activeCell}
        playersCell={playersCell}
        cellsAvailableToMove={cellsAvailableToMove}
        isShowAvailableCells={isShowAvailableCells}
      ></Cell>
    ));
  };

  return (
    <section className={styles.screen}>
      <MoveButton onClick={onMoveButtonClickHandler} playerCell={playersCell}/>
      <div className={styles.gameField}>{getCellsForField(CELLS_COUNT)}</div>
    </section>
  );
}
