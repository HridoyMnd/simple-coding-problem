/**
 * Write a function to count the number of vowels in a string.
 */

// Solution Here
const vouels = ["a", "e", "i", "o", "u"];
const myStr = "This is Bangladesh";

function countVouelFunction(myStr){
    let countVouels = 0;
    for(const letter of myStr){
        const isExist = vouels.includes(letter);
        if(isExist){
            countVouels ++;
        }        
    }

    return countVouels;
}
const result5 = countVouelFunction(myStr);
console.log(result5);
