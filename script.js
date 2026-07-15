(function(){
    
})();

//hoisting 
//this will run 
abcd();



function abcd() {
    console.log("Hello World");
}
// this will not run

fe();

let fe = function() {
    console.log("Hello World");
}