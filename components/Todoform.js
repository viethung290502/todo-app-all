import React, { useState } from 'react'

const Todoform = ({ addTodo }) => {
    let [todo, setTodo] = useState('')
    const handleChange = e => {
        setTodo(e.target.value)
    }
    const handleClick = () => {
        addTodo(todo)
        setTodo('')
    }
    return (
        <>
            <div class="input-group mb-3" style={{'max-width': '500px'}}>
                <input type="text" class="form-control" value={todo} placeholder='Add a todo' onChange={handleChange} />
                <button class="btn btn-success" type="button" onClick={handleClick}>Add todo</button>
            </div>
        </>

    )
}

export default Todoform
