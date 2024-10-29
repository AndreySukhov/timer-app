import { TElectrode } from "../components/Eletrodes/types"

export type TSessionSettingsStatus = 'stop' | 'pause' | 'run' | 'completed'

export type TTaskStatus = 'completed' | 'in_progress' | 'pending'

export type TSetting = {
    "pulse_current": boolean,
    "duration": number,
    "timer": number,
    "current": number,
    "status": TTaskStatus
    id: number,
  }

export type TSession = {
    "session_time": number,
    "timer": number,
    "session_status": TSessionSettingsStatus,
    "session_settings": TSetting[],
    "electrode_statuses": TElectrode[],
    "battery_level": number
  }

export type TSessionSettingsItem =   {
    "pulse_current": boolean,
    "timer": number,
    "current": number
  }