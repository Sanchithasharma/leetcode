/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    toBe = (val1) => {
        if (val === val1) {
            return true
        }
        else {
            throw "Not Equal"
        }
    }

    notToBe = (val2) => {
        if (val !== val2) {
            return true
        }
        else {
            throw "Equal"
        }
    }

    return {toBe, notToBe}

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */