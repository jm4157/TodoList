import {useState} from 'react';

/**
 * Author: Judah Munoz
 * 
 * The core element that manages todolist state.
 * 
 * @returns The todolist page
 */
export default function TodoList(){
  const [tasks, setTasks] = useState([]);

  /** 
   * Reads the task provided in the textbox, and if not null adds it to the
   * list of tasks.
  */
  function handleTaskAdd(){
    const addField = document.getElementById("addField");
    const taskText = addField.value;

    if (taskText) {
      const newTasks = [...tasks, taskText];

      setTasks(newTasks);
      addField.value = null
    }
  }

  /**
   * Removes a task from the list.
   * 
   * @param {number} index The index of the task to be removed
   */
  function handleRemove(index){
    const newTasksHead = tasks.slice(0, index);
    const newTasksTail = tasks.slice(index + 1, tasks.length);
    const newTasks = [...newTasksHead, ...newTasksTail];

    setTasks(newTasks);
  }

  return (
    <div className="todo-list">
      <div className="task-adder">
        <TaskAdder onSubmit={handleTaskAdd} />
      </div>
      <br />
      <div className="task-tracker">
        <TaskTracker tasks={tasks} onRemove={handleRemove}/>
      </div>
    </div>
  )
}


/**
 * The page element that allows a user to adds tasks to their todo 
 * list.
 * 
 * @param {function} onSubmit The function that handles input
 * @returns The Task Adder portion of the page
 */
function TaskAdder({onSubmit}){
  return (
    <>
      <div className="label"> Enter Task: </div>
      <input type="text" id="addField" ></input>
      <br />
      <button onClick={onSubmit}>Add</button>
    </>
  )
}


/**
 * The page element that allows a user view and remove tasks from 
 * their todo list.
 * 
 * @param {Array} tasks The list of tasks
 * @param {function} onRemove The function that handles task removal
 * @returns The Task tracker portion of the page
 */
function TaskTracker({tasks, onRemove}){
  /**
   * Maps the list of tasks as raw text to a list of tasks as display objects
   * and removal buttons.
   */
  const taskButtons = tasks.map((taskText, index) => {
    return (
      <li key={index}>
        <>
          <div className="task">{taskText}</div>
          <button className="remove" onClick={ () => onRemove(index)}>Remove</button>
        </>
      </li>
    );
  });

  return (
    <>
      <div className="label"> Todo List </div>
      <ol>
        {taskButtons}
      </ol>
    </>
  )
}

