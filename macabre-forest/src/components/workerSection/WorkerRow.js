import React, { useContext , useEffect , useState } from 'react';
import WorkerInput from './WorkerInput';
import DataContext from '../../context/DataContext';

const WorkerRow = (props) => {

    const { dataReducer , dispatch } = useContext(DataContext);
    const [getName, setName] = useState()
     
    console.log('WorkerRow', getName);

    useEffect( ()=> {
        const datarow = dataReducer.locations.filter( (row) => row.id === props.dataid)
        setName(datarow[0].name)
    }, []);

    return (
        <div>
            <WorkerInput />
            <span>{getName}</span>
        </div>
    )
}

export default WorkerRow