/**
 * 变位词
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //先比较长度
    if (s.length != t.length)
        return false;
    // 字符串转数组，再排序
    var a = s.split('').sort(), b = t.split('').sort();
    // 数组转字符串，再比较
    return a.toString() === b.toString()
};