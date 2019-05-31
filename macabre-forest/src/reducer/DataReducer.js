const InitValues = () => {
    return { maxWorkers : 2}
} 

const DataReducer = (state, action) => {
    switch (action.type){
        case 'MAX_WORKERS':
            return action.maxWorker
        case 'RESET':
            return InitValues
        default:
            return state
    }
}

export {InitValues, DataReducer}