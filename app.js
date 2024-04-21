const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const para = document.querySelectorAll(".answer");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].classList.add("hidden");
    minus[i].classList.remove("hidden");
    para[i].classList.remove("hidden");
  });
}

for (let i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    plus[i].classList.remove("hidden");
    minus[i].classList.add("hidden");
    para[i].classList.add("hidden");
  });
} 
