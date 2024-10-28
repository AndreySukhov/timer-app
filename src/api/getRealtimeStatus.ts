import { useEffect, useState } from 'react';
import { wsUrl } from './utils';

export const useRealTimeStatus = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [connected, setConnected] = useState<boolean>(false);
  const [realtimeData, setData] = useState<string[]>([]);

  useEffect(() => {

    let timeOut: null | number = null;

    const connect = () => {
      const ws = new WebSocket(`${wsUrl}status`);

      ws.onopen = () => {
        setConnected(true);
        console.log('WebSocket connected');
      };

      ws.onmessage = (event: MessageEvent) => {
        setData((prevData) => [...prevData, event.data]);
      };

      ws.onclose = (event: CloseEvent) => {
        setConnected(false);
        console.log('WebSocket disconnected', event.reason);
        // Try to reconnect after 1 second
        timeOut = setTimeout(connect, 1000);
      };

      ws.onerror = (error: Event) => {
        console.error('WebSocket error', error);
        ws.close(); // Close the socket on error to initiate reconnection
      };

      setSocket(ws);
    };

    connect();

    // Cleanup on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, []);

  return { socket, connected, realtimeData };
};