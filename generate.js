/**
 * Generate a random number between 10 to 20.
 * 
 */


// Task 5
const randomNumber = Math.random()*20;
const roundRandomNumber = Math.round(randomNumber);
console.log(roundRandomNumber);


// Task 4
const inpStr = "I am learning Programming to become a programmer";

function findBigWord(inpStr) {
    let prevWord = "";
    const inpStrArray = inpStr.split(" ");
    for(const word of inpStrArray){
        const wordLength = word.length;
        if(prevWord.length < wordLength){
            prevWord = word;
        }
    }
    return prevWord;
};

const result4 = findBigWord(inpStr);
console.log(result4);

