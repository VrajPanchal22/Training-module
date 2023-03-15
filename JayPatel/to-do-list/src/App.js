import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { onchange } from './reducers/task';
import { addTask, completeTask, deleteAll, deleteTask } from './reducers/taskList';
import { sortTasks, viewAllTasks, viewCompletedTasks, viewPendingTasks } from './reducers/filters'

function App() {

  const task = useSelector(state => state.task.value);
  const taskList = useSelector(state => state.taskList.value);
  const latestFirst = useSelector(state => state.filters.value.latestFirst);
  const viewPendingTask = useSelector(state => state.filters.value.viewPendingTask);
  const viewCompletedTask = useSelector(state => state.filters.value.viewCompletedTask);

  const dispatch = useDispatch();

  const loadTask = () => {
    let tempTaskList = [...taskList]

    if (latestFirst) {
      tempTaskList.sort((a, b) => {
        return b.timestamp - a.timestamp
      })
    }

    // view completed task
    if (viewCompletedTask && !viewPendingTask) {
      tempTaskList = tempTaskList.filter(ele => ele.completed)
    }

    // view pending task
    else if (!viewCompletedTask && viewPendingTask) {
      tempTaskList = tempTaskList.filter(ele => !ele.completed)
    }

    const view = [];

    tempTaskList.forEach((task, index) => {
      view.push(
        <li key={index} className="todolist__task">
          <label htmlFor={`${task.timestamp}`} className={`${task.completed ? "label--textdecorator" : ""}`} >
            {/* <input type="checkbox" id={`${task.timestamp}`} name={`${"task" + index}`} {task.completed ? "checked" : ""} /> ${obj.task}</label> */}
            <input type="checkbox" id={`${task.timestamp}`} name={`${"task" + index}`} onChange={() => dispatch(completeTask(task.timestamp))} checked={task.completed} /> {task.task}</label>
          <button className="button--delete" onClick={() => dispatch(deleteTask(task.timestamp))}>delete</button>
        </li>
      )
    });
    return view;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(onchange(""));
    dispatch(addTask(task))
  }

  return (
    <div className="App">
      <div id="todolist" className="todolist">
        <h1>To Do List</h1>

        <form className="todolist__newtask">
          <input type="text" name="task" id="newtask" value={task} onChange={(e) => dispatch(onchange(e.target.value))} />
          <button type='submit' onClick={handleSubmit} >+</button>
        </form>

        <ul id="tasks" className="todolist__tasks">
          {loadTask()}
        </ul>


        <br />

        <div className="buttons buttons--width">
          <button className="buttons__btn" onClick={() => dispatch(deleteAll())}>deleteAll</button>
          <button id="sort" className="buttons__btn" onClick={() => dispatch(sortTasks())}>{latestFirst ? "Latest First" : "Latest Last"}</button>
        </div>

        <div id="buttons" className="buttons">

          <button
            className={`buttons__btn ${viewCompletedTask ? 'buttons__btn--clicked' : ""}`}
            onClick={() => dispatch(viewCompletedTasks())}
          >
            Completed Tasks
          </button>

          <button
            className={`buttons__btn ${viewPendingTask ? 'buttons__btn--clicked' : ""} `}
            onClick={() => dispatch(viewPendingTasks())}
          >
            Pending Tasks
          </button>

          <button
            className={`buttons__btn  ${!viewCompletedTask && !viewPendingTask ? "buttons__btn--clicked" : ""}`}
            onClick={() => dispatch(viewAllTasks())}
          >
            All Tasks
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
