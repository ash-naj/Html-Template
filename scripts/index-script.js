const city = "Klagenfurt";
let coffee = 3;
coffee++
console.log("Currently in " + city + " on " + coffee + " coffees.")

let seats = 3;
const signup_btn = (document.querySelector(".hero-btn"));
signup_btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (seats > 0) {
        seats--;
        signup_btn.textContent = `Sign up, only ${seats} are left`
        console.log(seats);
    } if (seats === 0) {
        signup_btn.textContent = "Spots Full";
        signup_btn.classList.add("disabled");
    }
});

const prev_btn = (document.querySelector(".prev-btn"));
const next_btn = (document.querySelector(".next-btn"));
const info_card = (document.querySelector(".info-card"));
next_btn.addEventListener("click", () => {
    info_card.scrollBy(235, 0);
});
prev_btn.addEventListener("click", () => {
    info_card.scrollBy(-235, 0);
});