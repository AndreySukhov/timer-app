import { TSetting } from "../../api/types"

export type TSettingsListProps = {
    isSortable: boolean,
    settings: TSetting[],
    onUpdate: (data: TSetting[]) => void,
    onDelete: (index: number) => void
}