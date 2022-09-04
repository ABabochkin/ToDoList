import React, { useState } from 'react'

export default function ToDoForm({addTask}) {

    const [userInput, setUserInput] = useState(' ');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if(e.key === 'enter') {
            handleSubmit(e)
        }
    }

return (
    <form onSubmit={handleSubmit} >
        <input
            className='inp'
            type='text'
            placeholder='Впишите задачу...'
            value={userInput}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
        />
        <button className='btn-1' >Добавить</button>
    </form>
)
}
