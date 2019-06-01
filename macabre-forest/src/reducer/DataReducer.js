const DataReducer = (state, action) => {
    switch (action.type){
        case 'POPULATE_DATA':
            return action.data
        case 'INCREMENT_WORKER_ROW_COUNT': 
            let currentCount = state.locations[action.index].workercount;

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

        default:
            return state
    }
}

export default DataReducer