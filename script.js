const hamburgerIcon = document.querySelector("#hamburger");
const closeIcon = document.querySelector("#closeIcon");
const mobileNav = document.querySelector("#mobileNav");
const tabs = document.querySelectorAll("[data-tabs]");
hamburgerIcon.addEventListener("click", (e) => {
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  mobileNav.classList.remove("translate-x-[150%]");
});
closeIcon.addEventListener("click", (e) => {
  hamburgerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
  mobileNav.classList.add("translate-x-[150%]");
});

tabs.forEach((elems) => {
  elems.addEventListener("click", (e) => {
    elems.classList.remove("after:opacity-0");
    elems.classList.add("after:opacity-100");
    tabs.forEach((elemsOpposite) => {
      if (elems !== elemsOpposite) {
        elemsOpposite.classList.add("after:opacity-0");
        elemsOpposite.classList.remove("after:opacity-100");
      }
    });
  });
});
