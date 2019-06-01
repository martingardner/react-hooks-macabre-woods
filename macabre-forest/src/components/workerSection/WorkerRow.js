import React, { useContext } from 'react';
import WorkerInput from './WorkerInput';
import DataContext from '../../context/DataContext';

const WorkerRow = (props) => {

    const { dataReducer } = useContext(DataContext);

    return (
        <div>
            <WorkerInput dataid={props.dataid} />
            <span>{dataReducer.locations[props.dataid].name}</span>
        </div>
    )
}

export default WorkerRow