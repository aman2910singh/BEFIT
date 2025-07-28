function toggleSignup(){
   document.getElementById("login-toggle").style.backgroundColor="#fff";
    document.getElementById("login-toggle").style.color="#222";
    document.getElementById("signup-toggle").style.backgroundColor="#57b846";
    document.getElementById("signup-toggle").style.color="#fff";
    document.getElementById("login-form").style.display="none";
    document.getElementById("signup-form").style.display="block";
}

function toggleLogin(){
    document.getElementById("login-toggle").style.backgroundColor="#57B846";
    document.getElementById("login-toggle").style.color="#fff";
    document.getElementById("signup-toggle").style.backgroundColor="#fff";
    document.getElementById("signup-toggle").style.color="#222";
    document.getElementById("signup-form").style.display="none";
    document.getElementById("login-form").style.display="block";
}
function signup(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    //Name Ckeck
    if( name === "") {
        alert("Please enter your full name.");
        e.preventDefault();
        return;
    }
    //Email Format Validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        e.preventDefault();
        return;
    }
    //All validations passed
    alert("Signup successful!");
    document.location.href = "index3.html"; //  signup

}
function login(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        e.preventDefault();
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        e.preventDefault();
        return;
    }
    // All validations passed
    alert("Login successful!");
    document.location.href = "index3.html"; //  login
}
