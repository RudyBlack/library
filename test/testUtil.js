module.exports = function() {
 return {
  isPrimitive(value) {
   return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
   )
  },
  isValidArrayIndex(val) {
   var n = parseFloat(String(val));
   return n >= 0 && Math.floor(n) === n && isFinite(val)
  },
  isEqualAandB_string(A, B) {
   return A === B;
  },
  getArarryLastElement(arg) {
   return arg[arg.length - 1];
  },
  getArarryLastElementIndex(arg) {
   return arg.length - 1;
  },
  isEmpty_Array(arg) {
   return Object.prototype.toString.call(arg) === "[object Array]" && arg.length === 0 ? true : false;
  },
 }
};
