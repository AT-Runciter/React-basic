import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={function () { setCount(count + 1); }}>Increment</button>
    </div>
  );
}

export default Example;
