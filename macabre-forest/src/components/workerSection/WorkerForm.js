import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';
import WorkerRow from './WorkerRow';

const WorkerForm = (props) => {

    const { dataReducer } = useContext(DataContext);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('formSubmit');
    }

    const showResults = (e) => {
        e.preventDefault();
        props.updateSetResults(true);
    }

    return (
        <div>
            <div>
                <div>Worker</div>
                <div>Location</div>
            </div>
            <form onSubmit={formSubmit}>
                {dataReducer.hasOwnProperty('locations') && 
                    Object.values(dataReducer.locations).map( (val, index)=> { 
                        return <WorkerRow key={val.id + index} dataid={val.id} />  
                    }) 
                }
                <button onClick={showResults}>Activate</button>
            </form>
        </div>
    )
}

export default WorkerForm