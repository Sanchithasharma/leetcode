/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = []
    arr.forEach((el, i) => {
        newArr.push(fn(el, i))
    }) 

    return newArr
};