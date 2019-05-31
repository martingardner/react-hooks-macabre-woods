const InitValues = () => {
    return { 
        maxWorkers : 2,
        locations : [
            {
                id: 0,
                name: 'Gloomfire Swamp'
            },
            {
                id: 1,
                name: 'Rattleskull Forest'
            }
        ],
        workerRowCount : [
            {
                id: 0,
                count : 0
            },
            {
                id: 1,
                count : 0
            }
        ]
    }
} 

const DataReducer = (state, action) => {
    switch (action.type){
        case 'MAX_WORKERS':
            return action.maxWorker
        case 'RETURN_LOCATION_ROW':
            const locArr = state().locations;
            const locationResult = locArr.filter( (row) => row.id == action.id);
            //return locationResult
        case 'RESET':
            return InitValues
        default:
            return state
    }
}

export {InitValues, DataReducer}