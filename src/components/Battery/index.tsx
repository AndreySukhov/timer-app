import style from './styles.module.css';
import { TBatteryProps } from './types';
export const Battery = ({charge = 0}: TBatteryProps) => {
    return (
        <div className={style.wrap}>
            <div className={style.battery}>
                {charge} % 
            </div>
        </div>
    )
}