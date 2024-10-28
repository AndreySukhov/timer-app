import { useState } from "react";
import { Battery, Controls, AddRow, RowItem, Electrodes, Complete } from "./components"
import { Flex, Spin } from "antd"
import { useRealTimeStatus, useStatus } from "./api";
import { convertSecondsToMinutes } from "./utils";

export type StatusType = "warning" | "success" | "processing" | "error" | "default"

export const App = () => {

  const { realtimeData, connected } = useRealTimeStatus()
  const { data } = useStatus()

  console.log(connected,'connected')
  console.log(data,'data')
  console.log(realtimeData,'realtimeData')

  const [sessions, setSessions] = useState([])

  const handleDelete = (id: number) => {
    console.log(id,'id')
  }

  if (!data) {
    return <Spin />
  }

  return (
    <div className="main">

        {data.session_status === 'completed' && <Complete />}
        <Battery charge={data?.battery_level}/>
        
        <Controls 
          status={data.session_status}
          timer={convertSecondsToMinutes(data.session_time - data.timer)}
          hasSessions={!!data.session_settings.length}
           />

        {data?.electrode_statuses && data?.electrode_statuses?.length > 0 && (
          <Electrodes electrodes={data?.electrode_statuses}/>
        )}


        {sessions.length > 0 && (
        <Flex style={{marginBlockEnd: 20, width: '100%'}} vertical gap={8} justify="space-between">
        {sessions.map((item) => {
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
        )}




        <AddRow sessions={sessions} />
      </div>
  )
}
