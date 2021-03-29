/* Task1.js - Add your Java Script Code Here */
function myFunction()
{
  var p = document.getElementById("mydata");
  var num = Math.random();  //get random number from 0 (inclusive) to 1 (exclusive) 
  if(num >= 0.5){
    p.innerHTML = "tails";
  }else{
    p.innerHTML = "heads";
  }
  // set p.innerHTML equal to heads or tails

}
