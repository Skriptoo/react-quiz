import { Box, Button, FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";
import { SocketContext } from "../providers/SocketProvider";

const HomePageTest = () => {
  const navigate = useNavigate();
  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 7).toUpperCase();
    navigate(`/room/${roomId}`);
  }

  return (
    <Box height="100vh">
      <Text>Join existing game</Text>
      <Text>or....</Text>
      <Button onClick={() => createRoom()}> Host your own party! </Button>
    </Box>
  )
}

export default HomePageTest;