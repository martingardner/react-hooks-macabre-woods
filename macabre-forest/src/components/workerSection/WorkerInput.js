import React, { useContext, useState } from 'react';
import DataContext from '../../context/DataContext';
import { filterArrayReturn } from '../../helperFunctions/HelperFunctions';


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
        </>
    )
}

export default WorkerInput