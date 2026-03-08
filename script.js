const form = document.getElementById("waitlist-form");
let success = document.getElementById("success");

// create success div if it doesn't exist
if (!success) {
  success = document.createElement("div");
  success.id = "success";
  success.style.display = "none";
  success.style.marginTop = "20px";
  success.innerText = "Thanks, you’re on the waitlist!";
  form.parentNode.insertBefore(success, form.nextSibling);
}

form.addEventListener("submit", function(){
  setTimeout(() => {
    success.style.display = "block";
    form.reset();
  }, 200);
});
