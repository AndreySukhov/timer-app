import { Flex, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { TRowItemProps } from "./types";
import styles from './styles.module.css';

export const RowItem = ({name, current, status, time,actionsDisabled, onDelete}: TRowItemProps) => {
    return (
        <Flex gap={12} style={{width: '100%'}} align="center" className={`${styles.wrap} ${styles[`wrap--${status}`]}`}>
            <div className={styles.name}>
                <strong className={styles.label}>{name}</strong>
                {current}mA
            </div>
            <div className={styles.time}>{status === 'completed' ? 'Complete' : time }</div>
            <Button onClick={onDelete} style={{marginLeft: 'auto'}} disabled={actionsDisabled} icon={<CloseOutlined />} />
        </Flex>
    )
}