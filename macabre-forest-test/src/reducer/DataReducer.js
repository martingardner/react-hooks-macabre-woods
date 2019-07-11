const DataReducer = (state, action) => {

    switch (action.type){
        case 'DECREMENT_WORKER_ROW_COUNT':
            return {
                ...state,
                locations : {
                    ...state.locations,
                    [action.index] : {
                        ...state.locations[action.index],
                        workercount : action.newCount
                    }
                }
            }
        case 'INCREMENT_WORKER_ROW_COUNT': 
            return {
                ...state,
                locations : {
                    ...state.locations,
                    [action.index] : {
                        ...state.locations[action.index],
                        workercount : action.newCount
                    }
                }
            }
        case 'UPDATE_CURRENT_WORKER':
            return {
                ...state,
                currentWorkers : action.newValue
            }
        case 'POPULATE_DATA':
            return action.data
        default:
            return state
    }
}

export default DataReducer