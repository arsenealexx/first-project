// SELECT ELEMENTS
const porductsListEl = document.querySelector(".products-list");
const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".cart-items");
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelector(".total-items-in-cart");

// RENDER PRODUCTS
function renderProdcuts(id) {
  products.forEach((product) => {
    productsEl.innerHTML += `
    <div data-price="" class="prod-1 ${product.brand} ${product.gender} ${product.type} ${product.grupType} ${product.typeProduct}">
  
   <div class="container-2">
      <img
        src="${product.imgSrc}"
        alt="${product.name}"
      />
      
      <button type="button" class="btn-2" onclick="detailedBtn()">Vezi Detalii</button>
      <button type="button" class="btn" onclick="addToCart(${product.id})">Adauga in cos</button>
    </div>
    <p class="product-title">${product.name}</p>
    <p class="product-price">${product.price} </p>
    
  </div>
        `;
  });
}
renderProdcuts();


// const nextButton = document.querySelector('#next_button');
// const prevButton = document.querySelector('#prev_button');
// let contor = 0;


// nextButton.addEventListener('click', () =>{
//     contor++;
//     renderProdcuts(products.slice(contor * 3, (contor * 3) + 3 ));
//     if(contor * 3 > products.length / 3){
//         nextButton.setAttribute('disabled', true);
//         prevButton.removeAttribute('disabled');
//     }
// })
// prevButton.addEventListener('click', () =>{
//     contor--;
//     renderProdcuts(products.slice(contor * 3, (contor * 3) + 3));
//     if(contor <= 0){
//         prevButton.setAttribute('disabled', true);
//         nextButton.removeAttribute('disabled');
//     }
// })

// function generateProducts(productList) {
//   // for(let i = 0; i< userList.length; i++){
//   //     const user = userList[i];  
//   //     console.log(user);  
//   // }
//   const mainContainer = document.querySelector('.products');
//   mainContainer.innerHTML = '';

//   for (const product of productList) {
//       const name = `${product.name} `;
//       console.log(name);
//       renderProdcuts(name);
//   }
// }




(function() {

const sortUsers = document.querySelector('#sort');
sortUsers.addEventListener('change', (event) => {
    const input = event.target.value;
    console.log(input);
    const copyArray = [...products];
    console.log(copyArray);
   
    if (input === 'asc') {
      copyArray.sort((a , b) => a.name.localeCompare(b.name));
    
    }else if (input === 'desc') {
      copyArray.sort((a, b) => b.name.localeCompare(a.name));

    } 
});


  let field = document.querySelector('.products');
  let li = Array.from(field.children);
  console.log(li);
  function SortProduct() {
    let select = document.getElementById('sort');
    let ar = [];
    console.log(ar);

    for(let i of li){
      const last = i.lastElementChild;
      const x = last.textContent.trim();
      const y = Number(x);
      i.setAttribute("data-price", y);
      ar.push(i);
    }
    this.run = ()=>{
      addevent();
    }
    function addevent(){
      select.onchange = sortingValue;
    }
    const copyArray = [...products];
function sortingValue(){
  if (this.value === 'Default') {
    while (field.firstChild) {field.removeChild(field.firstChild);}
      field.append(...ar);	
  }
  if (this.value === 'LowToHigh') {
        SortElem(field, li, true)
  }
  if (this.value === 'HighToLow') {
        SortElem(field, li, false)
  }
 
}


function SortElem(field,li, asc){
  let  dm, sortli;
  dm = asc ? 1 : -1;
  sortli = li.sort((a, b)=>{
  const ax = a.getAttribute('data-price');
  const bx = b.getAttribute('data-price');
  return ax > bx ? (1*dm) : (-1*dm);
  });
  while (field.firstChild) {field.removeChild(field.firstChild);}
  field.append(...sortli);	
  }
}

  new SortProduct().run();
})();



// kjsdkajshdkjhasjkdhasjkdhajkshdsadsadsadas->>>>



// kjsdkajshdkjhasjkdhasjkdhajkshdsadsadsadas->>>>>>


var allCheckboxes = document.querySelectorAll("input[type=checkbox]");
var allProducts = Array.from(document.querySelectorAll(".prod-1"));
var checked = {};

getChecked("parfumuri");
getChecked("brand");
getChecked("tip");
getChecked("grupuriparfum");
getChecked("TipProdus");

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener("change", toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(
    document.querySelectorAll("input[name=" + name + "]:checked")
  ).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allProducts.map(function (el) {
    var parfumuri = checked.parfumuri.length
      ? _.intersection(Array.from(el.classList), checked.parfumuri).length
      : true;
    var brand = checked.brand.length
      ? _.intersection(Array.from(el.classList), checked.brand).length
      : true;
    var tip = checked.tip.length
      ? _.intersection(Array.from(el.classList), checked.tip).length
      : true;
    var grupuriparfum = checked.grupuriparfum.length
      ? _.intersection(Array.from(el.classList), checked.grupuriparfum).length
      : true;
    var TipProdus = checked.TipProdus.length
      ? _.intersection(Array.from(el.classList), checked.TipProdus).length
      : true;
    if (parfumuri && brand && tip && grupuriparfum && TipProdus) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

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

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): Lei${totalPrice.toFixed(
    2
  )}`;
  totalItemsInCartEl.innerHTML = totalItems;
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h4>Lei{item.name}</h4>
            </div>
            <div class="unit-price">
                <small>Lei</small>${item.price}
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


