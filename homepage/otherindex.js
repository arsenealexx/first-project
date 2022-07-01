
window.onload = function(){
    var newProduct = document.getElementsByClassName('prod-3');
    for (var i = 0; i < newProduct.length; i++) {
      newProduct[i].addEventListener('click', function(event){
        const userId = event.target.parentElement.id;
        console.log(userId);
        window.open(`/products-detail/products.html?id=${userId}` , '_parent' );
        });
    }
};







const searchInput = document.querySelector('#search_by');
const searchButton = document.querySelector('#search_button');
searchButton.addEventListener('click', searchFunction)

function searchFunction() {
  localStorage.setItem('searchValue', searchInput.value);

  window.open(`/Items-List/index.html`, "_blank");
}

// document.querySelector("#earch_by").addEventListener("keydown", function(event) {
//   if (event.keyCode === 13) {
//     searchFunction()
//    }
//   });

// let grid = document.querySelector(".products");
// let filterInput = document.getElementById("search-input");
// const search = document.getElementById("search");
// search.addEventListener("click", filterProducts)


// // callback function 
// function filterProducts(){
//     let filterValue = filterInput.value.toUpperCase();
//     let item = grid.querySelectorAll('.prod-1')

//     for (let i = 0; i < item.length; i++){
//         let span = item[i].querySelector('.product-title');

//         if(span.innerHTML.toUpperCase().indexOf(filterValue) > -1){
//             item[i].style.display = "initial";
//         }else{
//             item[i].style.display = "none";
//         }

//     }
// }




// window.onload = function(){
//   var oldProduct = document.getElementsByClassName('prod-2');
//   console.log(oldProduct);
//   for (var i = 0; i < oldProduct.length; i++) {
//     oldProduct[i].addEventListener('click', function(){
//       window.open('http:/Proiect final Wansome/products/products.html' , '_parent' );
//       });
//   }
// };