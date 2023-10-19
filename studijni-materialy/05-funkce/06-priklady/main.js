let multiplier = 3;

let a = 2;
let b = 3;

console.log(sum(a, b));

console.log(multiply(a));

changeMultiplier(4);

console.log(multiply(a));

function sum(a, b) {
    let result = a + b;
    return result;
}

function multiply(number) {
    // přístup k vnější proměnné `mutliplier`
    let result = number * multiplier;
    return result;
}

function changeMultiplier(newMultiplier) {
    // změna vnější proměnné `mutliplier`
    multiplier = newMultiplier;
}

