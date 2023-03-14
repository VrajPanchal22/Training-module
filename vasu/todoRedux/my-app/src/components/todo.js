import React, { useState, useEffect } from "react";
import { addTodo, delTodo, delAllTodo, strike, showAll } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import "./todo.css";

function Todo() {
  const [inputdata, setInputdata] = useState("");
  const list = useSelector((state) => state.TodoReducer.List);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedList = localStorage.getItem("Todolist");
    if (storedList) {
      dispatch(showAll(JSON.parse(storedList)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("Todolist", JSON.stringify(list));
  }, [list]);

  function getValue(event) {
    setInputdata(event.target.value);
  }
  function handleAddTodo() {
    dispatch(addTodo(inputdata));
    setInputdata("");
  }
  return (
    <div className="mainContainer">
      <input
        type="text"
        className="inputval"
        placeholder="List your To-Do's..."
        value={inputdata}
        onChange={getValue}
      />
      <button className="enterBtn" onClick={handleAddTodo}>
        add me
      </button>

      <div className="List">
        <center>
          {list.map((elem) => {
            return (
              <div className="element" key={elem.id}>
                <div>
                  <p
                    style={{
                      textDecoration: elem.isCompleted
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {elem.data}
                  </p>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="tick"
                    onClick={(e) => dispatch(strike(elem.id, e.target.checked))}
                  />
                </div>
                <div>
                  <button
                    className="dustbin"
                    title="del_btn"
                    onClick={() => dispatch(delTodo(elem.id))}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </center>
      </div>

      <div className="AllFlters">
        <div className="deleteAll">
          <button
            className="delete_all bg"
            onClick={() => dispatch(delAllTodo())}
          >
            Delete All List
          </button>
        </div>
        <div className="Completed">
          <button className="completed bg">completed</button>
        </div>
        <div className="incomplete">
          <button className="Incomplete bg">Incomplete</button>
        </div>
        <div className="showall">
          <button className="ShowAll bg" onClick={() => dispatch(showAll())}>
            Show_All
          </button>
        </div>
        <div className="sort">
          <input type="checkbox" className="checkbox bg" />
          sort
        </div>
      </div>
    </div>
  );
}

export default Todo;
