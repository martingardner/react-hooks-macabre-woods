const DataReducer = (state, action) => {
    let currentCount;

    switch (action.type){
        case 'DECREMENT_WORKER_ROW_COUNT':
            currentCount = state.locations[action.index].workercount;

            return {
                ...state,
                locations : {
                    ...state.locations,
                    [action.index] : {
                        ...state.locations[action.index],
                        workercount : currentCount - 1
                    }
                }
            }
        case 'INCREMENT_WORKER_ROW_COUNT': 
            currentCount = state.locations[action.index].workercount;

            return {
                ...state,
                locations : {
                    ...state.locations,
                    [action.index] : {
                        ...state.locations[action.index],
                        workercount : currentCount + 1
                    }
                }
            }
        case 'POPULATE_DATA':
            return action.data
        default:
            return state
    }
}

export default DataReducer