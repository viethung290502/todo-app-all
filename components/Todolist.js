import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import Todoform from './Todoform'

const Todolist = () => {
    let [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('/api/render')
            .then(response => response.json())
            .then(value => setTodos(value))
    }, [])

    const addTodo = todo => {
        fetch('/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(response => response.json())
            .then(value => setTodos(value))
    }

    const removeTodo = todo => {
        fetch('/api/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo.id)
        })
            .then(response => response.json())
            .then(value => setTodos(value))
    }

    const updateTodo = todo => {
        fetch('/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(response => response.json())
            .then(value => setTodos(value))
    }

    return (
        <div>
            <Todoform addTodo={addTodo}/>
            {todos.map(todo => <Todo todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>)}
        </div>
    )
}

export default Todolist
