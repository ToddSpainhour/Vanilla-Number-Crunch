
let memory = '';
let currentEntry = '';
let answer = '';



const numberButtonEvent = (e) => 
{
  if (e.target.value  >= 0 && e.target.value <= 9) 
  {
    currentEntry += e.target.value
    document.getElementById('displayEntries').innerHTML = currentEntry;
  } 
};



const pushCurrentEntryToMemory = () =>
{
  memory = currentEntry;
  currentEntry = ''
}



const operatorButtonEvent = (e) =>
{
  let pickedOperator = e.target.value;
 
  switch(pickedOperator) 
  {
    case '.':
      console.log("You picked a decimal point"); // this might need to go somewhere else...
      break;
    case '+':
      pushCurrentEntryToMemory();
      
      break;
      case '-':
        console.log("You picked subtraction");
        break;
      case 'x':
        console.log("You picked multiplication");
        break;
      case '/':
        console.log("You picked division");
        break;
      case '=':
        answer = parseInt(memory) + parseInt(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
      break;
  }

}



const backspaceButtonEvent = (e) => 
{
  memory.splice(memory.length -1);
  document.getElementById('displayEntries').innerHTML = memory.join('');
}



const clearAllButtonEvent = (e) =>
{
  memory = [];
  document.getElementById('displayEntries').innerHTML = memory;
}



const addClickEvents = () =>
{
  backspaceButton.addEventListener("click", backspaceButtonEvent);
  clearAllButton.addEventListener("click", clearAllButtonEvent);

  let numberButton = document.getElementsByClassName("number-button");
  
    for (let i = 0; i < numberButton.length; i++)
    {
      numberButton[i].addEventListener("click", numberButtonEvent)
    }

  let operatorButton = document.getElementsByClassName("operator-button");

    for (let i = 0; i < operatorButton.length; i++)
    {
      operatorButton[i].addEventListener("click", operatorButtonEvent)
    }
}



const init = () =>
{
  addClickEvents();
}



init();
