import { ReactNode } from "react";
import { TCommandType } from "../../api/runSession";
import { TSessionSettingsStatus } from "../../api/types";

export type TControlsProps = {
    status: TSessionSettingsStatus,
    hasSettings: boolean,
    onComandUpdate: (comand: TCommandType) => void,
    children: ReactNode
}