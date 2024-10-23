import style from './styles.module.css';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { AddItemForm } from '../AddItemForm';

export const AddRow = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const closeModal = () => setIsOpen(false)

    return (
        <div className={style.wrap}>
            <Button color="primary" variant="solid" size='large' onClick={() => setIsOpen(true)}>
                <PlusOutlined />
            </Button>
            <Modal title="Добавить элемент" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
                <AddItemForm onClose={closeModal} />
            </Modal>
        </div>
    )
}