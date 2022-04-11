let someText = prompt("Enter some text");
let ele = someText.split("");
let res = "";
for(i= ele.length-1; i >=0 ; i--){
    res = res + ele[i];
} 

alert("Reversed String is : " +res);