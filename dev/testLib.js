import * as TestUtil from './testUtil.js'

let stringToArray_slice = function(target, count) {
   let rtnVal = [];
   let beforeCount = 0;
   let nextCount = count;
   if (count === 0) {
    rtnVal.push(target);
    return rtnVal;
   }
   for (var i = 0; i < target.length; i++) {
    if (nextCount >= target.length) {
     rtnVal.push(target.slice(beforeCount, target.length));
     break;
    }
    rtnVal.push(target.slice(beforeCount, nextCount));
    beforeCount = nextCount;
    nextCount = beforeCount + count;
   };
   return rtnVal;
  }
