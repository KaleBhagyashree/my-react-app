import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ margin: '20px' }}>
      <h2>Counter: {count}</h2>
      <div style={{ margin: '10px' }}>
        <button 
          onClick={increment}
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
          data-testid="increment-btn"
        >
          +
        </button>
        <button 
          onClick={decrement}
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
          data-testid="decrement-btn"
        >
          -
        </button>
        <button 
          onClick={reset}
          style={{ margin: '5px', padding: '10px 20px', fontSize: '16px' }}
          data-testid="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;