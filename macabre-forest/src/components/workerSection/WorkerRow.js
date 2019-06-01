import React, { useContext } from 'react';
import WorkerInput from './WorkerInput';
import DataContext from '../../context/DataContext';
import { filterArrayReturn } from '../../helperFunctions/HelperFunctions';

const WorkerRow = (props) => {

    const { dataReducer } = useContext(DataContext);

    return (
        <div>
            <WorkerInput dataid={props.dataid} />
            <span>{dataReducer.locations[props.dataid].name}</span>
            {getError === true && <span>error</span>}
        </div>
    )
}

export default WorkerRow