import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { socket } from "../../utils/socket";
import { generateUsername } from "../../utils/generateUsername";
import "./Form.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  roomCode: string;
}

const CreateForm = () => {
  const [roomCode, setRoomCode] = useState<string>();
  const navigate = useNavigate();

  const generateRoomCode = () => {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
  }
 
  const { 
    register, 
    handleSubmit,
    setValue,
    formState: { errors } 
  } = useForm<FormValues>();

  useEffect(() => {
    setValue("roomCode", generateRoomCode());
  }, []);

  const createRoom: SubmitHandler<FormValues> = (values) => {
    setRoomCode(values.roomCode);
    if(values.username === "") {
      values.username = generateUsername();
    }
    socket.emit('create_room', values.username, values.roomCode);
    navigate("/room");
  };

  return (
    <form onSubmit={handleSubmit(createRoom)}>  
        <input 
          type="text"
          placeholder="Enter username" 
          {...register("username", {})}
        />
        {errors.username && <p>{errors.username.message}</p>}
          
        <input 
          type="text" 
          defaultValue={roomCode}
          placeholder="Enter room code" 
          {...register("roomCode", {
            required: "Room code is required",
            maxLength: {
            value: 5, 
            message: "Room code must be 5 characters long"},
          })}
        />
        {errors.roomCode && <p>{errors.roomCode.message}</p>}
        <Button type="submit">CREATE</Button>
       </form>
  )
}

export default CreateForm;