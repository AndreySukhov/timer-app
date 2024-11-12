import styles from './styles.module.css';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { AddItemForm } from '../AddItemForm';
import { FieldType } from '../AddItemForm';
import { useSetSessionSettings } from '../../api';
import { TAddRowProps } from './types';

export const AddRow = ({settings, onUpdate, isAddADisabled}: TAddRowProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { mutateAsync } = useSetSessionSettings();


    const closeModal = () => setIsOpen(false)

    const onSubmit = async (data: Omit<FieldType, 'type'> & {pulse_current: boolean}) => {
        const newData = [data, ...settings]
        const res = await mutateAsync(newData)
        onUpdate(res)
        
    }

    return (
        <div className={styles.wrap}>
            <Button
                shape="circle"
                onClick={() => setIsOpen(true)}
                disabled={isAddADisabled}
                icon={<PlusOutlined />} className={styles.button} />

            <Modal title="Добавить элемент" open={isOpen} onOk={closeModal} onCancel={closeModal} footer={null} className={styles.modal}>
                <AddItemForm onClose={closeModal} onSubmit={onSubmit} />
            </Modal>
        </div>
    )
}