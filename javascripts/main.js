
let memory = '';
let currentEntry = '';
let answer = '';
let pickedOperator = '';



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
  pickedOperator = e.target.value;
 
  switch(pickedOperator) 
  {
    case '.':
      console.log("You picked a decimal point"); // this might need to go somewhere else...
      break;
      
    case '+':
      pushCurrentEntryToMemory();
      if (answer !== '')
      {
        memory = answer;
      }; 
      break;

    case '-':
      pushCurrentEntryToMemory();
      if (answer !== '')
      {
        memory = answer;
      }; 
      break;

    case 'x':
      pushCurrentEntryToMemory();
      if (answer !== '')
      {
        memory = answer;
      };
      break;

    case '/':
      pushCurrentEntryToMemory();
      if (answer !== '')
      {
        memory = answer;
      };
      break;
  }

}

const equalsButtonEvent = (e) =>
{
  switch(pickedOperator) 
  {
    case '.':
      console.log("You picked a decimal point"); // this might need to go somewhere else...
      break;
      case '+':
        answer = parseInt(memory) + parseInt(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer;
      break;

      case '-':
        answer = parseInt(memory) - parseInt(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer;
      break;

      case 'x':
        answer = parseInt(memory) * parseInt(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer;
      break;

      case '/':
        answer = parseInt(memory) / parseInt(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer;
      break;
  };
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
  equalsButton.addEventListener("click", equalsButtonEvent);
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
