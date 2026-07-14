//default pararmeter
function add(v1 = 0,v2 = 0){
    console.log(v1 + v2);
}
add();

// arguments object rest operator
function abcd(...args){
    console.log(args);
}

abcd(3,5,67,7,);