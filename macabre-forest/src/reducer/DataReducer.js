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
        ]
    }
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