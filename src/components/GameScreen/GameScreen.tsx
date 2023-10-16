import styles from "./styles.module.scss";
import { CELLS_COUNT } from "../../consts";
import Cell from "../Cell/Cell";

export default function GameScreen(): JSX.Element {
  const getCellsForField = (count: number): JSX.Element[] => {
    return Array.from({ length: count }, (_, index) => (
      <Cell key={index}/>
    ));
  };

  return (
    <section className={styles.screen}>
      <div className={styles.gameField}>{getCellsForField(CELLS_COUNT)}</div>
    </section>
  );
}
