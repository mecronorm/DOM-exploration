let title = document.querySelector("title")
title.innerHTML = "Changing the DOM"
document.body.style.backgroundColor = "#FF69B4"
let father = document.querySelector("body")
for (const child of father.children) {
    console.log(child.tagName)
}
console.log(title.innerHTML)