import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './App.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todos-bg-container">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="todos-heading">Todos List</h1>
            <h1 className="create-task-heading">
              Create <span className="create-task-heading-subpart">Task</span>
            </h1>
            <input
              type="text"
              className="todo-user-input"
              placeholder="What needs to be done?"
              value={inputValue}
              onChange={handleInputChange}
            />
            <br/>
            <button className="button" onClick={handleAddTask}>
              ADD
            </button>
            <h1 className="todo-items-heading">
              My <span className="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul className="todo-items-container">
              {tasks.map((task, index) => (
                <li key={index} className="todo-item">
                  {task}
                  <button className="delete-button" onClick={() => handleDeleteTask(index)}>
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;