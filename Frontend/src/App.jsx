import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Components/Login_and_registration/Login.jsx'
import Register from './Components/Login_and_registration/Register.jsx'
import Forgotpassword from './Components/Login_and_registration/Forgotpassword.jsx'
import Home from './Components/ProjectIdeas/Home.jsx'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/forgotpassword',
      element: <Forgotpassword/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App