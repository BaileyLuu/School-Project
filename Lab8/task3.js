/* Task3.js - Add your Java Script Code Here */
var sum = 0;    //global variable
function Amount(amount) {

sum += amount;  //update the amount of money every use click buttons to add money
var p = document.getElementById("mydata");
p.innerHTML = "Amount = $" + sum.toFixed(2);    //set the amount to 2 decimal places

}