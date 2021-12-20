import React, { useState } from 'react'

const Todo = ({todo, removeTodo, updateTodo}) => {
    let [edit, setEdit] = useState({
        id: null,
        text: ''
    })

    const handleChange = e => {
        setEdit({
            id: edit.id,
            text: e.target.value
        })
    }

    const handleClick = () => {
        updateTodo(edit)
        setEdit({
            id: null,
            text: ''
        })
    }

    if(edit.id) {
        return (
            <div>
                <input type="text" value={edit.text} onChange={handleChange} />
                <button onClick={handleClick}>Update</button>
            </div>
        )
    }

    return (
        <div key={todo.id}>
            {todo.text}
            <br/>
            <button onClick={() => removeTodo({id: todo.id, text: todo.text})}>Remove</button>
            <button onClick={() => setEdit({id: todo.id, text: todo.text})}>Update</button>
        </div>
    )
}

export default Todo
