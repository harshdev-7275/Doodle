const showMore = document.getElementById("show-more");
const menu = document.getElementById("menu");
const closeMenuBtn = document.getElementById("close-menu");
showMore.addEventListener("click", getMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function getMenu() {
  menu.style.display = "block";
}
function closeMenu() {
  menu.style.display = "none";
}

const cards = document.querySelectorAll("#card");
// const addBtn = document.querySelectorAll("#add-btn");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = `10px 10px 10px #000`;
  });
});
cards.forEach((card) => {
  card.addEventListener("mouseout", () => {
    card.style.boxShadow = ``;
  });
});
let cardDetails;
let count = 0;
let arr = new Array();
// addBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     count++;
//     btn.innerHTML = `Added`;

//     getCards(e.target.parentElement, count);
//   });
// });

// function getCards(value, count) {
//   for (let i = 0; i < count; i++) {
//     arr[i] = value;
//   }
//   const cardSec = document.getElementById("card-sample");

//   arr.forEach((e) => {
//     cardSec = cardSec + e;
//   });
// }
// const cardSec = document.getElementById("card-sample");
// addBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     for (let i = 0; i < count; i++) {
//       console.log(arr[i]);
//       cardSec.innerHTML = `${arr[i]}`;
//     }
//   });
// });

let cardsData = [
  {
    src: "images/19.avif",
  },
  {
    src: "images/20.avif",
  },
];
const addBtn = document.querySelectorAll("#add-btn");

function getElement() {
  const cardSec = document.querySelector(".container-cards");
  cardsData.forEach((e) => {
    cardSec.innerHTML =
      cardSec.innerHTML +
      ` <div class="card" id="card"  >
  <img src=${e.src} alt="" />

  <button class="add-btn" id="add-btn" >Click To Add</button>
</div>`;
    document.getElementById("add-btn").
  });
}

getElement();

function getE(t) {
  console.log(t);
}
