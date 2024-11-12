import styles from './styles.module.css';
import { TBatteryProps } from './types';
import { Progress } from 'antd';
import { LightningIcon } from '../../assets/icons/lightning.tsx'

export const Battery = ({charge = 0}: TBatteryProps) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.battery}>
                {charge} % 
            </div>

            <Progress type="circle"
                strokeColor="#fff"
                trailColor='#292929'    
                percent={charge} format={() => <LightningIcon />}
                size={48}
            />
        </div>
    )
}