import React, {useState, useReducer} from 'react'
import {initialState, reducerTodo} from '../Reducers/reducerTodo'
import Todos from '../Components/Todo'



const TodoForm = () => {

    const [state, dispatch] = useReducer(reducerTodo, initialState)
    const [newTodo, setNewTodo] = useState("")
    const handleChanges = e => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: newTodo})
        console.log(state)
    }
    
    const handleClear = e => {
        e.preventDefault();
        dispatch({type: "CLEAR", payload: newTodo});
    }

        return (
            <div>
                <form>

                    <input
                    type="text"
                    placeholder="Add Todo"
                    name="newTodo"
                    id='newTodo'
                    value={newTodo}
                    onChange={handleChanges}/>

                    <button type="submit" onClick={handleSubmit}>      Add       </button>
                    
                </form>

             <Todos  state={state} dispatch={dispatch} id={state.id}  newTodo={newTodo}/>
            <button type="submit" onClick={handleClear}> Clear Completed </button>
            </div>

        )
}

export default TodoForm