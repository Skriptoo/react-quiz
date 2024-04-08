import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LobbyPage from "../pages/LobbyPage";
import HomePageTest from "../pages/HomePageTest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageTest/>,
    errorElement: <></>
  },
  {
    path: "/room/:roomCode",
    element: <LobbyPage/>,
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