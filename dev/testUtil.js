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
