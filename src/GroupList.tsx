import { Avatar, Flex, List, Typography } from 'antd'

interface GroupListProps {
  groups: Array<Array<string>>
}

const generateColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const GroupList = ({ groups }: GroupListProps) => {
  return (
    <List
      header={<Typography.Text strong>Skupiny</Typography.Text>}
      bordered
      dataSource={groups}
      renderItem={(item, i) => (
        <List.Item>
          <Flex align={'center'} gap={15}>
            <Avatar style={{ backgroundColor: generateColor() }}>
              {i + 1}
            </Avatar>
            <Typography.Text>{item.join(', ')}</Typography.Text>
          </Flex>
        </List.Item>
      )}
    />
  )
}
