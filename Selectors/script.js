const elements = document.getElementsByClassName("important")
for (const element of elements) {
    element.setAttribute("title", "This is an important item")
}
const images = document.getElementsByTagName("img")
for (const image of images) {
    if (image.className != "important") {
        image.style.display = "none";
    }
}

const paragraphs = document.querySelectorAll("p")
for (const paragraph of paragraphs) {
    console.log(paragraph.innerHTML)
    if (paragraph.className != 0) {
        console.log(paragraph.className)
    } else {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        paragraph.style.color = "#" + randomColor;
    }
}