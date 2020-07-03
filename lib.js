module.exports = function () {
    return {

        isUndef (v) {
            return v === undefined || v === null
        },

        isDef (v) {
            return v !== undefined && v !== null
        },

        isTrue (v) {
            return v === true
        },

        isFalse (v) {
            return v === false
        },

        isPrimitive (value) {
            return (
                typeof value === 'string' ||
                typeof value === 'number' ||
                // $flow-disable-line
                typeof value === 'symbol' ||
                typeof value === 'boolean'
            )
        },
        isValidArrayIndex (val) {
            var n = parseFloat(String(val));
            return n >= 0 && Math.floor(n) === n && isFinite(val)
        },

        isEqualAandB_string(A,B){
            return A === B;
        },

        stringToArray_slice(target,count){
            
            let rtnVal = [];
            let beforeCount = 0;
            let nextCount = count;
            if(count === 0) {
                rtnVal.push(target);
                return rtnVal;
            }
            for (var i = 0; i < target.length; i++){
                if(nextCount >= target.length){
                    rtnVal.push(target.slice(beforeCount,target.length));
                    break;
                }
                rtnVal.push( target.slice(beforeCount,nextCount) );
                beforeCount = nextCount;
                nextCount = beforeCount + count;
            };
               return rtnVal;
        },

        getArarryLastElement(arg){
            return arg[arg.length-1];
        },

         getArarryLastElementIndex(arg){
            return arg.length-1;
        },

        /**
         * @param int
         * @param int
         * @return boolean
        */
         AisLittleThanB(A,B){
            if(typeof A !== "number" || typeof B !== "number" ) throw "매개변수 A,B는 타입값이 숫자값이여야 합니다.";
            return A < B ? true : false;
        },  

        /**
         * @param int
         * @param int
         * @return boolean
        */
         AisBiggerThanB(A,B){
            if(typeof A !== "number" || typeof B !== "number" ) throw "매개변수 A,B는 타입값이 숫자값이여야 합니다.";
            return A > B ? true : false;
        },
         isEmpty_Array(arg){
            return Object.prototype.toString.call(arg) === "[object Array]" && arg.length === 0  ? true : false;
        },
    }
};

export let isExistElement = function(target, findElement){
    if(typeof findElement === "object") {
        return findElement.length > 0 ? true : false;
    }
    if(Object.prototype.toString.call(target) === "[object HTMLDivElement]") {
        return $(target).find(findElement).length > 0? true : false;
    };
    return target.find(findElement).length > 0? true : false;
}

export let setElementText = function (target) {
        if(Object.prototype.toString.call(target) === "[object HTMLDivElement]" || typeof target === "string") {
            return $(target).text(text);;
        };
        return target.text(text);
}

export let elementRemove = function (target , option) {
        //todo option이 'All' 이면 다 지웁니다.
        target.remove();
}

export let elementAppend = function (target, insertElement) {
        if(typeof insertElement === 'object'){

        }

        if(Object.prototype.toString.call(target) === "[object HTMLDivElement]") {
            return $(target).append(insertElement);
        };
        return target.append(insertElement);
}

export let pad = function(n, width) {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};


