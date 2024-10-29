import { Flex, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { TRowItemProps } from "./types";
import style from './styles.module.css';

export const RowItem = ({name, status, time,actionsDisabled, onDelete}: TRowItemProps) => {
    return (
        <Flex gap={12} style={{width: '100%'}} align="center">
            <div className={`${style[`badge--${status}`]} ${style.name}`}>{name}</div>
            <div className={`${style[`badge--${status}`]} ${style.time}`}>{status === 'completed' ? 'OK' : time }</div>
            <Button onClick={onDelete} style={{marginLeft: 'auto'}} disabled={actionsDisabled}><CloseOutlined /></Button>
        </Flex>
    )
}