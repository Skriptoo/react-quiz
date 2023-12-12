import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <></>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <RouterProvider router={router}/>
    </ChakraBaseProvider>
  </React.StrictMode>
)
