import React, { useState } from 'react'
import Sum from './sum';

const Ex2 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  // let num = count1+count2
  let num1 = count1
  let num2 = count2


  function increase1() {
    setCount1(count1 + 1);
  } function increase2() {
    setCount2(count2 + 1);
  }
  return (
    <>
      <button onClick={increase1}>
        {count1}
      </button>
      +
      <button onClick={increase2}>
        {count2}
      </button>
      =

      <Sum num1={num1} num2={num2} />
    </>
  )
}

export default Ex2
