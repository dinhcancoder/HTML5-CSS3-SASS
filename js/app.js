let headerIcons = document.querySelectorAll("#headerIcons");

for (let i = 0; i < headerIcons.length; i++) {
  headerIcons[0].addEventListener("click", () => {
    headerIcons[0].classList.toggle("openHeaderIcons");
    headerIcons[1].classList.remove("openHeaderIcons");
    headerIcons[2].classList.remove("openHeaderIcons");
  });
  headerIcons[1].addEventListener("click", () => {
    headerIcons[0].classList.remove("openHeaderIcons");
    headerIcons[1].classList.toggle("openHeaderIcons");
    headerIcons[2].classList.remove("openHeaderIcons");
  });
  headerIcons[2].addEventListener("click", () => {
    headerIcons[0].classList.remove("openHeaderIcons");
    headerIcons[1].classList.remove("openHeaderIcons");
    headerIcons[2].classList.toggle("openHeaderIcons");
  });
}

// menu mobile
function menuMobile(e) {
  e.classList.toggle("menuMobile");
}

function menuSubMobile(e) {
  e.parentElement.parentElement.parentElement.parentElement
    .querySelector("a")
    .classList.toggle("menuMobile");
}

// display menu
function menuIcons(e) {
  e.parentElement.classList.toggle("displayMenuMobile");
  let body = document.querySelector("body");
  body.classList.toggle("overflowY");
  e.querySelector("img").classList.toggle("menuImg");
  if (e.querySelector("img").className === "menuImg") {
    e.querySelector("img").setAttribute("src", "./assets/image/close.svg");
    e.querySelector("img").style.width = "16px";
  } else {
    e.querySelector("img").setAttribute("src", "./assets/image/menu.svg");
    e.querySelector("img").style.width = "";
  }
}

function overflowY() {
  let body = document.querySelector("body");
  body.classList.toggle("overflowY");
}

// hiển thị submenu blog
let items = document.querySelectorAll(".blog-items");
for (let i = 0; i < items.length; i++) {
  items[1].addEventListener("click", () => {
    items[i].classList.toggle("displaySubmenuBlog");
    items[2].classList.remove("displaySubmenuBlog");
  });
  items[2].addEventListener("click", () => {
    items[i].classList.toggle("displaySubmenuBlog");
    items[1].classList.remove("displaySubmenuBlog");
  });
}

// detail
let detailLinks = document.querySelectorAll(".detail-links a");

for (let i = 0; i < detailLinks.length; i++) {
  detailLinks[0].addEventListener("click", () => {
    detailLinks[i].style.border = "none";
    detailLinks[0].style.borderBottom = "2px solid black";
    document.querySelector(".review1").style.display = "block";
    document.querySelector(".review2").style.display = "none";
    document.querySelector(".review3").style.display = "none";
  });
  detailLinks[1].addEventListener("click", () => {
    detailLinks[i].style.border = "none";
    detailLinks[1].style.borderBottom = "2px solid black";
    document.querySelector(".review1").style.display = "none";
    document.querySelector(".review2").style.display = "block";
    document.querySelector(".review3").style.display = "none";
  });
  detailLinks[2].addEventListener("click", () => {
    detailLinks[i].style.border = "none";
    detailLinks[2].style.borderBottom = "2px solid black";
    document.querySelector(".review1").style.display = "none";
    document.querySelector(".review2").style.display = "none";
    document.querySelector(".review3").style.display = "block";
  });
}

// detail slider img
let detailImg = document.querySelectorAll(".detail-img img");

for (let i = 0; i < detailImg.length; i++) {
  detailImg[i].addEventListener("click", () => {
    for (let i = 0; i < detailImg.length; i++) {
      detailImg[i].style.border = "none";
    }
    detailImg[i].style.border = "1px solid rgb(150, 228, 228)";
    document
      .querySelector(".detail-image img")
      .setAttribute("src", detailImg[i].getAttribute("src"));
  });
}

window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrollSticky", window.scrollY > 222);
});

let sticky = document.querySelectorAll(".stikyLogo");

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("scrollSticky", window.scrollY > 88);
});

// cart
let valueQuantity = document.querySelectorAll(".valueQuantity");
let cartsPricee = document.querySelectorAll(".carts-pricee");
let thanhtien = document.querySelectorAll("#thanhtien");
let tongtien = document.querySelector("#tongtien");

for (let i = 0; i < cartsPricee.length; i++) {
  // thanhtien[i].innerHTML = cartsPricee[i].getAttribute('value');
  tongtien.innerHTML =
    (
      +cartsPricee[0].getAttribute("value") * +valueQuantity[0].innerHTML +
      +cartsPricee[1].getAttribute("value") * +valueQuantity[1].innerHTML
    ).toLocaleString() + "đ";
}

function cong(e) {
  ++e.parentElement.querySelector("span").innerHTML;
  for (let i = 0; i < cartsPricee.length; i++) {
    thanhtien[i].innerHTML =
      (
        +cartsPricee[i].getAttribute("value") * +valueQuantity[i].innerHTML
      ).toLocaleString() + "đ";
    tongtien.innerHTML =
      (
        +cartsPricee[0].getAttribute("value") * +valueQuantity[0].innerHTML +
        +cartsPricee[1].getAttribute("value") * +valueQuantity[1].innerHTML
      ).toLocaleString() + "đ";
  }
}
function tru(e) {
  if (e.parentElement.querySelector("span").innerHTML > 1) {
    --e.parentElement.querySelector("span").innerHTML;
    for (let i = 0; i < cartsPricee.length; i++) {
      thanhtien[i].innerHTML =
        (
          +cartsPricee[i].getAttribute("value") * +valueQuantity[i].innerHTML
        ).toLocaleString() + "đ";
      tongtien.innerHTML =
        (
          +cartsPricee[0].getAttribute("value") * +valueQuantity[0].innerHTML +
          +cartsPricee[1].getAttribute("value") * +valueQuantity[1].innerHTML
        ).toLocaleString() + "đ";
    }
  }
}

// document.addEventListener("keydown", function (event) {
//   if (event.ctrlKey) {
//     event.preventDefault();
//   }
//   if (event.keyCode == 123) {
//     event.preventDefault();
//   }
// });
// document.addEventListener('contextmenu', event => event.preventDefault());
