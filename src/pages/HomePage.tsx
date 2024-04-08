import { Box, Button, FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/debug";
import { SocketContext } from "../providers/SocketProvider";

export type userInput = {
    username: string,
    roomcode: string
}

const HomePage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<userInput>()
    
    const socket = useContext(SocketContext)
    const onSubmit = async (values: userInput) => {
        //const socket = io("http://localhost:8000")

    }

    return (
        <Box height="100vh">
            <form id="roomform"onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.username?.message != null}>
                    <Input
                        id="username"
                        placeholder="username"
                        {...register(
                            "username", {
                                maxLength: 100
                            }
                        )}
                    />
                    <FormErrorMessage> {errors.username && errors.username.message} </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.roomcode?.message != null}>
                <Input
                        id="roomcode"
                        placeholder="roomcode"
                        {...register(
                            "roomcode", {
                                maxLength: 6,
                                required: "This is required!"
                            },
                        )}
                    />
                    <FormErrorMessage> {errors.roomcode && errors.roomcode.message} </FormErrorMessage>
                </FormControl>
                <Button type="submit" id="roomform" isLoading={isSubmitting}>Submit!</Button>
                <Text>or....</Text>
                <Button variant="outline" onClick={() => createRoom()}> Create Room </Button>
            </form>
        </Box>
    )
}

export default HomePage;