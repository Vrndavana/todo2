import React from 'react'
import '../App.css';
const Todos = (props) => {
    const handleToggle = id => {
        props.dispatch({ type: "TOGGLE_COMPLETED", id: id })
    }
    return (
        <div>
            {props.state.map(todo => {
                return (
                    <div  onClick={() => handleToggle(todo.id)} key={todo.id}
                    className={`todo${todo.completed ? 'completed' : ''}`}>
                        <p>{todo.item}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Todos