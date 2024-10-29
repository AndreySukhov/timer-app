import { ReactSortable } from "react-sortablejs";
import { Flex } from "antd"
import { RowItem } from "../RowItem";
import { convertSecondsToMinutes } from "../../utils";
import { TSettingsListProps } from "./types";
import { TSetting } from "../../api/types";

export const SettingsList = ({isSortable, sessions, onUpdate, onDelete}: TSettingsListProps) => {
    if (isSortable) {
        return (
            <ReactSortable
              list={sessions as TSetting[]}
              setList={(newState) => onUpdate(newState)}>
                <Flex style={{marginBlockEnd: 20, width: '100%'}} vertical gap={8} justify="space-between">
                    {sessions.map((item, i) => {
                            return (
                            <RowItem 
                                key={i}
                                name={'empty'}
                                status={item.status}
                                time={convertSecondsToMinutes(item.timer - item.duration)}
                                onDelete={() => onDelete(i)}
                                actionsDisabled={false}
                                />
                        )
                        })}
                </Flex>
        </ReactSortable>  
        )
    }

    return (
        <Flex style={{marginBlockEnd: 20, width: '100%'}} vertical gap={8} justify="space-between">
            {sessions.map((item, i) => {
                    return (
                        <RowItem 
                            key={i}
                            name={'empty'}
                            status={item.status}
                            time={convertSecondsToMinutes(item.timer - item.duration)}
                            onDelete={() => onDelete(i)}
                            actionsDisabled
                        />
                )
                })}
    </Flex>
    )


}