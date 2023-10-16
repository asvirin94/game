import styles from './styles.module.scss';

type props = {
    actionPoints: number
}

export default function ActionPoints({actionPoints}: props): JSX.Element {
    return <p className={styles.actionPoints}>Очки действий: {actionPoints}</p>
}