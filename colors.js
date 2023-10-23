 // ****************change color of the storkes************************
 let redColor = document.querySelector(".red");  // red, green, blue button
 let greenColor = document.querySelector(".green");
 let blueColor = document.querySelector(".blue");

 redColor.addEventListener("click", function () {
     tool.strokeStyle = "red";

 })
 greenColor.addEventListener("click", function () {
     tool.strokeStyle = "green";

 })
 blueColor.addEventListener("click", function () {
     tool.strokeStyle = "blue";

 })