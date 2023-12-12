import { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000")
const  App = () =>  {
  useEffect(()=> {
    socket.emit("connect", {id: "Essa"});
  }, []);
  return (
    <>
      
    </>
  )
}

export default App;
