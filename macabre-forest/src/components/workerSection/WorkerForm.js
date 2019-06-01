import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import WorkerRow from './WorkerRow';

const WorkerForm = () => {

    const { dataReducer } = useContext(DataContext);

    const turnOver = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div>
                <div>Worker</div>
                <div>Location</div>
            </div>
            <form onSubmit={turnOver}>
                {dataReducer.hasOwnProperty('locations') && 
                    Object.values(dataReducer.locations).map( (val, index)=> { 
                        return <WorkerRow key={val.id + index} dataid={val.id} />  
                    }) 
                }
            </form>
        </div>
    )
}

export default WorkerForm