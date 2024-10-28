import { Flex } from "antd"
import type { TElectrodesProps } from "./types"
import style from './styles.module.css';

export const Electrodes = ({electrodes}: TElectrodesProps) => {
    return (
        <Flex gap={4} justify="center" className={style.wrap}>
            {electrodes.map((elecrode, i) => {
                return (
                    <div className={`${style.elecrode} ${style[`elecrode--${elecrode}`]}`} key={i}>
                        {i+1}
                    </div>
                )
            })}
        </Flex>     
    )
}