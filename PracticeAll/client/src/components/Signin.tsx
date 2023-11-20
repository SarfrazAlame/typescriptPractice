import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async () => {
    const res = await fetch("http://localhost:4000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    localStorage.setItem("token", data.token)
  }
  return (
    <div>
      <h2>login to access</h2>
      <input onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder="username" />
      <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="password" />
      <Link to={'/signup'}>signup</Link>
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Signin