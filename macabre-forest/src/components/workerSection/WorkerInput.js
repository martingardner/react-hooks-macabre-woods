import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { returnWorkerRowTotals } from '../../helperFunctions/HelperFunctions';

const WorkerInput = (props) => {
    
    const { dataReducer, dispatch } = useContext(DataContext);

    const incrementCount = () => {
        let newValue = dataReducer.locations[props.dataid].workercount + 1;
        let workerRowTotal = returnWorkerRowTotals(Object.values(dataReducer.locations));
        if(newValue <= dataReducer.maxWorkers && workerRowTotal < dataReducer.maxWorkers){ 
            dispatch({
                type : 'INCREMENT_WORKER_ROW_COUNT',
                index : props.dataid,
                newCount : newValue        
            })

            dispatch({
                type : 'UPDATE_CURRENT_WORKER',
                newValue : workerRowTotal + 1
            })
        }
    }

    const decrementCount = () => {
        let newValue = dataReducer.locations[props.dataid].workercount - 1;
        let workerRowTotal = returnWorkerRowTotals(Object.values(dataReducer.locations));
        if(newValue >= 0){
            dispatch({
                type : 'DECREMENT_WORKER_ROW_COUNT',
                index : props.dataid,
                newCount : newValue
            })

            dispatch({
                type : 'UPDATE_CURRENT_WORKER',
                newValue : workerRowTotal - 1
            })
        } 
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