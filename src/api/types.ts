import { TElectrode } from "../components/Eletrodes/types"

export type TSessionSettingsStatus = 'stop' | 'pause' | 'run' | 'completed'

type TSetting = {
    "pulse_current": boolean,
    "duration": number,
    "timer": number,
    "current": number,
    "status": TSessionSettingsStatus
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