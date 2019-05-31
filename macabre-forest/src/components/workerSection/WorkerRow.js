import React, { useContext } from 'react';
import WorkerInput from './WorkerInput';
import DataContext from '../../context/DataContext';

const WorkerRow = (props) => {

    const { dataReducer , dispatch } = useContext(DataContext);
    let locationRow = dispatch({type: 'RETURN_LOCATION_NAME', id: props.datarow});
    console.log('locationRow', locationRow);
    return (
        <div>
            <WorkerInput />
            <span></span>
        </div>
    )
}

export default WorkerRow