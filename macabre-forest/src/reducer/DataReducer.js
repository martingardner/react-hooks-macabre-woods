const DataReducer = (state, action) => {
    switch (action.type){
        case 'POPULATE_DATA':
            return action.data
        case 'MAX_WORKERS':
            return action.maxWorker
        case 'RETURN_LOCATION_NAME':
            const locArr = state().locations;
            console.log('action', action);
            const index = locArr.findIndex( row => row.id == action.id);
            console.log('index', index, locArr[index].name);
        default:
            return state
    }
}

export default DataReducer