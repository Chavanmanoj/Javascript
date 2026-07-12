//var let const

//declaration and initialization

var a; //declare
var a = 32 ;//initialize

//add in the window when we create with the var 
// function soped hota hai var

var username = "manoj";
//console.log(username);

var username = "ihcus"; //op is ihcus of the username
console.log(username);

//now let 
let b = 42;
/*let b = 75; we cannot declare variable 
with let again in the same scope */
console.log(b);

//const

const c =3.14 ; 

// scope global block functional

function test(){
    var x = 10; //function scope
}

// global scope

var x = 10 ;

//block scope
{
    var y =20; //var function scope
    let w = 20; //block scope we use in the block only
}
