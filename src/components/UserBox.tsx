import { UserModel } from "../types/User";

type Props = { 
  user: UserModel
}

const UserBox = ({user}: Props) => {
  return (
    <div>
      <p>{user.username}</p>
      <button>Ready</button>
    </div>
  )
};

export default UserBox;