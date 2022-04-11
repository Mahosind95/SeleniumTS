let randNum = Math.floor(Math.random() * 10) + 1;
enteredNumber = -1;
while(enteredNumber !== randNum){
    enteredNumbert = prompt("Guess the number");
    if(enteredNumbert > randNum){
        alert("Your guess was greater");
    }else if(enteredNumbert < randNum){
        alert("Your guess was lesser");
    }else{
        alert("Correct !! The Number was" + randNum);
        break;
    }
}

