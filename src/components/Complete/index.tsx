import { Modal, Button } from "antd"
import { TCompleteProps } from "./types"

export const Complete = ({onComandUpdate}: TCompleteProps) => {
    return (
        <Modal open footer={null} title="Complete" closable={false}>
            <Button onClick={() => onComandUpdate('restart')} block size="large">Ок</Button>
        </Modal>   
    )
}