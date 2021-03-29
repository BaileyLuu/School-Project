/* Task4.js - Add your Java Script Code Here */
function Roll() { 

var sum = 0;
var p = document.getElementById("mydata");
p.innerHTML="";         //reset the paragraph to empty when user roll the dice for another three sets
var diceOne = 0;
var diceTwo = 0;
for(i = 0; i < 3;i++){
    diceOne = Math.floor(Math.random()*6 +1);
    diceTwo = Math.floor(Math.random()*6 +1);
    if(i == 2){
        p.innerHTML += diceOne + " " + diceTwo + " "
    }else{
        p.innerHTML += diceOne + " " + diceTwo + ","
    }
    sum += diceOne + diceTwo;
}
p.innerHTML+= "<br>Average: " + (sum/3).toFixed(2); //print the average of 3 sets to 2 decimal places

var rollDice = 0;
var setOne = [];
/*for(i = 0; i < 6; i++){
    rollDice = Math.floor(Math.random()*6)+1;  //random number from 1 to 6 (both included)
    sum += rollDice;        //calculate the sum of all random numbers
    setOne[i] = rollDice;   //each random number will be stored in array for later use
}

for(i = 0; i <= setOne.length-1; i++){
    if(i >=4){              //when it is last set, it will not print comma
        p.innerHTML += " " + setOne[i];
    }else if((i%2)!=0){     //when the index is in odd position, seperate the set with a comma
        p.innerHTML += " " + setOne[i] + ", ";//print the stored-random-number and commas for the first two sets 
    }else{
        p.innerHTML += " " + setOne[i];//when the index is in even position, just add space between
                                       //two random numbers of each set
    }
}*/

}