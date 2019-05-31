import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Header = () => {

    const { dataReducer } = useContext(DataContext);
        
    return (
        <div>
            Max Number of Workers : { dataReducer().maxWorkers }
        </div>
    )
}

export default Header