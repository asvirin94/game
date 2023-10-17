/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./styles.module.scss";
import { CELLS_COUNT, DEFAULT_MOVE_RANGE } from "../../consts";
import Cell from "../Cell/Cell";
import { useEffect, useState } from "react";
import MoveButton from "../MoveButton/MoveButton";
import { getCellsAvailableToMove, getRange } from "../../utils";
import ActionPoints from "../ActionPoints/ActionPoints";

export default function GameScreen(): JSX.Element {
  const [activeCell, setActiveCell] = useState(0);
  const [playersCell, setPlayersCell] = useState(1);
  const [cellsAvailableToMove, setCellsAvailableToMove] = useState([-1]);
  const [isShowAvailableCells, setIsShowAvailableCells] = useState(false);
  const [actionPoints, setActionPoints] = useState(DEFAULT_MOVE_RANGE);
  const [movedDistance, setMovedDistance] = useState(0);

  useEffect(() => {
    setCellsAvailableToMove(getCellsAvailableToMove(playersCell, actionPoints))
  }, [actionPoints, playersCell]);

  useEffect(() => {
    setActionPoints((prev) => prev - movedDistance);
  }, [playersCell])

  const onMouseOverHandler = (index: number) => {
    setActiveCell(index);
  };

  const onMouseClickHandler = (index: number) => {
    if (cellsAvailableToMove.includes(index) && actionPoints > 0) {
      setMovedDistance(getRange(playersCell, index));
      setPlayersCell(index);
      
    } else {
      alert("nea");
    }
  };

  const onMoveButtonClickHandler = (index: number) => {
    setIsShowAvailableCells(!isShowAvailableCells);
    setCellsAvailableToMove(getCellsAvailableToMove(index, actionPoints));
  };

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
      <ActionPoints actionPoints={actionPoints} />
      <MoveButton onClick={onMoveButtonClickHandler} playerCell={playersCell} />
      <div className={styles.gameField}>{getCellsForField(CELLS_COUNT)}</div>
    </section>
  );
}
