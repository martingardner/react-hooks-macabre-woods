import React, { useContext , useEffect , useState } from 'react';
import WorkerInput from './WorkerInput';
import DataContext from '../../context/DataContext';
import { filterArrayReturn } from '../../helperFunctions/HelperFunctions';

const WorkerRow = (props) => {

    const { dataReducer } = useContext(DataContext);
    const [getName, setName] = useState()

    useEffect( ()=> {

        const datarow = filterArrayReturn(dataReducer.locations, 'id', props.dataid);
        setName(datarow[0].name)

    }, [dataReducer.locations, props.dataid]);

    return (
        <div>
            <WorkerInput dataid={props.dataid} />
            <span>{getName}</span>
        </div>
    )
}

export default WorkerRow