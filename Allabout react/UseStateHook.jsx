import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // useEffect hook to perform side effects
  useEffect(() => {
    // This code will run after the component is first rendered
    document.title = `Count: ${count}`;

    // You can also return a cleanup function
    return () => {
      document.title = 'React App'; // Reset the document title when the component unmounts
    };
  }, [count]); // The effect will re-run whenever the 'count' state changes

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
