import {useState} from 'react';

export default function TodoList(){
  const [tasks, setTasks] = useState([]);

  function handleTaskAdd(){
    const addField = document.getElementById("addField");
    const taskText = addField.value;

    if (taskText) {
      const newTasks = [...tasks, taskText];
      
      setTasks(newTasks);
      addField.value = null
    }
  }

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


function TaskTracker({tasks, onRemove}){
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

