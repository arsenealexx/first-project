"use strict";
// Primul carousel
productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev= document.getElementsByClassName("pro-prev");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
        console.log(prev)

      }
    });
  

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
        console.log(next)

      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 250;
    console.log(slider)
    return items - Math.ceil(visibleItems);
   
  }
}
let slide = document.getElementById("slide");
function translateX(position) {
  //translate items
  slide.style.left = position * -250 + "px";
  console.log(slide)
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  console.log(relevantChildren)
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


// Al 2 lea carusel


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


