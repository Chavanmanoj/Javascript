// lexical scoping
function abcd() {
    let a = 10;
    function inner() {
        let b = 20;
        function innerMost() {
            let c = 30;
            console.log(a + b + c); // Accessing variables from outer scopes
        }
    }
}