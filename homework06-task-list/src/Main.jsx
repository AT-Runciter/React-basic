import React, { useState, useEffect } from 'react';
import List from './components/List';
import { v4 as uuidv4 } from 'uuid';

function Main() {
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem('tasks');
    if (!storedTodos) {
      return [];
    } else {
      return JSON.parse(storedTodos);
    }
  });
  const [tasksTitle, setTasksTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const incompleteTasksCount = tasks.filter((task) => !task.status).length;
    document.title = `Незавершенные задачи: ${incompleteTasksCount}`;
  }, [tasks]);

  const addTask = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: uuidv4(),
          title: tasksTitle,
          status: false,
        },
      ]);
      setTasksTitle('');
    }
  };

  const incompleteTasksCount = tasks.filter((task) => !task.status).length;

  return (
    <div className="container">
      <h1>Note your tasks</h1>
      <span>{incompleteTasksCount} незавершеных задач</span>
      <div className="input-field">
        <input
          type="text"
          value={tasksTitle}
          onChange={(event) => setTasksTitle(event.target.value)}
          onKeyDown={addTask}
        />
        <label>Task name</label>
      </div>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Main;
