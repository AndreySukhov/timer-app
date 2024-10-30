import { Modal, Typography, Space, Button } from "antd"
import { TCompleteProps } from "./types"

export const Complete = ({onComandUpdate}: TCompleteProps) => {
    return (
        <Modal open footer={null}>
            <Typography>Complete</Typography>
            <Space size={10} direction="vertical" />
            <Button onClick={() => onComandUpdate('restart')}>Ок</Button>
        </Modal>   
    )
}