import { TTaskStatus } from "../../api/types"

export const convertTaskStatus = (taskStatus: TTaskStatus) => {
    if (taskStatus === 'completed') {
        return 'success'
    }

    if (taskStatus === 'pending') {
        return 'processing'
    }

    if (taskStatus === 'in_progress') {
        return 'warning'
    }

}