import style from './styles.module.css';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { AddItemForm } from '../AddItemForm';
import { FieldType } from '../AddItemForm';
import { useSetSessionSettings } from '../../api';

export const AddRow = ({sessions}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { mutate } = useSetSessionSettings();


    const closeModal = () => setIsOpen(false)

    const onSubmit = (data: Omit<FieldType, 'type'> & {pulse_current: boolean}) => {
        console.log(data, 'data')
        console.log(sessions,'sessions')
        mutate([data, ...sessions])
        
    }

    return (
        <div className={style.wrap}>
            <Button color="primary" variant="solid" size='large' onClick={() => setIsOpen(true)}>
                <PlusOutlined />
            </Button>
            <Modal title="Добавить элемент" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null}>
                <AddItemForm onClose={closeModal} onSubmit={onSubmit} />
            </Modal>
        </div>
    )
}