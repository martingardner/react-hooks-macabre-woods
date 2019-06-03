const filterArrayReturn = (arr, arrProp, targetProp) => {
    if( Array.isArray(arr) ){
        return arr.filter( (data) => data[arrProp] === targetProp)
    }
}

const returnWorkerRowTotals = (arr) => {
    let tally = 0;
    if(Array.isArray(arr)){ 
        arr.forEach( (val) => {
            tally = tally + val.workercount;
        });
    }
    return tally;
}


export { filterArrayReturn , returnWorkerRowTotals }