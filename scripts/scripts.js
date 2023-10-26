(function () {
  emailjs.init("YzNqq8lnJY8o0CeOO");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // these IDs from the previous steps
      emailjs.sendForm("service_hkkh4eg", "contact_form", this).then(
        function () {
            console.log("SUCCESS!");
            //Display success message
              document.getElementById("success-message").style.display = "block";
            event.target.reset()
        },
        function (error) {
            console.log("FAILED...", error);
            alert("Failed...\n" + JSON.stringify(error));
        }
      );
    });
};
