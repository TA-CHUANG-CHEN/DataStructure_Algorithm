// Got an input [2,3,3,4,1,2,3,5] or [2,3,4,5] array, and find out which character is recurring or return undefined 
import express from 'express';
const app = express();
//brutal way, O(n^2)
function recurringOne(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) { //I don't want to compare [0] and [0]
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}
console.log(recurringOne([1, 6, 3, 4, 5]), "\n", recurringOne([1, 6, 3, 4, 4]));
//tried another way, could be better.  O(n)
function recurringTwo(input) {
    let newOb = {};
    for (let i = 0; i < input.length; i++) {
        if (newOb[input[i]] !== undefined) {
            return input[i];
        }
        else {
            newOb[input[i]] = i; // if i =0  newOb ={'1':0} , if i =1 newOb ={'6':1}... 
        }
    }
    return undefined;
}
console.log(recurringTwo([1, 6, 3, 4, 5]), "\n", recurringTwo([1, 6, 3, 5, 5]), "\n", recurringTwo([9, 1, 9, 3, 3]));
function recurringThree(input) {
    let newOb = {};
    for (let i = input.length - 1; i >= 0; i--) { // 4, 0==stop,
        if (newOb[input[i]] !== undefined) {
            return input[i];
        }
        else {
            newOb[input[i]] = i; // if i =0  newOb ={'1':0} , if i =1 newOb ={'6':1}... 
        }
    }
    return undefined;
}
console.log(recurringThree([1, 1, 3, 4, 4]));
app.listen(3000, () => {
    console.log(`I'm listening port 3000...`);
});
