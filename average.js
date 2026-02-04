

// calculate the average of the odd numbers in an array
const oddNumbers = [];
let totalOddNumber = 0;
function oddAverage(numbers) {

    for (const number of numbers) {
        if (number % 2 !== 0) {
            oddNumbers.push(number)
            totalOddNumber += number;
        }
    }

    const oddLength = oddNumbers.length;
    const oddNumberAvrg = totalOddNumber / oddLength;
    return oddNumberAvrg;

};

const numbers = [42, 13, 58, 65, 81, 96];
const result1 = oddAverage(numbers);
console.log(result1);