import React, { useState } from 'react'

const ComC = (props) => {

    let xC = props.num
    let [num, setNum] = useState(xC)

    function increase() {
        setNum(num + 1);
    }
    return (
        <div>
            
            {num}
            <br />
            <button onClick={increase}> ++
            </button>
        </div>
    )
}

export default ComC
