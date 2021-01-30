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
const activitiesCheckBox = document.querySelectorAll("#activities input[type='checkbox']");
const email = document.querySelector("#email");
const creditCardBox = document.querySelector(".credit-card-box");
const ccHint = document.querySelector(".cc-hint");
const zipHint = document.querySelector(".zip-hint");
const cvvHint = document.querySelector(".cvv-hint");
const nameHint = document.querySelector(".name-hint");
const emailHint = document.querySelector(".email-hint");
const activitiesHint = document.querySelector(".activities-hint");



console.log(activitiesCheckBox);


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
    //DELETE PREVENTDEFAULT
    e.preventDefault();
    console.log(e.target);
    // const email = e.target.children[1].children[0].children[2].children[1].value
    const activitiesBox = document.querySelectorAll("#activities-box input");
    console.log(activitiesBox)

    function nameValidator(event) {
        // console.log(e.target.value)
        console.log(name.value)
        console.log(event)
        if (name.value.length === 0) {
            console.log(name.parentElement)
            name.parentElement.classList.add("not-valid");
            name.parentElement.classList.remove("valid");
            nameHint.style.display = "block";
        // e.preventDefault();
            return false
        } else {
            name.parentElement.classList.add("valid");
            name.parentElement.classList.remove("not-valid");
            nameHint.style.display = "none";

        }
        // e.preventDefault();
        return true
    }

    function emailValidator() {
        console.log(email.value)
        const re = /\S+@\S+\.\S+/;
        console.log(email)
        const result = (re.test(email.value))
        console.log(result)
        if (result === false) {
            email.parentElement.classList.add("not-valid");
            email.parentElement.classList.remove("valid");
            emailHint.style.display = "block";
        } else {
            email.parentElement.classList.add("valid");
            email.parentElement.classList.remove("not-valid");
            emailHint.style.display = "none";
        }
        return re.test(email.value);
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
            console.log(checkedActivities)
            activities.classList.add("not-valid");
            activities.classList.remove("valid");
            activitiesHint.style.display = "block";
            // e.preventDefault();
           return false
        } else {
            activities.classList.add("valid");
            activities.classList.remove("not-valid");
            activitiesHint.style.display = "none";
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
            if (ccNum.value.length >= 13 && ccNum.value.length <= 16 && !cardDigitTester.test(ccNum.value)) {
                    console.log("good")
                    ccNum.parentElement.classList.add("valid");
                    ccNum.parentElement.classList.remove("not-valid");
                    ccHint.style.display = "none";
                } else {
                    console.log("no bueno");
                    ccNum.parentElement.classList.add("not-valid");
                    ccNum.parentElement.classList.remove("valid");
                    ccHint.style.display = "block";

                }

            if (zipTester.test(zip.value) === true) {
                console.log("good good")
                zip.parentElement.classList.add("valid");
                zip.parentElement.classList.remove("not-valid");
                zipHint.style.display = "none";
            } else {
                zip.parentElement.classList.add("not-valid");
                zip.parentElement.classList.remove("valid");
                zipHint.style.display = "block";

            }

            if (cvvTester.test(cvv.value) === true) {
                console.log("good good good")
                cvv.parentElement.classList.add("valid");
                cvv.parentElement.classList.remove("not-valid");
                cvvHint.style.display = "none";
            } else {
                cvv.parentElement.classList.add("not-valid");
                cvv.parentElement.classList.remove("valid");
                cvvHint.style.display = "block";
            }
            //     zipTester.test(zip.value) &&
            //     cvvTester.test(cvv.value)) {
            //     console.log("valid")
            //     return true
            // } else {
            //     console.log("invalid");
            //     return false
            // }
            // if (cardDigitTester.test(ccNum.value)) {
            //     console.log("digit check is valid")
            // } else {
            //     console.log("digit check is invalid");
            // }
            
        }
    }
    cardValidator();
    console.log(ccNum)
    // console.log(cardValidator(ccNum.value));
    // console.log(name.value)
    if (nameValidator() || emailValidator() || activitiesValidator() || cardValidator() === false) {
        e.preventDefault();
    }

    const validators = [
        nameValidator(),
        emailValidator(),
        activitiesValidator(),
        cardValidator()
    ];
    console.log(validators)
    console.log(nameValidator());

})

console.log(activitiesCheckBox);
function blur(e) {
    const blurLabel = e.target.parentElement
    console.log("blurry", e.target.parentElement);
    blurLabel.classList.remove("focus");

}
// blur();

function focus(e) {
    const focusLabel = e.target.parentElement
    console.log("sharp", e.target.parentElement);
    focusLabel.classList.add("focus");
}
// focus();

for (let i = 0; i < activitiesCheckBox.length; i++) {
    activitiesCheckBox[i].addEventListener("blur", blur);
    activitiesCheckBox[i].addEventListener("focus", focus);
    console.log(activitiesCheckBox[i])
}

// const validators = [
//     nameValidator(),
//     emailValidator(),
//     activitiesValidator(),
//     cardValidator()
// ];
// activitiesCheckBox.addEventListener("focus", () => {
//     console.log("focus");
// })

// activitiesCheckBox.addEventListener("blur", () => {
//     console.log("blur");
// })  