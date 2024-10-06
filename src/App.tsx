import { Flex } from 'antd'
import { GroupForm, GroupFormResult } from './GroupForm.tsx'
import { GroupList } from './GroupList.tsx'
import { useState } from 'react'

const assignToGroups = (data: GroupFormResult) => {
  const numberOfGroups = Math.ceil(data.people.length / data.groupSize)

  const groups: Array<Array<string>> = [
    ...Array(numberOfGroups)
      .fill(1)
      .map(() => []),
  ]

  for (const person of data.people) {
    let assigned = false

    while (!assigned) {
      const groupIndex = Math.floor(Math.random() * numberOfGroups)

      if (groups[groupIndex].length < data.groupSize) {
        groups[groupIndex].push(person)
        assigned = true
      }
    }
  }

  return groups
}

function App() {
  const onSubmit = (data: GroupFormResult) => {
    setGroups(assignToGroups(data))
  }

  const [groups, setGroups] = useState<Array<Array<string>> | null>(null)

  return (
    <Flex justify="center">
      <Flex style={{ maxWidth: 700, flexGrow: 1 }} vertical gap={40}>
        <GroupForm onSubmit={onSubmit} />
        {groups && <GroupList groups={groups} />}
      </Flex>
    </Flex>
  )
}

export default App
