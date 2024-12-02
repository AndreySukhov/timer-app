import { TTaskStatus } from "../../api/types"

export type TRowItemProps = {
    name: string,
    status: TTaskStatus,
    time: string,
    current: number,
    onDelete: () => void
    actionsDisabled: boolean
}