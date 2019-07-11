import React, { useState } from 'react';


const StateTest = (props) => {

    const [getCount, setCount] = useState(0);

    const incrementCount = () => {
        setCount(getCount + 1);
    }

    const decrementCount = () => {
        setCount(getCount - 1);
    }

    return (
        <div>
            <button onClick={ () => incrementCount() }>Increment</button>
            <button onClick={ () => decrementCount() }>Decrement</button>
            <span>{getCount}</span>
        </div>
    )

}

export default StateTest;