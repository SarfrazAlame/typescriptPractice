import axios from 'axios'
import { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])

    const getData = async () => {
        const res = await axios.get("http://localhost:4000/api/todo", {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        const data = await res.data()
        setTodos(data.todo)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Todos
