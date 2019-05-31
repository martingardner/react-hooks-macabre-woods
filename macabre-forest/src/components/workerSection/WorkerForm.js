import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import WorkerRow from './WorkerRow';

const WorkerForm = () => {

    const { dataReducer } = useContext(DataContext);
    console.log('dataReducer', dataReducer);
    return (
        <div>
            <div>
                <div>Worker</div>
                <div>Location</div>
            </div>
            <form>
                { 
                    dataReducer().locations.map( (val, index)=> { 
                        return <WorkerRow key={val.id + index} />  
                    }) 
                }
            </form>
        </div>
    )
}

export default WorkerForm