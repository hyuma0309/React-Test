import React from 'react'
import Grandchild from './Grandchild'

const Child = () => {
    return (
        <div>
            <p>Componet B</p>
            <Grandchild />
        </div>
    )
}

export default Child