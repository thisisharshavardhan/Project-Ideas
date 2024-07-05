import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Login_and_registration/Login.jsx'
function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App