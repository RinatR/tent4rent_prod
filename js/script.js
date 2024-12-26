var order_btn = document.getElementsByClassName("btn--add_to_cart");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".page-wrapper__overlay");
var body = document.querySelector("body");
var modal_close = document.querySelector(".modal__close");
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".menu__toggle");

for(var i = 0; i < order_btn.length; i++) {
  order_btn[i].addEventListener("click", function() {
  modal.style.display = "block";
  overlay.style.display = "block";
  body.style.overflow = "hidden";  
  });
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
  var target = event.target;

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
