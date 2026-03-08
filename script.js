const form = document.getElementById("waitlist-form");
const success = document.getElementById("success");

form.addEventListener("submit", function(){

setTimeout(function(){

success.style.display = "block";

}, 200);

});