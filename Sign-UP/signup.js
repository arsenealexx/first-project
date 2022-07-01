
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
        // toggle the type attribute
const type =
password.getAttribute("type") === "password" ? "text" : "password";
password.setAttribute("type", type);
        // toggle the eye slash icon
this.classList.toggle("fa-eye-slash");
});


function store(){

var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');

var email = document.getElementById('email');
var pw = document.getElementById('password');
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
    
    if(email.value.length == 0){
        alert('Please fill in email');
    
    }else if(pw.value.length == 0){
        alert('Please fill in password');
    
    }else if(email.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');
    
    }else if(pw.value.length > 8){
        alert('Max of 8');
    
    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');
    
    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');
    
    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');
    
    }else{
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', pw.value);
        window.open('http:/Sign-IN/signin.html' , '_parent' );
        alert('Your account has been created');
        }
}   
    
