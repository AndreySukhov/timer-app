import { useEffect, useState } from "react";
import { Battery, Controls, AddRow, Electrodes, Complete, SettingsList } from "./components"
import { Spin } from "antd"
import { useRealTimeStatus, useStatus, useSetSessionSettings, useChangeSessionStatus } from "./api";
import { convertSecondsToMinutes } from "./utils";
import { TSetting, TSession } from "./api/types";
import { TCommandType } from "./api/runSession";

export const App = () => {

  const { realtimeData } = useRealTimeStatus()
  const { data, isLoading } = useStatus()
  const setSessionSettings = useSetSessionSettings();
  const changeSession = useChangeSessionStatus()

  const [currentData, setCurrentData] = useState<null | TSession>(null);

  const handleDelete = async (index: number) => {
    if (!currentData) {
      return
    }
    const newSessions =  currentData.session_settings.filter((_, i) => i !==index)
   
    const res = await setSessionSettings.mutateAsync(newSessions)
    setCurrentData(res)
  }

  const handleSessionsUpdate = async (sessions: TSetting[]) => {
    if (!currentData) {
      return
    }

    const res = await setSessionSettings.mutateAsync(sessions)

    setCurrentData(res)
  }

  const handleUpdate = (data: TSession) => {
    if (!currentData) {
      return
    }
    setCurrentData(data)
  }

  const handleComandUpdate = async (comand: TCommandType) => {
    const res = await changeSession.mutateAsync(comand)

    setCurrentData(res)
  }


  useEffect(() => {

    if (!isLoading && data) {
      setCurrentData(data)
    }
  }, [isLoading, data])

  useEffect(() => {
    if (!Array.isArray(realtimeData)) {
      setCurrentData(JSON.parse(`${realtimeData}`).status)
    }
  }, [realtimeData])

  if (!currentData && isLoading) {
    return <Spin />
  }

  if (!currentData) {
    return null
  }

  return (
    <div className="main">

        {currentData.session_status === 'completed' && <Complete onComandUpdate={handleComandUpdate} />}
        <Battery charge={currentData?.battery_level}/>
        
        <Controls 
          status={currentData.session_status}
          timer={convertSecondsToMinutes(currentData.timer - currentData.session_time)}
          hasSettings={!!currentData.session_settings.length}
          onComandUpdate={handleComandUpdate}
         />

        {currentData?.electrode_statuses && currentData?.electrode_statuses?.length > 0 && (
          <Electrodes electrodes={currentData?.electrode_statuses}/>
        )}

        {currentData.session_settings.length > 0 && (
          <SettingsList 
            settings={currentData.session_settings}
            isSortable={currentData.session_status === 'stop'}
            onDelete={handleDelete}
            onUpdate={handleSessionsUpdate}
          />
        )}

        <AddRow settings={currentData.session_settings} onUpdate={handleUpdate} />
      </div>
  )
}
