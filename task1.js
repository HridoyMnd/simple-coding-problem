/**
 * You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
 */

// Solution here
const numbers = [5,6,11,12,98, 5];
let count = 0;
function findRepeatedNumber(numbers){
    for(const number of numbers){
        if(number === 5){
            count++;
        }

    }
    return count;
};

const result2 = findRepeatedNumber(numbers);
console.log(result2);

// Solution 2 Here
const numbers2 = [5,6,11,12,98, 5]
const count2 = 0;
function findRepeatedNumber2 (numbers2){
    for(const number of numbers2){
        if(number === 25){
            count++;
        }

    }
    return count2;
};
const result3 = findRepeatedNumber2(numbers2);
console.log(result3);