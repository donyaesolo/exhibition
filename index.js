function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
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
 window.alert("The Song That is Playing is La Noire");
 }
  function song2Function(){
 window.alert("The Song That is Playing is Home");
 }