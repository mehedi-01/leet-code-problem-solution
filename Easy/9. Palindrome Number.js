/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
     let reverse = x.toString().split('').reverse().join('')
     return reverse (x.toString()=== reverse);

 };
 var isPalindrome = function(x) {
        let reverse =x.toString().split('').reverse().join('')
        return(x.toString() === reverse)
    };