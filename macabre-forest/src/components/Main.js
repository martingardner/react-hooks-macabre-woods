import React, { useReducer , useEffect , useState } from 'react';
import DataReducer from '../reducer/DataReducer';
import InitValues from '../data/InitValues';
import DataContext from '../context/DataContext';
import Header from './headSection/Header';
import WorkerForm from './workerSection/WorkerForm';
import ResultsPanel from './resultsSection/ResultsPanel';


const Main = () => {
    const [dataReducer, dispatch] = useReducer(DataReducer, [] );
    const [getResults, setResults] = useState(false)
    console.log('dataReducer', dataReducer);

    useEffect( ()=> {
        dispatch({
            type: 'POPULATE_DATA',
            data : InitValues
        }) 
    }, [])

    const updateSetResults = (bool) => {
        if(typeof bool === "boolean"){
            setResults(bool);
        }
    }

    return(
        <DataContext.Provider value={{dataReducer, dispatch}}>
            <div>
               
                    <Header />
                    <WorkerForm updateSetResults={ updateSetResults } />
                    {getResults && <ResultsPanel />}
            </div> 
        </DataContext.Provider>
    )
}

export default Main