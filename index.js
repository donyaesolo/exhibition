
function openProject(evt, projectName) {
    var i, content, tablink;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active"; 
	
}  
document.getElementById("defultOpen").click();

 
 function songFunction(){
 window.alert("The Song That is Playing is L.A. Noire");
 }
  function song2Function(){
 window.alert("The Song That is Playing is Home");
 }
 
  function date(){
	  var d = new Date();
	  var f = d.getDate();
	  var n = d.getDay();
	   var y = d.getFullYear();
   var e = d.getMonth();
  var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()]; 
	 var month = new Array(12);
    month[1] = "January";
     month[2] = "Febuary";
     month[3] = "March";
     month[4] = "April";
     month[5] = "May";
     month[6] = "June";
     month[7] = "July";
	 month[8] = "August";
     month[9] = "September";
	 month[10] = "October";
     month[11] = "Novemeber";
     month[12] = "December";
 
    var e =  month[d.getDay()];
	document.getElementById("date").innerHTML = "Date:" + n +" " + e +" "+ f + "," + y;
	
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();
	document.getElementById("time").innerHTML = "Time:" + h +":" + m + ":" +s;
 }
 