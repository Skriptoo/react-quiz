import { SubmitHandler, useForm } from "react-hook-form";
import { socket } from "../../utils/socket";
import { generateUsername } from "../../utils/generateUsername";
import "./Form.scss";
import Button from "../Button/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  roomCode: string;
}

const JoinForm = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit,
    setValue,
    formState: { errors } 
  } = useForm<FormValues>();

  useEffect(()=> {
    setValue("username", generateUsername());
  }, []);
  
  const joinRoom: SubmitHandler<FormValues> = (values) => {
    if(values.username === "") {
      values.username = generateUsername();
    }
    socket.emit("join-room", values.roomCode,  values.username);
    navigate("/room");
  };

  return (
    <form onSubmit={handleSubmit(joinRoom)}>  
        <input 
          type="text" 
          {...register("username", {})}
        />
        {errors.username && <p>{errors.username.message}</p>}
          
           <input 
             type="text"
             placeholder="Enter room code" 
             {...register("roomCode", {
               required: "Room code is required",
               maxLength: {
                value: 5, 
                message: "Room code must be 5 characters long"},
             })}
             />
             {errors.roomCode && <p>{errors.roomCode.message}</p>}
         <Button type="submit">JOIN FRIENDS!</Button>
    </form>
  );
}

export default JoinForm;