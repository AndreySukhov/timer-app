import { useMutation } from "react-query";
import { apiUrl } from "./utils";
import { TSession, TSessionSettingsItem } from "./types";

  export const setSessionSettings = async (settings: TSessionSettingsItem[]) => {
    const res = await fetch(`${apiUrl}session_settings`, {
        method: 'POST',
        body: JSON.stringify(settings),
        headers: {
          "Content-Type": "application/json"
        },
    });
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    const status: TSession = data
    return status;
  };

  export const useSetSessionSettings = () => {
    return useMutation({
        mutationFn: (settings: TSessionSettingsItem[]) => setSessionSettings(settings)
      })
  };