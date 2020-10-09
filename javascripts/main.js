
let currentEntry = '';
let pickedOperator = '';
let memory = '';
let answer = '';





const pushCurrentEntryToMemory = () =>
{
  memory = currentEntry;
  currentEntry = ''
};



const pushAnswerToMemory = () =>
{
  if (answer !== '') 
  {
    memory = answer;
  };
};



const pushValuesToMemory = () =>
{
  pushCurrentEntryToMemory();
  pushAnswerToMemory();
};



const numberButtonEvent = (e) => 
{
  if (e.target.value  >= 0 && e.target.value <= 9) 
  {
    currentEntry += e.target.value
    document.getElementById('displayEntries').innerHTML = currentEntry;
  }; 
};



const operatorButtonEvent = (e) =>
{
  pickedOperator = e.target.value;
 
  switch(pickedOperator) 
  {
    case '.':
      console.log("You picked a decimal point");
      break;
      
    case '+':
      pushValuesToMemory();
      break;

    case '-':
      pushValuesToMemory();
      break;

    case 'x':
      pushValuesToMemory();
      break;

    case '/':
      pushValuesToMemory();
      break;
  };
};



const equalsButtonEvent = (e) =>
{
  switch(pickedOperator) 
  {
    case '.':
      console.log("You picked a decimal point");
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
};



const backspaceButtonEvent = (e) => 
{
  memory.splice(memory.length -1);
  document.getElementById('displayEntries').innerHTML = memory.join('');
};



const clearAllButtonEvent = (e) =>
{
  memory = [];
  document.getElementById('displayEntries').innerHTML = memory;
};



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
};



const init = () =>
{
  addClickEvents();
};



init();
