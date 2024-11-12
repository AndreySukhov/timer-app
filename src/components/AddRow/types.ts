import { TSession, TSetting } from "../../api/types";

export type TAddRowProps = {
    settings: TSetting[],
    onUpdate: (data: TSession) => void,
    isAddADisabled: boolean
}