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
const form = document.querySelector("form");


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


form.addEventListener("submit", (e) => {
    console.log(e.target);
    const email = e.target.children[1].children[0].children[2].children[1].value
    const activitiesBox = document.querySelectorAll("#activities-box input");
    console.log(activitiesBox)
    function nameValidator() {
        if (name.value.length === 0) {
            return false
        }
    }

    function emailValidator(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function activitiesValidator() {
        let checkedActivities = 0;
        for (let i = 0; i < activitiesBox.length; i++) {
            if (activitiesBox[i].checked) {
                checkedActivities += 1;
            }
        }
        console.log(checkedActivities)
        if (checkedActivities < 1) {
           return false
        }
        return true
    }
    activitiesValidator();
    // console.log(emailValidator(email));

    
    nameValidator();
    if (!nameValidator()) {
        console.log("name validator works")
        e.preventDefault();

    }
    
    function cardValidator() {
        if (creditCard.style.display !== "none") {
            console.log("card validator works")
        }
    }
    cardValidator();


})
