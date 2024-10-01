/* import { createContext, useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
import TSocketContext from "../types/SocketContext";
import { useLocation, useParams } from "react-router-dom";
import { UserModel } from "../types/User";


type Props = {
    children: React.ReactNode,
}

export const SocketContext = createContext<TSocketContext | null>(null);
const SocketProvider = ({children}: Props) => {
    const {username} = useLocation().state as {username: string} || {username: ''};
    const {isHost} = useLocation().state as {isHost: number};
    const {roomCode} = useParams();
    const socketRef = useRef(io(import.meta.env.VITE_BACKEND_URL, {autoConnect: false}));
    const socket = socketRef.current;
    const [userList, setUserList] = useState<UserModel[]>([]);
    
    useEffect(() => {
        console.log("strona załadowana")
        console.log("roomcode: " + roomCode)
        console.log("socket połączony" + isHost)
        console.log("username: " + username)

        if(!socket.connected) socket.connect();

        if(isHost) {
          socket.emit('create_room', username, roomCode);
        }
        else {
          socket.emit('join_room', username, roomCode);
        }

        socket.on('users_list', (users: UserModel[]) => {
            setUserList(users);
            console.log("Lista użytkowników: " + users);
        });

        return () => {
           
            socket.disconnect();
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
*/