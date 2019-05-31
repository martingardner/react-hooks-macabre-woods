import React, { useContext, useEffect , useState } from 'react';
import DataContext from '../../context/DataContext';
import { filterArrayReturn } from '../../helperFunctions/HelperFunctions';


const WorkerInput = (props) => {
    
    const { dataReducer, dispatch } = useContext(DataContext);
    const [getCount, setCount] = useState()

    useEffect( ()=> {

        const workerRowCount = filterArrayReturn(dataReducer.workerRowCount, 'id', props.dataid)
        setCount(workerRowCount[0].count)

    }, [dataReducer.workerRowCount, props.dataid])

    return (
        <>
            <button>-</button>
            <span>{getCount}</span>
            <button>+</button>
        </>
    )
}

export default WorkerInput