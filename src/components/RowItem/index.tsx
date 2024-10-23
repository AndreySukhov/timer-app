import { Flex, Button, Badge } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { TRowItemProps } from "./types";

export const RowItem = ({name, status, time, finished, onDelete}: TRowItemProps) => {
    return (
        <Flex gap={12} style={{width: '100%'}} align="center">
            <Badge status={status}>{name}</Badge>
            <Badge status={status}>{finished ? 'OK' : time }</Badge>
            <Button onClick={onDelete} style={{marginLeft: 'auto'}}><CloseOutlined /></Button>
        </Flex>
    )
}