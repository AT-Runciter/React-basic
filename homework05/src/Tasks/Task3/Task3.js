import React, { useState } from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Value: {props.value}</p>
    </div>
  );
}

function ParentComponent() {
  const [value, setValue] = useState(0);

  setTimeout(function () {
    setValue(value + 1);
  }, 3000);

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent value={value} />
    </div>
  );
}

export default ParentComponent;
