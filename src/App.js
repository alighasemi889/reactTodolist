import React, { useState } from "react";
import './App.css';

function App() {
  const [task, setTask] = useState(""); // ذخیره تکست تسک
  const [tasks, setTasks] = useState([]); // ذخیره آرایه تسک‌ها

  // افزودن تسک جدید
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask(""); // پاک کردن فیلد ورودی بعد از اضافه کردن
    }
  };

  // حذف تسک
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // تغییر وضعیت تسک (علامت‌گذاری به عنوان انجام شده)
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "" }}>
            {task.text}
            <button onClick={() => toggleCompletion(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
