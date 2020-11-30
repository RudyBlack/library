export const isEmptyArray = (target) => {
    return target && target.constructor === Array && target.length === 0;
};

export const sliceArray = (arr, count) => {
    if(count === 0) return arr;
    
    let rtnArr = [];
    let beforeIndex = 0;
    let lastIndex = count;
    
    for (let i = 0; i < arr.length; i++) {
        if(beforeIndex >= arr.length){
            break;
        }
        
        if(lastIndex > arr.length){
            rtnArr.push(arr.slice(beforeIndex, arr.length));
            break;
        }
        rtnArr.push(arr.slice(beforeIndex, lastIndex));
        beforeIndex = lastIndex;
        lastIndex += count; 
    }
    
    return rtnArr;
};