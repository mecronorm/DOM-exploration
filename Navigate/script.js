let orderdList = document.querySelector("ol");
let lastItem = orderdList.children[orderdList.children.length -1];
orderdList.insertBefore(lastItem, orderdList.firstChild)

let main = document.querySelector("main")
let sectionTwo = main.children[1]
let sectionThree = main.children[2]
let hForThree = sectionTwo.children[0]
let divInThree = sectionThree.children[0]
let hForTwo = divInThree.children[0]
sectionTwo.insertBefore(hForTwo, hForThree)
divInThree.insertBefore(hForThree, divInThree.children[0])

let forDeletion = main.children[main.children.length-1]
forDeletion.remove()