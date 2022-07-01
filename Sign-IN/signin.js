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

     
    //checking
function check(){
    var storedName = localStorage.getItem('lastName');
    var storedEmail = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');



    var userName = document.getElementById('lastname');
    var email = document.getElementById('email');
    var userPw = document.getElementById('password');
    
    // var userRemember = document.getElementById("rememberMe");
    
    if(email.value == storedEmail && userPw.value == storedPw){
        window.open('http:/homepage/index.html' , '_parent' );
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
 }