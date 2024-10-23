import { useState } from "react"
import { Battery, Controls, AddRow, RowItem } from "./components"
import { Flex } from "antd"

export type StatusType = "warning" | "success" | "processing" | "error" | "default"

const MOCK = [
 {
  id: 1,
  name: 'Модуляция - 10mA (pulse)',
  status: "success" ,
  time: '0',
  finished: true,
 },
 {
  id: 2,
  name: 'Модуляция - 10mA (pulse)',
  status: "success",
  time: '0',
  finished: true,
 },
 {
  id: 3,
  name: 'Модуляция - 2mA (pulse)',
  status: "warning",
  time: '2:36',
  finished: false,
 },
 {
  id: 4,
  name: 'Модуляция - 1mA (direct)',
  status: "disabled",
  time: '10:00',
  finished: false,
 }
]

export const App = () => {

  const [items, setItems] = useState(MOCK)

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id ))
  }

  return (
    <div className="main">
      <Battery />
      
      <Controls />

      <Flex style={{marginBlockEnd: 20, width: '100%'}} vertical gap={8} justify="space-between">
        {items.map((item) => {
          return (
            <RowItem 
              key={item.id}
              name={item.name}
              finished={item.finished}
              status={item.status as StatusType}
               time={item.time}
               onDelete={() => handleDelete(item.id)}
                />
          )
        })}
      </Flex>

      <AddRow />
    </div>
  )
}
