
document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const dob = document.getElementById("dob").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const address = document.getElementById("address").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Name check
    if (name === "") {
        alert("Please enter your full name.");
        e.preventDefault();
        return;
    }

    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
    }

    // Password match check
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        e.preventDefault();
        return;
    }

    // DOB check
    if (dob === "") {
        alert("Please select your date of birth.");
        e.preventDefault();
        return;
    }

    // Height and Weight check
    if (height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        e.preventDefault();
        return;
    }

    // Address check
    if (address === "") {
        alert("Please enter your address pin code.");
        e.preventDefault();
        return;
    }

    // Gender selection check
    if (!gender) {
        alert("Please select your gender.");
        e.preventDefault();
        return;
    }

    // All validations passed
    alert("Form submitted successfully!");
});


