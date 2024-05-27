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

      console.log(tasks);
    }
  }

  return (
    <div className="todo-list">
      <div className="task-adder">
        <TaskAdder onSubmit={handleTaskAdd} />
      </div>
      <div className="task-tracker">
        <ol>
          {/*TODO*/}
        </ol>
      </div>
    </div>
  )
}


function TaskAdder({onSubmit}){
  return (
    <>
      <div className="label"> Enter Task: </div>
      <input type="text" id="addField" ></input>
      <br></br>
      <button onClick={onSubmit}>Add</button>
    </>
  )
}

