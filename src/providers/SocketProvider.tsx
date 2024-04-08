import { createContext, useEffect, useRef } from "react"
import { io } from "socket.io-client"
import TSocketContext from "../types/SocketContext";


type Props = {
    userName: string,
    roomCode: string
    children: React.ReactNode
}

export const SocketContext = createContext<TSocketContext | null>(null);
const SocketProvider = ({roomCode,userName, children}: Props) => {
    //const {roomCode} = useParams<{roomCode: string}>();
    const socketRef = useRef(io(import.meta.env.VITE_BACKEND_URL));
    const socket = socketRef.current;

    useEffect(() => {
        socket.emit("joinRoom", roomCode, userName);
    }, []);
    return (
        <SocketContext.Provider value={{roomcode: roomCode, username: userName}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;