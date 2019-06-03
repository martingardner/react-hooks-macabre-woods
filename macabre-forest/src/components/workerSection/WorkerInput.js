import React, { useContext , useState } from 'react';
import DataContext from '../../context/DataContext';
import { returnWorkerRowTotals } from '../../helperFunctions/HelperFunctions';

const WorkerInput = (props) => {
    
    const { dataReducer, dispatch } = useContext(DataContext);
    const [getError, setError] = useState(false)

    const incrementCount = () => {
        let newValue = dataReducer.locations[props.dataid].workercount + 1;
        let workerRowTotal = returnWorkerRowTotals(Object.values(dataReducer.locations));
        
        if(newValue <= dataReducer.maxWorkers && workerRowTotal < dataReducer.maxWorkers){
            setError(false);
            dispatch({
                type : 'INCREMENT_WORKER_ROW_COUNT',
                index : props.dataid,
                newCount : newValue        
            })
            
            dispatch({
                type : 'UPDATE_CURRENT_WORKER',
                newValue : newValue
            })
        } else {
            setError(true);
        }
    }

    const decrementCount = () => {
        let newValue = dataReducer.locations[props.dataid].workercount - 1;

        if(newValue >= 0){
            setError(false);
            dispatch({
                type : 'DECREMENT_WORKER_ROW_COUNT',
                index : props.dataid,
                newCount : newValue
            })

            dispatch({
                type : 'UPDATE_CURRENT_WORKER',
                newValue : newValue
            })
        } else {
            setError(true);
        }
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