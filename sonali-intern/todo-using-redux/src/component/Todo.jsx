import React, { useState } from 'react'
import './Todo.css'
import { addTodo, deleteAll, removeTodo, isChecked,showCompleted ,showUnCompleted, showAll} from '../reducer/TodoReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function Todo() {
    const [inputData, setInputData] = useState('')
    const todoState = useSelector((state) => state.todo.todoList)
    const [isCheck, setIsCheck] = useState(true)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    console.log(todoState)

    return (
        <div>
            <div className="container bg-primary w-100 shadow ">
                <h2 className="text-light text-center p-5">Todo App</h2>
                <div className="d-flex justify-content-evenly align-items-center w-100 bg-light p-3 rounded-2 shadow  ">
                    <button className="btn btn-primary w-25" id="button" onClick={() => dispatch(showCompleted())} >Show Completed</button>
                    <button className="btn btn-primary w-25" id="button" onClick={() => dispatch(showAll())}>Show All</button>
                    <button className="btn btn-primary w-25" id="button" onClick={() => dispatch(showUnCompleted())} >Show UnComplete</button>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="input-group mt-5 d-flex justify-content-center align-items-center">
                        <form className="d-flex justify-content-center align-items-center w-100" onSubmit={(e) => handleSubmit(e)}>
                            <input type="text"
                                className="form-control shadow w-75"
                                placeholder="Add a todo"
                                id="todo"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                                required
                            />
                            <input className="btn btn-dark shadow" type="submit" placeholder="Add" onClick={() => dispatch(addTodo(inputData))} />
                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center p-5 ">
                    <ul className="list-group w-75 ">
                        {todoState && todoState?.map((element, index) => {
                            return (
                                <div key={element.id}>
                                    <li className="list-group-item d-flex justify-content-between align-items-center w-100 shadow" id='li'>
                                        <input className="form-check-input"
                                            type="checkbox"
                                            id={`check-${index}`}
                                            onClick={() => {
                                                setIsCheck(!isCheck)
                                                dispatch(isChecked({isCheck,index}))
                                            }}
                                        />
                                        <p className={element.isCompleted ? 'checked' : ""}>{element.todo}</p>
                                        <div>
                                            <button className="btn btn-dark" onClick={() => dispatch(removeTodo(element.id))}>Delete</button>
                                        </div>
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>

                <div className="d-flex justify-content-evenly align-items-center p-5">
                    <button className="btn btn-light" id="delete-button" onClick={() => dispatch(deleteAll())}> Delete all</button>
                    <label className="switch">
                        <input type="checkbox" id="sortCheck" />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

