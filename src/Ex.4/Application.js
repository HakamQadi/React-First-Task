import React, { useState } from 'react'
import Input from './BigInput.js'
import PrimeNum from './PrimeNum.js'
// parent
const Application = () => {
    const [Data, setData] = useState();

    const receivedData = (data) => {
        setData(data);
    };

    return (
        <>
            <Input myFunc={receivedData} />
            <PrimeNum limit={Data} />
        </>
    )
}

export default Application
