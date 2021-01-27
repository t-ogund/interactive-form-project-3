const name = document.querySelector("#name");
const otherJobRole = document.querySelector("#other-job-role");
const title = document.querySelector("#title");
const color = document.querySelector("#color");
const design = document.querySelector("#design");
const activities = document.querySelector("#activities");
const activitiesCost = document.querySelector("#activities-cost");
const payment = document.querySelector("#payment");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelector("#paypal");
const bitCoin = document.querySelector("#bitcoin");


name.focus();
otherJobRole.style.display = "none";

title.addEventListener("change", (e) => {
    if (e.target.value === "other") {
        otherJobRole.style.display = "block";
    } else {
        otherJobRole.style.display = "none";
    }
})

color.disabled = true;

design.addEventListener("change", (e) => {
    color.disabled = false;
    if (e.target.value === "js puns") {
       for (let i = 0; i < color.children.length; i++) {
           color.children[i].style.display = "block";
           if (color.children[i].dataset.theme === "heart js") {
               color.children[i].style.display = "none";
           }
       }
        // console.log(color.children[1].dataset.theme)
    } else if (e.target.value === "heart js") {
        for (let i = 0; i < color.children.length; i++) {
            color.children[i].style.display = "block";
            if (color.children[i].dataset.theme === "js puns") {
                color.children[i].style.display = "none";
            }
        }
    }  
})

let totalCost = 0;
activities.addEventListener("change", (e) => {
    if (e.target.checked === true) {
        totalCost += parseInt(e.target.dataset.cost);
    } else {
        totalCost -= parseInt(e.target.dataset.cost);
    }
    activitiesCost.textContent = `${totalCost}`;
    console.log(totalCost)
})

payment.children[1].defaultSelected = true;
if (payment.children[1].defaultSelected) {
    payPal.style.display = "none";
    bitCoin.style.display = "none";
}
payment.addEventListener("change", (e) => {
    const selection = e.target.value;
    if (selection === "paypal") {
        payPal.style.display = "block";
        creditCard.style.display = "none";
        bitCoin.style.display = "none";
    } else if (selection === "credit-card") {
        creditCard.style.display = "block";
        payPal.style.display = "none";
        bitCoin.style.display = "none";
    } else {
        bitCoin.style.display = "block";
        creditCard.style.display = "none";
        payPal.style.display = "none";
    }
})