//control flow

// if else
if(3>43){
    console.log("greater");
}else{
    console.log("lesser");
}
//switch

switch(value){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    default:
        console.log("other");
}

//early return pattern

function getVal(value){
    if(value === 1){
        return "one";
    }
    if(value === 2){
        return "two";
    }
    return "other";
}