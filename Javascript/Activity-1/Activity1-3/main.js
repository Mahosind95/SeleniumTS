let first = prompt("Enter the First Number");
let second = prompt("Enter the Second Number");
let third = prompt("Enter the Third Number");

if(first > second){
    if(first > third){
        alert("The largest number is :" + first);
    }else{
        alert("The largest number is :" + third);
    }
}else{
    if(second > third){
        alert("The largest number is :" + second);
    }else{
        alert("The largest number is :" + third);
    }
}