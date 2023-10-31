const favList = document.querySelector("ul")
const listItems = favList.childNodes
let tmpTexts = []
console.log(favList.childNodes)
for (const listItem of listItems) {
    if (listItem.nodeType === 1){
        if (listItem.innerHTML === "Fast and Furious") {
            favList.insertBefore(listItem, favList.children[0]);
            listItem.classList.add("important")
        }
        listItem.addEventListener("click", (event) => {
            if (listItem.innerHTML === "Fast and Furious") {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.")
            } else {
                alert(listItem.innerHTML)
            }
        })
        if (tmpTexts.includes(listItem.innerHTML)) {
            listItem.parentNode.removeChild(listItem)
        }
        tmpTexts.push(listItem.innerHTML)
    }
}

document.body.addEventListener("keyup", (event) => {
    if (event.code === "KeyR") {
        const listItemsArr = Array.from(listItems)
        while (favList.firstChild) {
            favList.removeChild(favList.lastChild)
        }
        const shuffledArr = listItemsArr.sort((a, b) => Math.random() - 0.5)
        console.log(shuffledArr)
        shuffledArr.forEach(element => {
            if (element.localName === "li") {
                console.log(element)
                favList.append(element)
            }
        });
    }
})