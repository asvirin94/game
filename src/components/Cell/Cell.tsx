import Player from "../Player/Player";
import styles from "./styles.module.scss";

type props = {
  onMouseOver: (index: number) => void;
  onMouseClick: (index: number) => void;
  index: number;
  activeCell: number;
  playersCell: number;
  cellsAvailableToMove: number[];
  isShowAvailableCells: boolean;
};

export default function Cell({
  onMouseOver,
  onMouseClick,
  index,
  activeCell,
  playersCell,
  cellsAvailableToMove,
  isShowAvailableCells,
}: props): JSX.Element {
  return (
    <div
      className={`${styles.cell}  ${
        cellsAvailableToMove.includes(index) && (isShowAvailableCells)
          ? styles.availableToMove
          : ''
      } ${(activeCell === index && cellsAvailableToMove.includes(index) && isShowAvailableCells)? styles.active : ''}`}
      onMouseOver={() => onMouseOver(index)}
      onClick={() => onMouseClick(index)}
    >
      {playersCell === index ? <Player /> : null}
    </div>
  );
}
