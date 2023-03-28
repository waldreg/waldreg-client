import { useQueryClient } from 'react-query';
import { useEffect } from 'react';

const useStartAttendance = () => {
  const queryClient = useQueryClient();
  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:9344/socket/');

    websocket.onopen = () => {
      console.log('connected');
    };

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      queryClient.setQueriesData(data.entity, (oldData: any) => {
        const update = (entity: any) =>
          entity.id === data.id ? { ...entity, ...data.payload } : entity;
        return Array.isArray(oldData) ? oldData.map(update) : update(oldData);
      });
    };

    return () => {
      websocket.close();
    };
  }, [queryClient]);
};

export default useStartAttendance;
