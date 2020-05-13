let isCheck = {

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
            
            typeof value === 'symbol' ||
            typeof value === 'boolean'
        )
    },
    isValidArrayIndex (val) {
        var n = parseFloat(String(val));
        return n >= 0 && Math.floor(n) === n && isFinite(val)
    },

}