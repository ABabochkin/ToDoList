import React from 'react'

export default function ToDo({todo, removeTask}) {
    return (
    <div key={todo.id} className='todo-task' >
        <div className='t-1' >{todo.task}
        </div>
        <div className='todo-remove' onClick={() => removeTask(todo.id)}>X</div>
    </div>
    )
}
