import { TSessionSettingsStatus } from "../../api/types";

export type TControlsProps = {
    status: TSessionSettingsStatus,
    timer: string,
    hasSessions: boolean
}