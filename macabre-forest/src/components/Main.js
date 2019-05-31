import React, {useReducer} from 'react';
import {InitValues, DataReducer} from '../reducer/DataReducer';
import DataContext from '../context/DataContext';
import Header from './headSection/Header';
import WorkerForm from './workerSection/WorkerForm';


const Main = () => {
    const [dataReducer, dispatch] = useReducer(DataReducer, InitValues);

    return(
        <DataContext.Provider value={{dataReducer, dispatch}}>
            <div>
                <Header />
                <WorkerForm />
            </div>
        </DataContext.Provider>
    )
}

export default Main