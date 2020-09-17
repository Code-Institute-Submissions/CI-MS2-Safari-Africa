// Function adapted from CI tutorial for emailjs in mini-project walkthrough
function sendMail(contactForm) {
    emailjs.send("lynx", "ci-ms2", {
        "from_firstname": contactForm.firstname.value,
        "from_lastname": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "request_message": contactForm.message.value,
        "subscribe": contactForm.subscribe.value
    })
        .then(
            // Function to activate success modal
            function (response) {
                successModal();
            },
            // On error, using standard browser alert
            function (error) {
                alert("Sorry it seems we have a problem. Please fill out the form and Submit again", error)
            })
            // Clear form after submission
            document.getElementById('contactForm').reset();
    return false;
}

// Function to show success modal
function successModal(e) {
    $("#emailSuccess").modal("show");
}