/* Task6.js - Add your Java Script Code Here */
var i = 20;
function countDown() {
    var p = document.getElementById("mydata");
    
    if(i <= 0){
        p.innerHTML = "liftoff!";
    }else{
        p.innerHTML = i;
    }
    i -= 1;
}