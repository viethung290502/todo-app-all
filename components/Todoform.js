import React, { useState } from 'react'

const Todoform = ({addTodo}) => {
    let [todo, setTodo] = useState('')
    const handleChange = e => {
        setTodo(e.target.value)
    }
    const handleClick = () => {
        addTodo({
            id: Math.floor(Math.random() * 100000),
            text: todo
        })
        setTodo('')
    }
    return (
        <div>
            <input type="text" value={todo} placeholder='Add a todo' onChange={handleChange}/>
            <button onClick={handleClick}>Add todo</button>
        </div>
    )
}

export default Todoform
