import { useSocket } from 'socket.io-react-hook';
const VITE_API_URL = import.meta.env.VITE_API_URL


export const useAuthenticatedSocket = (namespace?: string) => {
  const [accessToken] ='monToken';
  return useSocket(namespace ?? VITE_API_URL, {
    enabled: !!accessToken,
  });
};