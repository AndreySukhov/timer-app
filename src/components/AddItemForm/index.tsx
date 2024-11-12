import { Input, Form, Select, Radio, Button, Flex } from "antd"
import type { FormProps } from 'antd';
import styles from './styles.module.css'

export type FieldType = {
    type: 'pulse' | 'direct';
    timer: number;
    current: number;
  };

  const requiredMessage = 'Field required'


export const AddItemForm = ({ onClose, onSubmit} : { onClose: () => void, onSubmit: (data: Omit<FieldType, 'type'> & {pulse_current: boolean}) => void }) => {

    const [form] = Form.useForm();


    const handleSubmit: FormProps<FieldType>['onFinish'] = (values) => {
        console.log(form.getFieldValue('type'),'form.getFieldValue()')
     
        onSubmit({timer: Number(values.timer), current: Number(values.current), pulse_current: form.getFieldValue('type') === 'pulse'})
        onClose()
    }

    return (
        <Form autoComplete="off" onFinish={handleSubmit} form={form} layout="vertical" className={styles.form}>
             <Form.Item<FieldType>
                className={styles['form-item']}
                label="Type"
                rules={[{ required: true, message: requiredMessage }]}
             >
                 <Radio.Group name="type" onChange={(e) =>{
                    form.setFieldValue('type', e.target.value)
                 } }>
                    <Radio.Button value="pulse">Pulse</Radio.Button>
                    <Radio.Button value="direct">Direct</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Flex gap={32}>
                <Form.Item<FieldType>
                    label="Time"
                    name="timer"
                    className={styles['form-item']}
                    rules={[{ required: true, message: requiredMessage },
                    {
                        validator: (_, value) => {
                            const parsedValue = Number(value)

                            if (parsedValue >= 1 && parsedValue <= 60) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The input should be number from 1 to 60'));
                        },
                    },
                ]}
                    >
                    <Input type="number" min={1} max={60} placeholder="1 to 60 min" />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Current"
                    className={styles['form-item']}
                    name="current"
                    rules={[{ required: true, message: requiredMessage },  {
                        validator: (_, value) => {
                            const parsedValue = Number(value)
                            if (parsedValue >= 1 && parsedValue <= 15) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The input should be number from 1 to 15'));
                        },
                    },]}
                    >
                    <Input type="number" min={1} max={15} placeholder="1 to 15 min"  />
                </Form.Item>
            </Flex>
            
            <Form.Item >
                <Button htmlType="submit" size="large" block >Confirm</Button>
            </Form.Item>
        </Form>
    )
}