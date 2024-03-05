let categoryEl = document.querySelectorAll(".collect-category li");
let productsEl = document.querySelectorAll(".product-items");

categoryEl.forEach((item) => {
  item.addEventListener("click", () => {
    categoryEl.forEach((item) => item.classList.remove("collect-active"));
    item.classList.add("collect-active");
    let key = item.getAttribute("key");
    productsEl.forEach((item) => {
      if (item.getAttribute("key") != key) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
    if (key === "all") {
      productsEl.forEach((item) => (item.style.display = "block"));
    }
  });
});

let reviewLinkEl = document.querySelectorAll(".review-links");
let reviewRightEl = document.querySelectorAll(".review-right");
for (let i = 0; i < reviewRightEl.length; i++) {
  reviewRightEl[i].style.display = "none";
  reviewRightEl[0].style.display = "block";
}
reviewLinkEl.forEach((item) =>
  item.addEventListener("click", () => {
    let key = item.getAttribute("key");
    reviewRightEl.forEach((item) => {
      if (key != item.getAttribute("key")) {
        item.style.display = "none";
      } else {
        item.style.display = "block";
      }
    });
  })
);
