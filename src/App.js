import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <button onClick={increase}>
      {count} Likes
    </button>
  );
}

export default App;
