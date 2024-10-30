import { TCommandType } from "../../api/runSession";
import { TSessionSettingsStatus } from "../../api/types";

export type TControlsProps = {
    status: TSessionSettingsStatus,
    timer: string,
    hasSettings: boolean,
    onComandUpdate: (comand: TCommandType) => void
}