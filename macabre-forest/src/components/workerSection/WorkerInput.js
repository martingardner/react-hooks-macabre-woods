import React, { useContext, useEffect , useState } from 'react';
import DataContext from '../../context/DataContext';
import { filterArrayReturn } from '../../helperFunctions/HelperFunctions';


const WorkerInput = (props) => {
    
    const { dataReducer, dispatch } = useContext(DataContext);
    const [getCount, setCount] = useState()

    useEffect( ()=> {
        console.log('WORKERINPUT USEEFFECT');
        const workerRowCount = filterArrayReturn(Object.values(dataReducer.locations), 'id', props.dataid)
        console.log('WORKER INPUT', workerRowCount);
        setCount(workerRowCount[0].workercount)

    }, [dataReducer.workerRowCount, props.dataid] )

    const incrementCount = () => {
        //const workerRowIndex = dataReducer.locations.findIndex( (obj) => obj.id === props.dataid )
               
        dispatch({
            type : 'INCREMENT_WORKER_ROW_COUNT',
            index : props.dataid            
        })
        
        
    }

    return (
        <>
            <button>-</button>
            <span>{dataReducer.locations[props.dataid].workercount}</span>
            <button onClick={ ()=> { incrementCount() }  }>+</button>
        </>
    )
}

export default WorkerInput