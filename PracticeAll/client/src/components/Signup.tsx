import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:4000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    localStorage.setItem("token", data.token)
    navigate("/addcourse")
  }
  return (
    <div>
      <h1>Signup now</h1>
      <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="username" />
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="password" />
      <Link to={"/"}>login</Link>
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signin