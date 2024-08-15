/*
Write a function commonFactors that accepts two numbers as arguments. The
function should return an array containing positive numbers that are able to
divide both arguments.
*/

// Your code here 
function commonFactors(num1, num2){

    banger = []
    let smol = 0
    let big = 0
    if (num1 > num2){
        big= num1
        smol= num2
    }
    if (num2 > num1){
        big = num2
        smol= num1
    }

    for (i=1; i <= smol; i ++ ){
        if (big % i ===0 && smol % i ===0){
            banger.push(i)
        }
    }
    return banger
}

console.log(commonFactors(4, 8));              // [1, 2, 4]
console.log(commonFactors(12, 24));            // [1, 2, 3, 4, 6, 12]
console.log(commonFactors(22, 44));            // [1, 2, 11, 22]
console.log(commonFactors(7, 9));              // [1]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = commonFactors;