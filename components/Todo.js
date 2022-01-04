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
            <div class="input-group mb-3" style={{'max-width': '500px'}}>
                <input type="text" class="form-control" value={edit.text} onChange={handleChange} />
                <button class="btn btn-primary  " type="button" onClick={handleClick}>Update</button>
            </div>
        )
    }

    return (
        <li key={todo.id} className='list-group-item'>
            {todo.text}
            <button type="button" class="btn btn-danger" onClick={() => removeTodo({id: todo.id, text: todo.text})} style={{'float': 'right'}}>Remove</button>
            <button type="button" class="btn btn-primary" onClick={() => setEdit({id: todo.id, text: todo.text})} style={{'float': 'right'}}>Update</button>
        </li>


    )
}

export default Todo
