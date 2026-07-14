//return

function returnValue(value) {
    return value;
}

value = returnValue(5);
console.log(value); // Output: 5

//early return

function checkNumber(num) {
    if (num < 0) {
        return "Negative number";
    }
}   