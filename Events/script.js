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
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

