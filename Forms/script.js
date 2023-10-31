const input1 = document.body.children[1].children[0].children[1]
input1.addEventListener("keyup", (event) => {
    if (event.code === "Enter") {
        const textNode = document.createTextNode(input1.value);
        document.body.children[1].children[0].children[2].append(textNode);
    }
})