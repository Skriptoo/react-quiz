import { UserModel } from "./User";

export default interface SocketContext {
    roomcode: string;
    username: string;
    userList: UserModel[];
}