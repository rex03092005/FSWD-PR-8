import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <div className="btn-group">
        <button onClick={() => setCount(count + 1)}>➕ Increment</button>
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔄 Reset</button>
      </div>
    </div>
  );
};

export default Counter;
