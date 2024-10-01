import { useEffect, useRef, useState } from "react";
import {socket} from "../../utils/socket";
import { UserModel } from "../../types/User";

const LobbyPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const onceDone = useRef(false);
  
  useEffect(() => {
    if(onceDone.current) return;
    socket.emit('get_user_list');
    onceDone.current = true;
  }, []);


  useEffect(() => {
    socket.on('users_list', (users: UserModel[]) => {
      setUsers(users);
      console.log(users)
    });
    return () => {
      socket.off('users_list');
    };
  }, []);

  return (
    <>
      {
       users.map((user, index) => () => {
          <p>{user.username}</p>
       })
      }
    </>
  )
}
export default LobbyPage;