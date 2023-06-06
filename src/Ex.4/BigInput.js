import React, { useState } from 'react'
// child 1
const BigInput = (props) => {
    const [data, setData] = useState();
    const senDataToParent = () => {
        props.myFunc(data);
    };
    return (
        <div>
            limit = <input type='number' value={data} onKeyUp={senDataToParent()} onChange={(e) => setData(e.target.value)} />
        </div>
    )
}

export default BigInput
