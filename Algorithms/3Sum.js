/**
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 先给数组进行排序
    nums.sort((a, b) => a - b)
    // 建立一个空数组，存放结果
    var ans = [];
    len = nums.length;
    // 枚举数组,假设枚举的项为三个数中最小的
    for (let i =0; i < len; i++) {
        if (i && nums[i] === nums[i-1]) continue
        // 则 target 为另外两个数之和
        let target = -nums[i];
        // 另外两个数的索引值应该是
        let [start, end] = [i+1, len-1];
        while (start < end) {
            let sum = nums[start] + nums[end];
            if (sum < target) {
                start++
            }else if (sum >target) {
                end--
            }else {
                ans.push([nums[i], nums[start], nums[end]]);
                // 清除重复项
                while (nums[start + 1] === nums[start]) {
                    start++;
                }
                while (nums[end -1] === nums[end]) {
                    end--;
                }
                start++;
                end--;
            }
        }        
    }
    return ans;
};
threeSum([-1, 0, 1, 2, -1, -4]);
// output: [[-1,-1,2],[-1,0,1]]