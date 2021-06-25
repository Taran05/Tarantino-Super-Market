/* index.html */

/* For navbar */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* For Modal popup*/

var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("signup");
var span1 = document.getElementsByClassName("close1")[0];

 
btn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}


var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("login");
var span2 = document.getElementsByClassName("close2")[0];

 
btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {

  if (event.target == modal1) {
    modal1.style.display = "none";
  }

  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/* For image slider */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/*For contact.html */

function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("issue").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 8){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(mobile) || mobile.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 50){
    text = "Please Enter More Than 50 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

function validateForm() {
  var email = document.forms["myForm"]["email"].value;
  var pass = document.forms["myForm"]["pass"].value;
  if (email == "") {
    alert("Email cannot be empty");
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    alert("Please enter valid Email");
    return false;
  }
  if (pass == "") {
    alert("Password cannot be empty");
    return false;
  }
  if (pass.length<8) {
    alert("Password cannot be less than 8 characters");
    return false;
  }
}