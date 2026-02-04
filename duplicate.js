/**
 * remove duplicate item from an arary
 * const numbers = [1, 3, 2, 4, 4, 2, 6, 5, 6, 4, 2, 3, 7, 9, 1, 4, 3];
 */

// Solution here
const numbers = [1, 3, 2, 4, 4, 2, 6, 5, 6, 4, 2, 3, 7, 9, 1, 4, 3];
const unique = [];

function removeDuplicate (numbers) {
    for(const number of numbers){
       const isExist =  unique.includes(number);
       if(!isExist){
        unique.push(number);
       }
    }

};

removeDuplicate(numbers);
console.log(unique);
