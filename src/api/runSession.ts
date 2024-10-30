import { useMutation } from "react-query";
import { apiUrl } from "./utils";
import { TSession } from "./types";

  export type TCommandType = 'start' | 'stop' | 'pause' | 'restart'

  export const changeSessionStatus = async (command: TCommandType) => {
    const res = await fetch(`${apiUrl}${command}`, {
        method: 'POST'
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    const status: TSession = data
    return status;
  };

  export const useChangeSessionStatus = () => {
    return useMutation({
        mutationFn: (command: TCommandType) => changeSessionStatus(command)
      })
  };
