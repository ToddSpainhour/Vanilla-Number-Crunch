
const clicked = () => {
  console.log("You clicked a button")
};


let button = document.getElementsByClassName("calculator-button");

console.log(`there are ${button.length} button elements.`)

for (let i = 0; i < button.length; i++)
{

  button[i].addEventListener("click", clicked)
}
