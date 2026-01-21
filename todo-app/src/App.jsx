import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  return (
    <div>
      <h1>My First ToDo App 🚀</h1>

      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
