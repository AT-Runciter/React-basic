import React, { useState } from 'react';

export default function Item({ title, id, status, tasks, setTasks }) {
  const [checked, setChecked] = useState(status);
  const [editable, setEditable] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [visible, setVisible] = useState(true);

  const classes = ['todo'];

  if (checked) {
    classes.push('status');
  }

  const updateStatus = () => {
    setChecked(!checked);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: !checked };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const saveEditedTitle = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: editedTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setEditable(false);
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
    const removeTodos = tasks.filter((item) => item.id !== id);
    setTasks(removeTodos);
    localStorage.setItem('tasks', JSON.stringify(removeTodos));
  };

  return (
    <>
      {visible && (
        <li className={classes.join(' ')}>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={updateStatus}
            />
            {editable ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                onBlur={saveEditedTitle}
              />
            ) : (
              <span onClick={toggleEditable}>{title}</span>
            )}
            <i className="material-icons red-text" onClick={removeElement}>
              X
            </i>
          </label>
        </li>
      )}
    </>
  );
}
