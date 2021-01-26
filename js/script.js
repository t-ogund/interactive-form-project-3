const name = document.querySelector("#name");
const otherJobRole = document.querySelector("#other-job-role");
const title = document.querySelector("#title");
const color = document.querySelector("#color");
const design = document.querySelector("#design");


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