import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import Todoform from './Todoform'

const Todolist = () => {
    let [todos, setTodos] = useState([])
    useEffect(async () => {
        const res = await fetch('/api/render')
        const data = await res.json()
        setTodos(data)
    }, [])

    const addTodo = async (todo) => {
        const res = await fetch('/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data = await res.json();
        setTodos([...todos, data])
    }

    const removeTodo = async (todo) => {
        const res = await fetch('/api/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data = await res.json()
        setTodos(data)
    }

    const updateTodo = async (todo) => {
        const res = await fetch('/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data = await res.json()
        setTodos(data)
    }

    return (
        <div>
            <Todoform addTodo={addTodo} />
            {todos.map(todo => <Todo todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />)}
        </div>
    )
}

export default Todolist
