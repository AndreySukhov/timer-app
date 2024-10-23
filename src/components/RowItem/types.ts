import { StatusType } from "../../App"

export type TRowItemProps = {
    name: string,
    status: StatusType,
    time: string,
    finished: boolean,
    onDelete: () => void
}