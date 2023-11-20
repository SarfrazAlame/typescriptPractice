import { useState } from "react"

const AddCourse = () => {
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  return (
    <div>
        <input type="text" value={title} placeholder="title"/>
        <input type="text" value={description} placeholder="description"/><br /><br />
        <button>Add Todo</button>
    </div>
  )
}

export default AddCourse