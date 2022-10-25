"use strict";
//implement reverse a string.
function reverse(str) {
    if (!str || str.length < 2) {
        return `hmm, We don't need to reverse this!`;
    }
    const backwards = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}
function reverse2(str) {
    return str.split('').reverse().join('');
}
console.log(reverse('BuBoBa'), reverse2('BuBoBa'));
