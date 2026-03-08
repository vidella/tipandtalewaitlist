const form = document.getElementById("waitlist-form");
let success = document.getElementById("success");

// if the success div doesn't exist, create it
if (!success) {
  success = document.createElement("div");
  success.id = "success";
  success.style.display = "none";
  success.style.marginTop = "20px";
  success.innerText = "Thanks, you’re on the waitlist!";
  form.parentNode.insertBefore(success, form.nextSibling);
}

form.addEventListener("submit", function(e){
  e.preventDefault(); // prevent page reload

  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    body: new URLSearchParams(formData)
  })
  .then(() => {
    // show success message after 200ms like before
    setTimeout(function(){
      success.style.display = "block";
      form.reset();
    }, 200);
  })
  .catch(err => console.error(err));
});
