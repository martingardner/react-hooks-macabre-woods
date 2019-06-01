import React, { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';

const WorkerInput = (props) => {
    
    const { dataReducer, dispatch } = useContext(DataContext);
    const [getError, setError] = useState(false)

    const incrementCount = () => {
        dispatch({
            type : 'INCREMENT_WORKER_ROW_COUNT',
            index : props.dataid            
        })       
    }

    const decrementCount = () => {
        dispatch({
            type : 'DECREMENT_WORKER_ROW_COUNT',
            index : props.dataid
        })
    }

    return (
        <>
            <button onClick={ ()=> { decrementCount() } }>-</button>
            <span>{dataReducer.locations[props.dataid].workercount}</span>
            <button onClick={ ()=> { incrementCount() } }>+</button>
            {getError === true && <span>error</span>}
        </>
    )
}

export default WorkerInput