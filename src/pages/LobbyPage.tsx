import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SocketContext } from "../providers/SocketProvider";

const LobbyPage = () => {
    const { roomCode } = useParams<{roomCode: string}>();
    const socket = useContext(SocketContext);

    return (
        <>
            <Flex>
                {socket!.roomcode}
            </Flex>
        </>
    )
}
export default LobbyPage;