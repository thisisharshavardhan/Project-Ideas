import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>You Logged In successfully</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </>
  )
}

export default Home