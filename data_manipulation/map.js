// Map syntax

// Array.map(function (currentValue, index, array) {
//     // function for each element
//     // return element
// })

// example
const numbers = [1, 2, 4, 5, 6, 7];

const angkaDikaliDua = numbers.map(function (number) {
    return number * 2;
})

console.log(numbers);
console.log(angkaDikaliDua);