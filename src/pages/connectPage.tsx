import { Box, Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { useState } from "react";
import {useForm} from "react-hook-form";
import { io } from "socket.io-client";

export type userInput = {
    username: string,
    roomcode: string
}

const ConnectPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
      } = useForm<userInput>()
    

    const onSubmit = async (values: userInput) => {
        const socket = io("http://localhost:8000")
        const {username, roomcode} = values;
        socket.emit("joinRoom", username, roomcode);

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
            </form>
        </Box>
    )
}

export default ConnectPage;