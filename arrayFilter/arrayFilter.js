/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr
    for (let i in arr) {
        if (fn(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr
};