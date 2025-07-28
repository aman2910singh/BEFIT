function home(){
    document.getElementById("homes").style.color="#ff4d4d"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="white"
}
function plan(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="#ff4d4d"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="white"
}
function program(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="#ff4d4d"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="white"
}
function blog(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="#ff4d4d"
    document.getElementById("contacts").style.color="white"
}
function contact(){
    document.getElementById("homes").style.color="white"
    document.getElementById("plans").style.color="white"
    document.getElementById("programs").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("contacts").style.color="#ff4d4d"
}
// Function to submit
function submit(){
    let name=document.getElementById("name");
    let number=document.getElementById("number");
    const phonePattern = /^\d{10}$/;
    if(name.value==""){
        alert("Enter your name");
    }else if(number.value==""){
        
        alert("Enter your number");

    } else if (!phonePattern.test(number)) {
      alert("Please enter a valid 10-digit phone number.");
    }
    else{
        alert("Thanks for conecting")
    }
}