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
const ccNum = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");


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

    function nameValidator(e) {
        console.log(e.target)
        console.log(name.value)
        if (name.value.length === 0) {
        e.preventDefault();
            return false
        } 
        // e.preventDefault();
        return true
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
            // e.preventDefault();
           return false
        }
        return true
    }
    console.log("Email Validator", emailValidator(email));
    console.log("Activities Validator", activitiesValidator());


    
    console.log("Name Validator", nameValidator(e));
    // if (!nameValidator()) {
    //     console.log("name validator works")
    //     e.preventDefault();

    // }
    
    function cardValidator(e) {
        const cardDigits = "0123456789";
        const cardDigitTester = /[^0-9]/g
        const zipTester = /^\d{5}$/
        const cvvTester = /^\d{3}$/
        console.log(zipTester.test(12345))
        console.log(cvvTester.test(123));
        if (creditCard.style.display !== "none") {
            if (ccNum.value.length >= 13 &&
                ccNum.value.length <= 16 &&
                !cardDigitTester.test(ccNum.value) &&
                zipTester.test(zip.value) &&
                cvvTester.test(cvv.value)) {
                console.log("valid")
                return true
            } else {
                console.log("invalid");
                return false
            }
            // if (cardDigitTester.test(ccNum.value)) {
            //     console.log("digit check is valid")
            // } else {
            //     console.log("digit check is invalid");
            // }
            
        }
    }
    cardValidator();
    // console.log(cardValidator(ccNum.value));
    // console.log(name.value)
    if (nameValidator() || emailValidator() || activitiesValidator() || cardValidator() === false) {
        e.preventDefault();
    }

})
