// Ex1.2


import React from 'react'

const Sum = (props) => {
    let sum1=props.num1
    let sum2=props.num2

    let sum =sum1+sum2
    return (
        <>
            <span>{sum}</span>
        </>
    )
}

export default Sum
