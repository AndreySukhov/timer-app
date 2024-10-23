import { Input, Form, Select, Button, Flex } from "antd"
import type { FormProps } from 'antd';


type FieldType = {
    type: 'pulse' | 'direct';
    time: number;
    current: number;
  };

  const requiredMessage = 'Field required'


export const AddItemForm = ({ onClose} : { onClose: () => void }) => {

    const [form] = Form.useForm();


    const handleSubmit: FormProps<FieldType>['onFinish'] = (values) => {
        console.log(values, 'values')
        console.log(form.getFieldValue('type'),'form')
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
                name="time"
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