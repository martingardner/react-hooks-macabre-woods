import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';


const ResultsPanel = () => {

    const { dataReducer } = useContext(DataContext);

    return (
        <div>
            <h2>Results</h2>
            <ul>
                {
                    Object.values(dataReducer.locations).map( (val, index) => {
                        return <li key={val.id + '-' + index}>{val.name} has {val.workercount} workers</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ResultsPanel