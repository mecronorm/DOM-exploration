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
                if (element.className === "important") {
                    console.log(element)
                    favList.append(element)
                }
            }
        });
        shuffledArr.forEach(element => {
            if (element.localName === "li") {
                if (element.className != "important") {
                    console.log(element)
                    favList.append(element)
                }
            }
        });
    }
    if (event.code === "KeyD") {
        const node = favList.firstElementChild
        const clone = node.cloneNode(true);
        favList.insertBefore(clone, favList.children[0]);
    }
})

const newDiv = document.createElement("div")
document.body.insertBefore(newDiv, document.body.children[1])
const newSelect = document.createElement("select")
newDiv.append(newSelect)
const optionOne = document.createElement("option")
const optionTwo = document.createElement("option")
optionOne.innerHTML = "important franchises"
optionTwo.innerHTML = "normal franchises"
optionOne.value = "important"
optionTwo.value = "normal"
newSelect.append(optionTwo)
newSelect.append(optionOne)

newSelect.addEventListener("change", (event) => {
    if (event.target.value === "important") {
        listItems.forEach(element => {
            if (element.nodeType === 1) {
                if (element.className != "important") {
                    element.style.visibility = "hidden";
                }
            }
        });
    }
    if (event.target.value === "normal") {
        
        listItems.forEach(element => {
            if (element.nodeType === 1) {
                if (element.className != "important") {
                    element.style.visibility = "visible";
                }
            }
        });
    }
})