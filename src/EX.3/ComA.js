import React from 'react'
import ComB from './ComB';

const ComA = () => {
    let x=42;
  return (
    <div>
      <ComB num={x}/>
    </div>
  )
}

export default ComA
