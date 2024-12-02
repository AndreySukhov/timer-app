import styles from './styles.module.css';
import { TControlsProps } from './types';
import { Square } from '../../assets/icons/square';
import { Play } from '../../assets/icons/play';

export const Controls = ({ status, hasSettings, onComandUpdate, children } : TControlsProps) => {
    return (
        <>        

           <button
                className={`${styles.button} ${styles['button-stop']}`}
                disabled={status === 'stop' || !(status === 'run' || status === 'pause')}
                onClick={() => onComandUpdate('stop')}
            >
                <Square />
            </button>

            {children}

         <>
         {status === 'run' ? (
        <button 
            className={`${styles.button} ${styles['button-start']}`}
            disabled={status !== 'run'}
            onClick={() => onComandUpdate('pause')}
            >
                Пауза
        </button>
         ) : (
            <button
                className={`${styles.button} ${styles['button-start']}`}
                onClick={() => onComandUpdate('start')}
                disabled={!(status === 'stop' || status === 'pause') || !hasSettings}
            >
                <Play />
            </button>
         )}
        </>

        
        </>
    )
}