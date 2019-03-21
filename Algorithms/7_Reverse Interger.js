/**
 * Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 */

 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 记录原来数的正负
    var isNeg = x < 0;
    var result = 0;
    x = Math.abs(x);
    
    while(x) {
        result = x % 10 + result * 10;
        x = Math.floor(x / 10); 
    }

    result = isNeg ? -result : result;
    
    // 注意溢出问题，也就是说，反转之后有可能超出 int 的范围
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) {
        return 0;
    }
    
    return result;
};