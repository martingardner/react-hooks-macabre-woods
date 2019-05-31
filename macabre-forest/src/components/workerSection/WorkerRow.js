import React, { useContext } from 'react';
import WorkerInput from './WorkerInput';
import DataContext from '../../context/DataContext';

const WorkerRow = (props) => {

    const { dataReducer , dispatch } = useContext(DataContext);
    console.log('this.props', props);
    return (
        <div>
            <WorkerInput />
            <span>{ dispatch({type: 'RETURN_LOCATION_ROW', id: props.datarow}) }</span>
        </div>
    )
}

export default WorkerRow