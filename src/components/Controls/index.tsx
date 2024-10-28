import styles from './styles.module.css';
import { Button, Statistic } from 'antd';
import { TControlsProps } from './types';
import { useChangeSessionStatus } from '../../api';

export const Controls = ({ timer, status, hasSessions } : TControlsProps) => {

    const { mutate } = useChangeSessionStatus()

    return (
        <div className={styles.wrap}>
            <Button
                color="primary"
                variant="solid"
                size='large'
                onClick={() => mutate('start')}
                disabled={!(status === 'stop' || status === 'pause') || !hasSessions}
            >
                Старт
            </Button>

            <Button 
                color="primary"
                variant="solid"
                size='large'
                disabled={status !== 'run'}
                onClick={() => mutate('pause')}
                >
                Пауза
            </Button>

            <Statistic  value={timer} />

            <Button
                color="default"
                variant="solid"
                size='large'
                disabled={!(status === 'run' || status === 'pause')}
                onClick={() => mutate('stop')}
                >
                Стоп
            </Button>
        </div>
    )
}