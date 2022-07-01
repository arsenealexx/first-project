
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

//Slider image
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);



let grid = document.querySelector(".products");
let filterInput = document.getElementById("search-input");
const search = document.getElementById("search");
search.addEventListener("click", filterProducts)


// Search input 
function filterProducts(){
    let filterValue = filterInput.value.toUpperCase();
    let item = grid.querySelectorAll('.prod-1')
    localStorage.setItem('searchValue', searchInput.value);
    window.open(`/Items-List/index.html`, "_blank");

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


//Carousel with products

productScrollSecond();

function productScrollSecond() {
  let sliderSecond = document.getElementById("slider-second");
  let nextSecond = document.getElementsByClassName("pro-next-second");
  let prevSecond = document.getElementsByClassName("pro-prev-second");
  let itemSecond = document.getElementById("slide-second");

  for (let i = 0; i < nextSecond.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prevSecond[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateXSecond(position); //translate items
        console.log(prevSecond)

      }
    });
  

    nextSecond[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItemsSecond()) {
        //avoid slide right beyond the last item
        position += 1;
        translateXSecond(position); //translate items
        console.log(nextSecond)

      }
    });
  }

  function hiddenItemsSecond() {
    //get hidden items
    let itemsSecond = getCountSecond(itemSecond, false);
    let visibleItemsSecond = sliderSecond.offsetWidth / 250;
    console.log(sliderSecond)
    return itemsSecond - Math.ceil(visibleItemsSecond);
   
  }
}
let slideSecond = document.getElementById("slide-second");
function translateXSecond(position) {
  //translate items
  slideSecond.style.left = position * -250 + "px";
  console.log(slide)
}

function getCountSecond(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  console.log(relevantChildren)
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCountSecond(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


