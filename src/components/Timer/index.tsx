import { TTimerProps } from "./types"

import { Progress } from "antd"
import styles from './styles.module.css'

export const Timer = ({totalTime, time, formattedTime}: TTimerProps) => {
    return (
        <Progress type="circle"
        strokeColor="#fff"
        trailColor='#292929'    
        percent={(time / totalTime) * 100} format={() => <span className={styles.text}>{formattedTime}</span>}
        className={styles.progress}
    />
    )
}