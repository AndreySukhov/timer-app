import styles from './styles.module.css';
import { Button, Statistic } from 'antd';

export const Controls = () => {
    return (
        <div className={styles.wrap}>
            <Button color="primary" variant="solid" size='large'>Старт</Button>

            <Statistic  value="30:00" />

            <Button color="default" variant="solid" size='large'>Стоп</Button>
        </div>
    )
}