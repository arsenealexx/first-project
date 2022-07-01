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
    window.open('http:/Proiect final Wansome/Sign-IN/signin.html' , '_parent' );
}
const logout = () => {
    localStorage.clear()
    location.reload();
}



const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const porductsListEl = document.querySelector(".products-list");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");


let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();


function renderCartItems() {
    cartItemsEl.innerHTML = ""; // clear cart element
    cart.forEach((item) => {
      cartItemsEl.innerHTML += `
          <div class="cart-item">
              <div class="item-info" onclick="removeItemFromCart(${item.id})">
                  <img src="${item.imgSrc}" alt="${item.name}">
                  <h4>${item.name}</h4>
              </div>
              <div class="unit-price">
                  <small>Lei </small>${item.price}
              </div>
              <div class="units">
                  <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div> 
              </div>
          </div>
        `;
    });
}
renderCartItems()

function updateCart() {
    renderCartItems();
    renderSubtotal();
  
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
}

function renderSubtotal() {
    let totalPrice = 0,
      totalItems = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });
  
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): Lei${totalPrice.toFixed(2)}`;
}

// remove item from cart
function removeItemFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
  
    updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
      let numberOfUnits = item.numberOfUnits;
  
      if (item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
          numberOfUnits--;
        } else if (action === "plus" && numberOfUnits < item.instock) {
          numberOfUnits++;
        }
      }
  
      return {
        ...item,
        numberOfUnits,
      };
    });
  
    updateCart();
  }

  // ADD TO CART
function addToCart(id) {
    // check if prodcut already exist in cart
    if (cart.some((item) => item.id === id)) {
      changeNumberOfUnits("plus", id);
    } else {
      const item = products.find((product) => product.id === id);
  
      cart.push({
        ...item,
        numberOfUnits: 1,
      });
    }
  
    updateCart();
  }

  
let grid = document.querySelector(".products");
let filterInput = document.getElementById("search-input");
const search = document.getElementById("search");
search.addEventListener("click", filterProducts)


// callback function 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
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

