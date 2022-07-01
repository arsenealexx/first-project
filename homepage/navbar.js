const createNavbar = () => {
    let navbar = document.querySelector(".logo-navigation");

    navbar.innerHTML += `
    <div class="logo-nav">
    <a href="#" id="logo" >NOTINGO <span>LOGO</span> </a>
   </div>
   <div class="navbar-1">
       
      <div class="nav-bar-2">
        <a href="/Sign-UP/signup.html">Register</a>
        <a href="/Sign-IN/signin.html">Login</a>
      </div>
      

      <div class="shopping-bag">
        <a href="/Cart/addtocart.html">
            <img src="/icons/bag-plus - Copy.png"  alt="cart">
            Cosul
            <div class="total-items-in-cart">0</div></a>
      </div>
      <a>
      <img src="/image/user-icon.png" class="user-icon" alt="">
      <div class="user-icon-popup hide">
        <p class="account-info">Login to your account</p>
        <button class="bt" id="user-btn">Log out</button>
      </div>
      </a>
   </div>`
}
createNavbar();

let totalItemsInCartEl = document.querySelector(".total-items-in-cart");

let userIcon = document.querySelector(".user-icon");
let userPopIcon = document.querySelector(".user-icon-popup");

userIcon.addEventListener("click", () => {
  userPopIcon.classList.toggle("hide");
})


let text = userPopIcon.querySelector(".account-info");
let actionBtn = userPopIcon.querySelector("#user-btn");
let user = localStorage.getItem('lastName');
let first= localStorage.getItem('firstName');



if(user != null){
  
    text.innerHTML = `Salut, ${first} ${user}`;
    actionBtn.innerHTML = "logout";
    actionBtn.addEventListener("click", () => logout());
}else{

    text.innerHTML = "Intra in contul tau";
    actionBtn.innerHTML = "login"
    actionBtn.addEventListener("click", goToLoginPage);
}

function goToLoginPage(){
    window.open('http:/Sign-IN/signin.html' , '_parent' );
}
const logout = () => {
    localStorage.clear()
    location.reload();
}

