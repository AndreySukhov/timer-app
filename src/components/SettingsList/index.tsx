import { ReactSortable } from "react-sortablejs";
import { Flex } from "antd"
import { RowItem } from "../RowItem";
import { convertSecondsToMinutes } from "../../utils";
import { TSettingsListProps } from "./types";
import { formatName } from "./utils";
import styles from './styles.module.css';


export const SettingsList = ({isSortable, settings, onUpdate, onDelete}: TSettingsListProps) => {

    return (
        <Flex style={{marginBlockEnd: 20, width: '100%'}} vertical gap={12} justify="space-between" className={styles.wrap}>
        {isSortable ? (
              <ReactSortable className={styles.sortable}
                list={settings.map((setting, i) => ({...setting, id: i}))}
                setList={(newState) => {
                    const formattedData = newState.map((setting) => {
                        return {
                            pulse_current: setting.pulse_current,
                            duration: setting.duration,
                            timer: setting.timer,
                            current: setting.current,
                            status: setting.status,
                        }
                    })
                onUpdate(formattedData)
              }}>
                   {settings.map((item, i) => {
                return (
                <RowItem 
                    key={i}
                    name={formatName(item.pulse_current)}
                    status={item.status}
                    time={convertSecondsToMinutes(item.timer - item.duration)}
                    onDelete={() => onDelete(i)}
                    actionsDisabled={false}
                />
            )
            })}
        </ReactSortable> 
        ) : (

            <> {settings.map((item, i) => {
                return (
                <RowItem 
                    key={i}
                    name={formatName(item.pulse_current)}
                    status={item.status}
                    time={convertSecondsToMinutes(item.timer - item.duration)}
                    onDelete={() => onDelete(i)}
                    actionsDisabled={false}
                />
            )
            })}</>
        )}
      
    </Flex>
    )
   
}