function sendMail(contactForm) {
    emailjs.send("lynx", "ci-ms2", {
        "from_firstname": contactForm.firstname.value,
        "from_surname": contactForm.surname.value,
        "from_email": contactForm.email.value,
        "request_message": contactForm.message.value
    })
        .then(
            function (response) {
                alert("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error)
            })
    return false;
}