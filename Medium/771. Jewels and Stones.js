/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(j, s) {
    let count = 0;
    for (let stone of s){
        count += j.indexOf(stone) !== -1 ? 1 : 0;
    }
    return count;
};