/* Task5.js - Add your Java Script Code Here */
function updateDate(){
    var p = document.getElementById("mydata");

    var myDate = new Date();            //Date object
    var day = myDate.getDay();          //return day of the week
    var month = myDate.getMonth();  //to get the correct month, you must add 1
    var year = myDate.getFullYear();    //year in yyyy
    var date = myDate.getDate();        //today's date

    var storeMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayOfTheWeek = ["Sunday", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    // in JS, the first day of the week (0) means "Sunday"
    p.innerHTML = "Today is " + dayOfTheWeek[day] + ", " + storeMonth[month] + " " + date + ", " + year;
    //-1 because the array starts at 0 not 1
}
