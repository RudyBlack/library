
import "./testUtil";
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
  stringToArray_slice(target, count) {
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
  },
  getArarryLastElement(arg) {
   return arg[arg.length - 1];
  },
  getArarryLastElementIndex(arg) {
   return arg.length - 1;
  },

  AisLittleThanB(A, B) {
   if (typeof A !== "number" || typeof B !== "number") throw "매개변수 A,B는 타입값이 숫자값이여야 합니다.";
   return A < B ? true : false;
  },

  AisBiggerThanB(A, B) {
   if (typeof A !== "number" || typeof B !== "number") throw "매개변수 A,B는 타입값이 숫자값이여야 합니다.";
   return A > B ? true : false;
  },
  isEmpty_Array(arg) {
   return Object.prototype.toString.call(arg) === "[object Array]" && arg.length === 0 ? true : false;
  },

  isExistElement(target, findTarget) {
   //findTarget은 스트링이 와야함.
   if (typeof findTarget !== 'string') {
    throw "findTarget은 문자열이여야 합니다. ex) '.findTarget' ";
   }
   //타겟 안에서 findElement를 찾는다.
   //jquery 일 때
   if (Object.prototype.toString.call(target) === "[object Object]" && typeof target === "object") {
    return target.find(findTarget).length > 0 ? true : false;
   }

   //타겟이 document.getElementsByClassName => [object HTMLCollection] , typeof : object
   if (Object.prototype.toString.call(target) === "[object HTMLCollection]") {
    return target.querySelector(findTarget) ? true : false;
   }

   //타겟이 document.getElementsByClassName[0] => [object HTMLDivElement], typeof : object
   //타겟이 document.getElementById('target') => [object HTMLDivElement], typeof : object
   if (Object.prototype.toString.call(target) === "[object HTMLDivElement]") {
    return target.querySelector(findTarget) ? true : false;
   };
  },

  setElementText(target) {
   if (Object.prototype.toString.call(target) === "[object HTMLDivElement]" || typeof target === "string") {
    return $(target).text(text);;
   };
   return target.text(text);
  },
  elementRemove(target, option) {
   //todo option이 'All' 이면 다 지웁니다.
   target.remove();
  },
  elementAppend(target, insertElement) {
   if (typeof insertElement === 'object') {
   }

   if (Object.prototype.toString.call(target) === "[object HTMLDivElement]") {
    return $(target).append(insertElement);
   };
   return target.append(insertElement);
  },
  pad(n, width) {
   n = n + '';
   return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
  }
 }
};
