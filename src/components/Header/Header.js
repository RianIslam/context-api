import React, { useState } from 'react'

const Header = (props) => {

    const  {count,setCount} = props;


    return (
        <div>
            <h2>this is header : {count}</h2>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>
    )
}

export default Header
