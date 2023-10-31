const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const main = document.querySelector("main")
const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const newSquare = document.createElement("div");
  newSquare.classList.add(e.target.classList[1])
  newSquare.classList.add("displayedsquare")
  const logEntry = document.createElement("li");
  const logText = document.createTextNode("[" + getElapsedTime() + "] Created new " + e.target.classList[1] + " square.");
  logEntry.append(logText);
  main.children[0].append(newSquare)
  main.children[2].children[1].append(logEntry)
  const generatedSquares = document.querySelectorAll(".displayedsquare")
  for (let generatedSquare of generatedSquares) {
  generatedSquare.addEventListener("click", alertbox)
}
}

const alertbox = (a) => {
   window.alert(a.target.classList[0])
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}



document.body.addEventListener("keypress", event => {
  if (event.code === "Space") {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    const logEntry = document.createElement("li");
    const logText = document.createTextNode("[" + getElapsedTime() + "] Generated a new backgroundcolor")
    logEntry.append(logText);
    main.children[2].children[1].append(logEntry)
  }
  if (event.code === "KeyL") {
    while (main.children[2].children[1].children[0] != 0) {
      main.children[2].children[1].children[0].remove();
    }
  }
  if (event.code === "KeyS") {
    while (main.children[0].children[0] != 0) {
      main.children[0].children[0].remove();
    }
  }
})

