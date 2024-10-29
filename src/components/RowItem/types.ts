import { TTaskStatus } from "../../api/types"

export type TRowItemProps = {
    name: string,
    status: TTaskStatus,
    time: string,
    onDelete: () => void
    actionsDisabled: boolean
}