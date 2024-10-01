import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LobbyPage from "../pages/Lobby/LobbyPage";
import HomePage from "../pages/Home/HomePage";

// eslint-disable-next-line react-refresh/only-export-components
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <></>
  },
  {
    path: "/room",
    element: <LobbyPage/>,
    errorElement: <></>
  }  
]);

const AppProviders = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppProviders;