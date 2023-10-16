import styles from "./styles.module.scss";

type Props = {
    onClick:(number: number) => void,
    playerCell: number
}

export default function MoveButton({onClick, playerCell}: Props): JSX.Element {
  return <button onClick={() => onClick(playerCell)} className={styles.button}>Move</button>;
}
