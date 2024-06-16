import { Button, Flex, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../providers/SocketProvider";
import { useForm } from "react-hook-form";

const LobbyPage = () => {
  const socket = useContext(SocketContext);
  return (
    <>
      {socket?.userList.map((user, index) => {
        <div>
          <p> {index} : {user}</p>
        </div>
      })}
    </>
  )
}
export default LobbyPage;