import { TSetting } from "../../api/types"

export type TSettingsListProps = {
    isSortable: boolean,
    sessions: TSetting[],
    onUpdate: (data: TSetting[]) => void,
    onDelete: (index: number) => void
}