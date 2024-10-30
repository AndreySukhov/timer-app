import styles from './styles.module.css';
import { Button, Statistic } from 'antd';
import { TControlsProps } from './types';

export const Controls = ({ timer, status, hasSettings, onComandUpdate } : TControlsProps) => {
    return (
        <div className={styles.wrap}>
            <Button
                color="primary"
                variant="solid"
                size='large'
                onClick={() => onComandUpdate('start')}
                disabled={!(status === 'stop' || status === 'pause') || !hasSettings}
            >
                Старт
            </Button>

            <Button 
                color="primary"
                variant="solid"
                size='large'
                disabled={status !== 'run'}
                onClick={() => onComandUpdate('pause')}
                >
                Пауза
            </Button>

            <Statistic  value={timer} />

            <Button
                color="default"
                variant="solid"
                size='large'
                disabled={!(status === 'run' || status === 'pause')}
                onClick={() => onComandUpdate('stop')}
                >
                Стоп
            </Button>
        </div>
    )
}