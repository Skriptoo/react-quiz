import { Box, Button, FormControl, FormErrorMessage, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  roomCode: string;
  username: string;
}

const HomePage = () => {
  const [joinForm, setJoinForm] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<FormValues>();


  const joinRoom = (formValues: FormValues) => {
    navigate(`/room/${formValues.roomCode}`, {
      state: {username: formValues.username}
    });
  };

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 7).toUpperCase();
    navigate(`/room/${roomId}`);
  }

  return (
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      {!joinForm ? 
      <> 
      <Button onClick={() => setJoinForm(!joinForm)}>Join room</Button> 
      </> : 
      <>  
       <form onSubmit={handleSubmit(joinRoom)}>
          <FormControl id="username">
            <Input 
              type="text" 
              placeholder="Enter username" 
              {...register("username", {})}
            />
            {errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
          </FormControl>
          <FormControl id="roomCode">
           <Input 
             type="text" 
             placeholder="Enter room code" 
             {...register("roomCode", {
               required: "Room code is required",
               maxLength: {
                value: 5, 
                message: "Room code must be 5 characters long"},
             })}
             />
             {errors.roomCode && <FormErrorMessage>{errors.roomCode.message}</FormErrorMessage>}
         </FormControl>
         <Button type="submit">Join!</Button>
       </form>
      </> 
       }
      <Text>or....</Text>
      <Button onClick={() => createRoom()}> Host your own party! </Button>
    </Box>
  )
}

export default HomePage;