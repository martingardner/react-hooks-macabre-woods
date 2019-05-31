import React, {useReducer, useEffect} from 'react';
import DataReducer from '../reducer/DataReducer';
import InitValues from '../data/InitValues';
import DataContext from '../context/DataContext';
import Header from './headSection/Header';
import WorkerForm from './workerSection/WorkerForm';


const Main = () => {
    const [dataReducer, dispatch] = useReducer(DataReducer, [] );
    console.log('dataReducer', dataReducer);

    useEffect( ()=> {

        dispatch({
            type: 'POPULATE_DATA',
            data : InitValues
        }) 

    }, [])

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