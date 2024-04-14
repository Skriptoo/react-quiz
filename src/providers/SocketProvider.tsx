import { createContext, useEffect, useRef } from "react"
import { io } from "socket.io-client"
import TSocketContext from "../types/SocketContext";
import { useParams } from "react-router-dom";


type Props = {
    children: React.ReactNode,
}

export const SocketContext = createContext<TSocketContext | null>(null);
const SocketProvider = ({children}: Props) => {
    const {roomCode} = useParams();
    const socketRef = useRef(io(import.meta.env.VITE_BACKEND_URL, {autoConnect: false}));
    const socket = socketRef.current;

    useEffect(() => {
        console.log(socket)
        if(!socket.connected) socket.connect();
        socket.emit('joinRoom', roomCode);
        return () => {
            socket.disconnect();
            socket.off('joinRoom');
        }
    }, []);
    return (
        <SocketContext.Provider value={{roomcode: roomCode ?? ''}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;