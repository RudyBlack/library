let isPrimitive = function(value) {
 return (
  typeof value === 'string' ||
  typeof value === 'number' ||
  // $flow-disable-line
  typeof value === 'symbol' ||
  typeof value === 'boolean'
 )
}

let isValidArrayIndex = function(val) {
 var n = parseFloat(String(val));
 return n >= 0 && Math.floor(n) === n && isFinite(val)
}

export let getUrlFileName = function(url){
  var urlSplit = url.split("/");
  return urlSplit[ urlSplit.length - 1 ].split(".")[0];
}

export function sliceString(target, count){
  if(typeof target !== 'string') throw '첫번째 매개변수는 string이여야합니다.';
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
