const card1 = document.getElementById("card1");
const bt1 = document.getElementById("bt1");
const card2 = document.getElementById("card2");
const bt2 = document.getElementById("bt2");
const card3 = document.getElementById("card3");
const bt3 = document.getElementById("bt3");
const card4 = document.getElementById("card4");
const bt4 = document.getElementById("bt4");
const card5 = document.getElementById("card5");
const bt5 = document.getElementById("bt5");
const card6 = document.getElementById("card6");
const bt6 = document.getElementById("bt6");
const card7 = document.getElementById("card7");
const bt7 = document.getElementById("bt7");

card1.addEventListener("mouseenter", () => {
  bt1.classList.remove("hidden");
});
card1.addEventListener("mouseleave", () => {
  bt1.classList.add("hidden");
});
card2.addEventListener("mouseenter", () => {
  bt2.classList.remove("hidden");
});
card2.addEventListener("mouseleave", () => {
  bt2.classList.add("hidden");
});
card3.addEventListener("mouseenter", () => {
  bt3.classList.remove("hidden");
});
card3.addEventListener("mouseleave", () => {
  bt3.classList.add("hidden");
});
card4.addEventListener("mouseenter", () => {
  bt4.classList.remove("hidden");
});
card4.addEventListener("mouseleave", () => {
  bt4.classList.add("hidden");
});
card5.addEventListener("mouseenter", () => {
  bt5.classList.remove("hidden");
});
card5.addEventListener("mouseleave", () => {
  bt5.classList.add("hidden");
});
card6.addEventListener("mouseenter", () => {
  bt6.classList.remove("hidden");
});
card6.addEventListener("mouseleave", () => {
  bt6.classList.add("hidden");
});
card7.addEventListener("mouseenter", () => {
  bt7.classList.remove("hidden");
});
card7.addEventListener("mouseleave", () => {
  bt7.classList.add("hidden");
});

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const cardContainer = document.getElementById("card-container");
nextBtn.addEventListener("click", () => {
  cardContainer.innerHTML = `
  <div class="c-card">
            <img src="images/01.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/02.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/03.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/04.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/06.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/07.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/08.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/09.avif" alt="" />
          </div>
  `;
});
prevBtn.addEventListener("click", () => {
  cardContainer.innerHTML = `
    <div class="c-card">
            <img src="images/08.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/09.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/10.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/11.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/12.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/13.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/14.avif" alt="" />
          </div>
          <div class="c-card">
            <img src="images/15.avif" alt="" />
          </div>
    `;
});
const firstMore = document.getElementById("first-more");
const first = document.getElementById("first");
const firstAns = document.getElementById("first-ans");
firstMore.addEventListener("click", () => {
  if (firstMore.classList.contains("fa-plus")) {
    firstMore.classList.remove("fa-plus");
    firstMore.classList.add("fa-minus");
    firstAns.classList.remove("hidden");
    first.style.backgroundColor = `rgb(233, 233, 80)`;
  } else {
    firstMore.classList.remove("fa-minus");
    firstMore.classList.add("fa-plus");
    firstAns.classList.add("hidden");
    first.style.backgroundColor = `white`;
  }
});

const twoMore = document.getElementById("two-more");
const two = document.getElementById("two");
const twoAns = document.getElementById("two-ans");
twoMore.addEventListener("click", () => {
  if (twoMore.classList.contains("fa-plus")) {
    twoMore.classList.remove("fa-plus");
    twoMore.classList.add("fa-minus");
    twoAns.classList.remove("hidden");
    two.style.backgroundColor = `rgb(233, 233, 80)`;
  } else {
    twoMore.classList.remove("fa-minus");
    twoMore.classList.add("fa-plus");
    twoAns.classList.add("hidden");
    two.style.backgroundColor = `white`;
  }
});

const threeMore = document.getElementById("three-more");
const three = document.getElementById("three");
const threeAns = document.getElementById("three-ans");
threeMore.addEventListener("click", () => {
  if (threeMore.classList.contains("fa-plus")) {
    threeMore.classList.remove("fa-plus");
    threeMore.classList.add("fa-minus");
    threeAns.classList.remove("hidden");
    three.style.backgroundColor = `rgb(233, 233, 80)`;
  } else {
    threeMore.classList.remove("fa-minus");
    threeMore.classList.add("fa-plus");
    threeAns.classList.add("hidden");
    three.style.backgroundColor = `white`;
  }
});

const email = document.getElementById("email");
const emailBtn = document.getElementById("email-btn");

emailBtn.addEventListener("click", getEmail);
function getEmail(e) {
  if (email.value == "") {
    alert(" Please Enter Email ID");
  } else {
    emailBtn.innerHTML = `
    Submitted
    <i class="fa-solid fa-check"></i>
    `;
  }
}

const discoverBtn = document.getElementById("discover-btn");
discoverBtn.addEventListener('click', getNft);
function getNft(){
  
}
