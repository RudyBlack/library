export const insertSort = (array) => {
    let rtnArr = array;
    for(let i = 1; i < array.length; i++){
        
        for(let j=i; j>0; j--){
            let curEl = array[j];
            let curIdx = j;
            let compareEl = array[j-1];
            let compareIdx = j-1;
            
            if(curEl < compareEl) arrElMove(rtnArr, curIdx, compareIdx);
        }
        
    }
    
    return rtnArr;
    
    
    function arrElMove(arr, fromIndex, toIndex) {
        const moveTarget = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, moveTarget);
        return arr;
    }
};