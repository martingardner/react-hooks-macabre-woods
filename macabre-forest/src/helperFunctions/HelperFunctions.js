const filterArrayReturn = (arr, arrProp, targetProp) => {
    if( Array.isArray(arr) ){
        return arr.filter( (data) => data[arrProp] === targetProp)
    }
}


export { filterArrayReturn }