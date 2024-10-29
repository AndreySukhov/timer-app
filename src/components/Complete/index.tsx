import { Modal, Typography, Space, Button } from "antd"
import { useChangeSessionStatus } from "../../api"

export const Complete = () => {

    const { mutate } = useChangeSessionStatus()

    return (
        <Modal open footer={null}>
            <Typography>Complete</Typography>
            <Space size={10} direction="vertical" />
            <Button onClick={() => mutate('restart')}>Ок</Button>
        </Modal>   
    )
}