import styles from './styles.module.css';
import { TBatteryProps } from './types';
import { Progress } from 'antd';
import { LightningIcon } from '../../assets/icons/lightning.tsx'

export const Battery = ({charge = 0}: TBatteryProps) => {

    const getColor = () => {
        if (charge < 20) {
            return '#FF453A'
        }

        if (charge < 50) {
            return '#FE9F06'
        }

        return '#fff'
    }

    const color = getColor()

    return (
        <div className={styles.wrap}>
            <div className={styles.battery} style={{color}}>
                {charge} % 
            </div>

            <Progress type="circle"
                strokeColor={color}
                trailColor='#292929'    
                percent={charge} format={() => <LightningIcon fill={color}  />}
                size={48}
            />
        </div>
    )
}