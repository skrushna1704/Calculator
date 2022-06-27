// console.log('krushna')
const textShow = document.getElementById("textShow");
const button = document.querySelectorAll("button");
const clearLog = document.getElementById("clearLog");
const paraHistory = document.getElementById("paraHistory");
let logValue = "";
let screenValue = "";

clearLog.addEventListener("click", (event) => {
  let clearText = event.target.innerText;
  if (clearText == "Clear Log?") {
    logValue = "";
    paraHistory.value = logValue;
  }
});

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    // console.log("click on ", buttonText);
    if (buttonText == "*") {
      screenValue += buttonText;
      textShow.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      textShow.value = screenValue;
    } else if (buttonText == "=") {
      textShow.value = eval(screenValue);
      calculation(screenValue);
    } else {
      screenValue += buttonText;
      textShow.value = screenValue;
    }
  });
});
const history = document.getElementById("historyLog");
function calculation(v) {
  let para = document.createElement("p");
  let data = v + " = " + eval(v);
  para.innerText = data;
  history.appendChild(para);
  return eval(v);
}
