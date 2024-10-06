import { Button, Card, Flex, Form, Input, InputNumber, Typography } from 'antd'
import { useCallback } from 'react'

interface GroupFormData {
  groupSize: number
  people: string
}

export interface GroupFormResult {
  groupSize: number
  people: string[]
}

interface GroupFormProps {
  onSubmit: (data: GroupFormResult) => void
}

export const GroupForm = ({ onSubmit }: GroupFormProps) => {
  const onFinish = useCallback(
    (data: GroupFormData) => {
      const people = data.people
        .replace(',', '')
        .split(' ')
        .filter((s) => s.trim().length > 0)

      onSubmit({ ...data, people })
    },
    [onSubmit],
  )

  return (
    <>
      <Typography.Title style={{ alignSelf: 'center' }}>
        Rozdělení do skupin
      </Typography.Title>
      <Card>
        <Form<GroupFormData>
          name="group-forms"
          initialValues={{ groupSize: 2 }}
          onFinish={onFinish}
        >
          <Flex vertical gap={10}>
            <Form.Item<GroupFormData>
              label="Skupiny po"
              name="groupSize"
              rules={[{ required: true, message: 'Zadej velikost skupin' }]}
            >
              <InputNumber min={2} />
            </Form.Item>

            <Form.Item<GroupFormData>
              label="Jména lidí"
              name="people"
              rules={[
                {
                  required: true,
                  message: 'Zadej jména lidí oddělené mezerami',
                },
              ]}
            >
              {/*  todo: word highlighting in input */}
              <Input.TextArea
                autoSize={{ minRows: 4 }}
                placeholder={'Honza Zuzka Hanka Petr'}
              />
            </Form.Item>
            <Form.Item style={{ alignSelf: 'center' }}>
              <Button type="primary" htmlType="submit">
                Vytvořit skupiny
              </Button>
            </Form.Item>
          </Flex>
        </Form>
      </Card>
    </>
  )
}
