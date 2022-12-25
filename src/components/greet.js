import React from 'react'

function Greet(props) {
    return (
        <div>Hey {props.name} {props.lastName}</div>
    )
}

export default Greet