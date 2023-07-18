import React, { useState } from 'react';

const TaskManager = () => {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  // Function to handle task input change
  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to add a new task to the list
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTaskList([...taskList, { description: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  // Function to mark a task as complete
  const markAsComplete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = true;
    setTaskList(updatedTaskList);
  };

  return (
    <div className='container'>
      {/* Task Input */}
      <input type="text" value={taskInput} onChange={handleTaskInputChange} />
      <button onClick={addTask}>Add Task</button>

      {/* Task List */}

      <h2>To do list</h2>
      <ul>
        {taskList.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.description}
            <button onClick={() => markAsComplete(index)}>Complete</button> 
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
