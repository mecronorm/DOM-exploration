let names = ["Thierry", "Jonasi", "Eduarda", "Pieter", "Alessandro", "Rebecca", "Alec"]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}
shuffle(names)
for (const name of names) {
    let rgb = [Math.random()*255, Math.random()*255, Math.random()*255];
    let newSection = document.createElement("section");
    newSection.style.backgroundColor = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
    let newParagraph = document.createElement("p");
    function blackOrWhite() {
        if((rgb[0]*0.299)+(rgb[1]*0.587)+(rgb[2]*0.114)>186) {
            return 'black';
            } else {
            return 'white';
            }
    };
    newParagraph.style.color = blackOrWhite();
    newParagraph.appendChild(document.createTextNode(name));
    newSection.appendChild(newParagraph);
    document.querySelector("article").appendChild(newSection)
}