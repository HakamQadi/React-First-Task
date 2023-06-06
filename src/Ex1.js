import React, { useState } from 'react';

function Ex1() {
  const [count, setCount] = useState(0);
  // let num = count1+count2
  


  function increase() {
    setCount(count + 1);
  } 

  return (
    <>
      <button onClick={increase}>
        {count} Likes
      </button>
      
    </>
  );
}

export default Ex1;
