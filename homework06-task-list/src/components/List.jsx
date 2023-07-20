import React from 'react';
import Item from './Item';

export default function List({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((item) => (
        <Item
          key={item.id}
          {...item}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </ul>
  );
}
