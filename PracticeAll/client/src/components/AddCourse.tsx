import { useState } from "react"

const AddCourse = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTodo = async () => {
    const res = await fetch("http://localhost:4000/api/todo", {
      method: "POST",
      headers: { 'Content-Type': "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
      body: JSON.stringify({ title, description })
    })
    const todo = await res.json()
  }

  

  return (
    <>
      <div>
        <input onChange={e => setTitle(e.target.value)} type="text" value={title} placeholder="title" />
        <input onChange={e => setDescription(e.target.value)} type="text" value={description} placeholder="description" /><br /><br />
        <button onClick={handleTodo}>Add Todo</button>
      </div>
    </>
  )
}



export default AddCourse