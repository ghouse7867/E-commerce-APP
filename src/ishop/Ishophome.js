import React from 'react'
import { Link } from 'react-router-dom'

export default function Ishophome() {
  return (
    <div>
      <h2>Shopping Home</h2>
      <Link to="/register">New User Register</Link>
      <span> || </span>
      <Link to="/login">Existing User</Link>
    </div>
  )
}
