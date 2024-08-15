/*
Write a function tripler(nums) that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.
*/

// Your code here 
function tripler(nums){
    // let triple = array[i]*3
    for( i=0;i < nums.length; i++){
        nums[i]*=3
    }
    return nums
}


 console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
 console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripler;