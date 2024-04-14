import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LobbyPage from "../pages/LobbyPage";
import SocketProvider from "./SocketProvider";
import HomePage from "../pages/HomePage";

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <></>
  },
  {
    path: "/room/:roomCode",
    element: <SocketProvider><LobbyPage/></SocketProvider>,
    errorElement: <></>
  }  
]);

const AppProviders = () => {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}

export default AppProviders;