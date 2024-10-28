import { Input, Form, Select, Button, Flex } from "antd"
import type { FormProps } from 'antd';


export type FieldType = {
    type: 'pulse' | 'direct';
    timer: number;
    current: number;
  };

  const requiredMessage = 'Field required'


export const AddItemForm = ({ onClose, onSubmit} : { onClose: () => void, onSubmit: (data: Omit<FieldType, 'type'> & {pulse_current: boolean}) => void }) => {

    const [form] = Form.useForm();


    const handleSubmit: FormProps<FieldType>['onFinish'] = (values) => {
     
        onSubmit({timer: Number(values.timer), current: Number(values.current), pulse_current: form.getFieldValue('type') === 'pulse'})
        onClose()
    }

    return (
        <Form autoComplete="off" onFinish={handleSubmit} form={form}>
             <Form.Item<FieldType>
                 label="Type"
                    rules={[{ required: true, message: requiredMessage }]}
             >
                <Select onChange={(val) => {
                    form.setFieldValue('type', val)
                }}>
                    <Select.Option value="pulse">Pulse</Select.Option>
                    <Select.Option value="direct">Direct</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item<FieldType>
                label="Time"
                name="timer"
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
                <Input type="number" min={1} max={60} />
            </Form.Item>
            <Form.Item<FieldType>
                label="Current"
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
                <Input type="number" min={1} max={15} />
            </Form.Item>
            <Form.Item >
                <Flex gap={12} justify="end">
                    <Button color="default" variant="outlined" onClick={onClose}>Cancel</Button>

                    <Button type="primary" htmlType="submit">Submit</Button>
                </Flex>
            </Form.Item>
        </Form>
    )
}