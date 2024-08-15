/*
Write a function alternatingWords that accepts an array of words as an argument.
The function should mutate the input array such that the words alternate between
fully uppercase or lowercase. The first word should be uppercase.
*/

// Your code here 
// function alternatingWords(array){
//     let newArray = []

//     for(i=0;i <array.length;i+2){
//         newArray.push(array[i].toUpperCase())
//     }
// }return newArray

function alternatingWords(array){
    for (i=0;i < array.length; i++){
        if (i %2 === 0){
            array[i]= array[i].toUpperCase()
        }
        if (i %2 ===1){
            array[i] = array[i].toLowerCase()
        }
    }
    return array
}


let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = alternatingWords;