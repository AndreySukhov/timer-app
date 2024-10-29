import { useEffect, useState } from "react";
import { Battery, Controls, AddRow, Electrodes, Complete, SettingsList } from "./components"
import { Spin } from "antd"
import { useRealTimeStatus, useStatus, useSetSessionSettings } from "./api";
import { convertSecondsToMinutes } from "./utils";
import { TSetting } from "./api/types";

export const App = () => {

  const { realtimeData } = useRealTimeStatus()
  const { data, isLoading } = useStatus()
  const setSessionSettings = useSetSessionSettings();


  console.log(realtimeData,'realtimeData')

  const [sessions, setSessions] = useState<TSetting[]>([])

  const handleDelete = (index: number) => {
    const newSessions =  sessions.filter((_, i) => i !==index)
    setSessions(newSessions)
    setSessionSettings.mutate(newSessions)
  }

  const handleUpdate = (sessions: TSetting[]) => {
    console.log(sessions,'sessions')
  }

  useEffect(() => {

    if (data?.session_settings) {
      setSessions(data?.session_settings as TSetting[])
    }
  }, [data?.session_settings])

  if (!data && isLoading) {
    return <Spin />
  }

  if (!data) {
    return null
  }

  return (
    <div className="main">

        {data.session_status === 'completed' && <Complete />}
        <Battery charge={data?.battery_level}/>
        
        <Controls 
          status={data.session_status}
          timer={convertSecondsToMinutes(data.timer - data.session_time)}
          hasSessions={!!data.session_settings.length}
           />

        {data?.electrode_statuses && data?.electrode_statuses?.length > 0 && (
          <Electrodes electrodes={data?.electrode_statuses}/>
        )}

        {sessions.length > 0 && (
          <SettingsList 
            sessions={sessions}
            isSortable={data.session_status === 'stop'}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
             />
        )}

        <AddRow sessions={sessions} />
      </div>
  )
}
