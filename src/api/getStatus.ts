
import { useQuery } from "react-query";
import { apiUrl } from "./utils";
import { TSession } from "./types";

export const fetchStatus = async () => {
    const res = await fetch(`${apiUrl}status`);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    const status: TSession = data
    return status;
  };
  
  export const useStatus = () => {
    return useQuery(['getStatus'], fetchStatus);
  };