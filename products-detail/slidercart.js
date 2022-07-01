const products = [
    {
      id: 0,
      name: "Apa de toaleta Hugo Boss BOSS Bottled Infinite, 100 ml",
      price: 393,
      instock: 10,
      imgSrc: "../image/Boss-1.jpg",
      brand: "hugo",
      gender: "bar",
      tipe: "lux"
    },
    {
      id: 1,
      name: "Apa de toaleta Versace Eros, Barbati, 100ml",
      price: 352,
      instock: 22,
      imgSrc: "../image/Versace-2.jpg",
      brand: "versace",
      gender: "bar",
      tipe: "lux"
    },
    {
      id: 2,
      name: "Apa de toaleta Versace Eros Flame, Barbati, 100ml",
      price: 420,
      instock: 10,
      imgSrc: "../image/Versace-3.jpg",
      brand: "versace",
      gender: "bar",
      tipe: "cla"
    },
    {
      id: 3,
      name: "Apa de toaleta Valentino Born In Roma Uomo, Barbati, 100ml",
      price: 405,
      instock: 5,
      imgSrc: "../image/Valentino-1.jpg",
      brand: "valentino",
      gender: "bar",
      tipe: "lux"
    },
    {
      id: 4,
      name: "Apa de toaleta Armani Emporio Stronger,Barbati, 100 ml",  
      price: 399,
      instock: 4,
      imgSrc: "../image/Strong-1.jpg",
      brand: "armani",
      gender: "bar",
      tipe: "cla"
    },
    {
      id: 5,
      name: "Apa de toaleta Versace Eros Pour Femme , Femei, 100ml",
      price: 350,
      instock: 40,
      imgSrc: "../image/Versace-woman.jpg",
      brand: "versace",
      gender: "fem",
      tipe: "lux"
    },
    {
      id: 6,
      name: "Apa de toaleta Paco Rabanne, Lady Million, Femei, 80 ml",
      price: 420,
      instock: 8,
      imgSrc: "../image/paco-woman-2.jpg",
      brand: "paco",
      gender: "fem",
      tipe: "cla"
    },
    {
      id: 7,
      name: "Apa de toaleta Hugo Boss BOSS Alive Intense, 100 ml",
      price: 320,
      instock: 35,
      imgSrc: "../image/Boss-woman.jpg",
      brand: "hugo",
      gender: "fem",
      tipe: "lux"
    },
    {
      id: 8,
      name: "Apa de toaleta Valentino Born In Roma Donna, femei, 100ml",
      price: 371,
      instock: 10,
      imgSrc: "../image/Valentino-woman.jpg",
      brand: "valentino",
      gender: "fem",
      tipe: "cla"
    },
    {
      id: 9,
      name: "Apa de toaleta Paco Rabanne, Invictus Legend, Barbati, 100 ml",
      price: 290,
      instock: 3,
      imgSrc: "../image/invictus-2.jpg",
      brand: "paco",
      gender: "bar",
      tipe: "lux"
    },
    {
      id: 10,
      name: "Apa de toaleta Born In Roma Coral Fantasy Donna, femei, 100ml",
      price: 499,
      instock: 15,
      imgSrc: "../image/Valentino-woman-2.jpg",
      brand: "valentino",
      gender: "fem",
      tipe: "cla"
    },
  ];
  
  // SELECT ELEMENTS
  
  const porductsListEl = document.querySelector(".products-list");
  const productsEl = document.querySelector(".products");
  const cartItemsEl = document.querySelector(".cart-items");
  const subtotalEl = document.querySelector(".subtotal");
  const totalItemsInCartEl = document.querySelector(".total-items-in-cart");
  
  
  // RENDER PRODUCTS
  function renderProdcuts() {
    products.forEach((product) => {
      productsEl.innerHTML += `
      <div class="prod-2 ${product.brand} ${product.gender} ${product.tipe}">
      <div class="container-2">
        <img
          src="${product.imgSrc}"
          alt="${product.name}"
        />
      </div>
      <p class="product-title">${product.name}</p>
      <button type="button" class="btn" onclick="addToCart(${product.id})">Adauga in cos</button>
    </div>
          `;
    });
  }
  renderProdcuts();
  
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
  