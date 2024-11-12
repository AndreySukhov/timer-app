import styles from './styles.module.css';
import { TControlsProps } from './types';
import { Square } from '../../assets/icons/square';
import { Play } from '../../assets/icons/play';

export const Controls = ({ status, hasSettings, onComandUpdate, children } : TControlsProps) => {
    return (
        <>

        {/* <div>
            <Button 
                color="primary"
                variant="solid"
                size='large'
                disabled={status !== 'run'}
                onClick={() => onComandUpdate('pause')}
            >
                Пауза
            </Button>

        </div> */}
           

        

           <button
                className={`${styles.button} ${styles['button-stop']}`}
                disabled={!(status === 'run' || status === 'pause')}
                onClick={() => onComandUpdate('stop')}
            >
                <Square />
            </button>

 

            {children}

            <button
                className={`${styles.button} ${styles['button-start']}`}
                onClick={() => onComandUpdate('start')}
                disabled={!(status === 'stop' || status === 'pause') || !hasSettings}
            >
                <Play />
            </button>
        </>
    )
}