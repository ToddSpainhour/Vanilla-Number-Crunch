
let userEntry = [];






const clickedButtonEvent = (e) => {
  e.preventDefault();
  if (e.target.value  >= 0 && e.target.value <= 9) 
  {
      userEntry.push(e.target.value)
      document.getElementById('displayEntries').innerHTML = userEntry.join('');
      console.log(`userEntry array is: ${userEntry}`)
  } 
  else if (e.target.value = "backspace")
  {
      console.log("inside your else if backspace btn clicked")
  }
};


const backspaceButtonEvent = (e) => 
{
  console.log("You clikde the backspace btn");
  userEntry.splice(userEntry.length -1);
  document.getElementById('displayEntries').innerHTML = userEntry.join('');
  console.log(`userEntry array is: ${userEntry}`)
}



let numberButton = document.getElementsByClassName("number-button");
let backspaceButton = document.getElementById("backspaceButton");
backspaceButton.addEventListener("click", backspaceButtonEvent)

for (let i = 0; i < numberButton.length; i++)
{
  numberButton[i].addEventListener("click", clickedButtonEvent)
}
