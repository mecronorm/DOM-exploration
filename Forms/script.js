const inputOne = document.body.children[1].children[0].children[1]
const spanOne = document.body.children[1].children[0].children[2]
inputOne.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        if (spanOne.innerHTML) {
            spanOne.innerHTML = ""
        }
        const textNode = document.createTextNode(inputOne.value);
        spanOne.append(textNode);
    }
})

const aHardTruth = document.body.children[1].children[1].children[2]
const inputTwo = document.body.children[1].children[1].children[1]
inputTwo.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        if (inputTwo.value > 17) {
            aHardTruth.style.visibility = "visible";
        } else {
            aHardTruth.style.visibility = "hidden";
        }
    }
})

const password = document.body.children[1].children[2].children[2].children[0]
const passwordConfirm = document.body.children[1].children[2].children[3].children[0]
password.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        if (password.value.length < 6) {
            password.style.backgroundColor = "red"
        } else {
            password.style.backgroundColor = "white"
        }
    }
})
passwordConfirm.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        if (passwordConfirm.value === password.value) {
            passwordConfirm.style.backgroundColor = "white"
        } else {
           passwordConfirm.style.backgroundColor = "red" 
        }
    }
})

const toggle = document.querySelector("#toggle-darkmode")
toggle.addEventListener("change", (event) => {
    if (event.target.value === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})