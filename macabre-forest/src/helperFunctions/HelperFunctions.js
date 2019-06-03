const filterArrayReturn = (arr, arrProp, targetProp) => {
    if( Array.isArray(arr) ){
        return arr.filter( (data) => data[arrProp] === targetProp)
    }
}

const returnWorkerRowTotals = (arr) => {
    let tally = 0;
    if(Array.isArray(arr)){ 
        console.log('returnWorkerRowTotals', arr);
        arr.forEach( (val) => {
            //console.log('val', val);
            console.log('val.workercount', tally, val.workercount);
            tally = tally + val.workercount;
            console.log('tally', tally);
        });
    }
    return tally;
}


export { filterArrayReturn , returnWorkerRowTotals }