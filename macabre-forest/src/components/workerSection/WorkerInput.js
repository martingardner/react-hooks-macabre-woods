import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const WorkerInput = () => {
    
    const { dataReducer, dispatch } = useContext(DataContext);

    return (
        <>
            <button>-</button>
            <input type="text" />
            <button>+</button>
        </>
    )
}

export default WorkerInput