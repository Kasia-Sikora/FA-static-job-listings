import React from 'react'

const Button = ({value, searchAttrHandler}) => {
    return (
        <div>
            <button onClick={() => searchAttrHandler(value)}>{value}</button>
        </div>
    )
}

export default Button
