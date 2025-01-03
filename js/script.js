const order_btn = document.getElementsByClassName("btn--add_to_cart");
const productCard = document.getElementsByClassName("products");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".page-wrapper__overlay");
const body = document.querySelector("body");
const modal_close = document.querySelector(".modal__close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu__toggle");




products.onclick = function(event){
  let target = event.target;

  

  if (event.target.className != 'btn btn--add_to_cart') return;
 
  modal.style.display = "block";
  overlay.style.display = "block";
  body.style.overflow = "hidden"; 
}

modal_close.addEventListener("click", function() {
  modal.style.display = "none";
  overlay.style.display = "none";
  });


// обработчик открытия меню
hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.add("menu--opened");
  overlay.style.display = "block";
  console.log(menu__links)
});

// обработчик закрытия меню
menuToggle.addEventListener("click", function(event) {
  event.preventDefault();
  menu.classList.remove("menu--opened");
  overlay.style.display = "none";
});

menu.onclick = function(event) {
  const target = event.target;

  // цикл двигается вверх от target к родителям до table
  while (target != this) {
    if (target.tagName == "A") {
      // нашли элемент, который нас интересует!

      menu.classList.remove("menu--opened");
      overlay.style.display = "none";
      return;
    }
    target = target.parentNode;
  }
}
  
  

   
  
  



