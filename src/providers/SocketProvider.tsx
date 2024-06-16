import { createContext, useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
import TSocketContext from "../types/SocketContext";
import { useLocation, useParams } from "react-router-dom";


type Props = {
    children: React.ReactNode,
}

export const SocketContext = createContext<TSocketContext | null>(null);
const SocketProvider = ({children}: Props) => {
    const {username} = useLocation().state as {username: string} || {username: ''};
    const {roomCode} = useParams();
    const socketRef = useRef(io(import.meta.env.VITE_BACKEND_URL, {autoConnect: false}));
    const socket = socketRef.current;
    const [userList, setUserList] = useState<string[]>([]);
    
    useEffect(() => {
        console.log("strona załadowana")
        if(!socket.connected) socket.connect();

        
        socket.emit('join_room', roomCode, username);

        socket.on('users_list', (users) => {
            setUserList(users);
            console.log("Lista użytkowników: " + users);
        });

        return () => {
           
            socket.disconnect();
            socket.on('user_disconnected', () => {
                console.log('odebrano')
                socket.emit('leave_room', roomCode, username)
            });
            socket.off('users_list')
            socket.off('join_room');
        }
    }, []);

    return (
        <SocketContext.Provider value={{
            roomcode: roomCode ?? '', 
            username: username, 
            userList: userList
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;