import type { TElectrodesProps } from "./types"
import styles from './styles.module.css';

export const Electrodes = ({electrodes}: TElectrodesProps) => {
    return (
        <ul className={styles.wrap}>
            {electrodes.map((elecrode, i) => {
                return (
                    <li className={`${styles.elecrode} ${styles[`elecrode--${elecrode}`]}`} key={i}>
                        {i+1}
                    </li>
                )
            })}
        </ul>     
    )
}