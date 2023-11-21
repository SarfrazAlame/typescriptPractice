import { useEffect, useState } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://localhost:4000/api/todo", {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            const data = await res.json()
            setTodos(data.todo)
        }
        getData()
    }, [])
    return (
        <div>
            {todos.map(x => (
                <h1>{x.title}</h1>
            ))}
        </div>
    )
}

export default Todos
