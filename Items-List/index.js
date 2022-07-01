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
    text.innerHTML = `log in as , ${first} `;
    actionBtn.innerHTML = "logout";
    actionBtn.addEventListener("click", () => logout());
}else{
    text.innerHTML = "login to your acount";
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

//Search input 

let grid = document.querySelector(".products");
const search = document.getElementById("search");

search.addEventListener("click", filterProducts)
// const userSearchValue = localStorage.getItem('searchValue');
let filterInput = document.getElementById("search-input");
filterInput.value = localStorage.getItem('searchValue');

// filterInput.addEventListener("input", (input) =>{
//   let inputVal = input.value;
//   console.log(inputVal);
// })

// callback function 
function filterProducts(){
  
    let filterValue = localStorage.getItem('searchValue');
    console.log(filterValue);
    let item = grid.querySelectorAll('.prod-1')

    for (let i = 0; i < item.length; i++){
        let span = item[i].querySelector('.product-title');

        if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            item[i].style.display = "initial";
        }else{
            item[i].style.display = "none";
        }

    }
}

document.querySelector("#search-input").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    filterProducts()
  }
});





function detailedBtn(){
  // const userId = event.target.parentElement.id;
  // console.log(userId);

  window.open(`http:/products-detail/products.html` , '_parent' );
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

