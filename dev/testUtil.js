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

export function getQueryString(url) {
    var params = {};
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
    return params;
}

export function sliceString(target, count){
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
};

export let compressString = function(string, count){
  let cnt = 1;
  let fromIndex = 0;
  let toIndex = count;
  let rtnStringVal = "";

  for (var i = 0; i < string.length; i++) {
    let compareString_A = string.substring(fromIndex, toIndex);
    let compareString_B = string.substring(toIndex, toIndex + count);
    if (toIndex >= string.length) {
      ctn = 1;
      rtnStringVal = rtnStringVal + (cnt === 1 ? "" : cnt) + compareString_A;
     break;
    }
    fromIndex = toIndex;
    toIndex += count;
    if( compareString_A === compareString_B ){
      cnt += 1;
    }else{
      cnt = 1;
      rtnStringVal = rtnStringVal + (cnt === 1 ? "" : cnt) + compareString_A;
    }
  }
  return rtnStringVal;
}
