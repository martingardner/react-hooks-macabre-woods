const DataReducer = (state, action) => {
    switch (action.type){
        case 'POPULATE_DATA':
            return action.data
        default:
            return state
    }
}

export default DataReducer