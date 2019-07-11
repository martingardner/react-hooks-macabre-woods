import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

const Header = () => {

    const { dataReducer } = useContext(DataContext);
       
    return (
        <>
            <div>
                Max Number of Workers : { dataReducer.maxWorkers }
            </div>
            <div>
                Current Number of Placed Workers : { dataReducer.currentWorkers }
            </div>
        </>
    )
}

export default Header