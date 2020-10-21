
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



const decimalPointEvent = (e) =>
{
  currentEntry += e.target.value;
  document.getElementById('displayEntries').innerHTML = currentEntry;
};



const operatorButtonEvent = (e) =>
{
  if (currentEntry !== '' && memory !== '')
  {
    equalsButtonEvent(pickedOperator);
  }

  pickedOperator = e.target.value;
 
  switch(pickedOperator) 
  {      
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
      case '+':
        answer = parseFloat(memory) + parseFloat(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer.toString();
      break;

      case '-':
        answer = parseFloat(memory) - parseFloat(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer.toString();
      break;

      case 'x':
        answer = parseFloat(memory) * parseFloat(currentEntry);
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer.toString();
      break;

      case '/':
        if (currentEntry === '0')
        {
          answer = memory;
        }
        else
        {
          answer = parseFloat(memory) / parseFloat(currentEntry);
        }
        document.getElementById('displayEntries').innerHTML = answer;
        memory = answer.toString();
      break;
  };
  currentEntry = ''
};



const backspaceButtonEvent = () => 
{
  if (answer !== '')
  {
    const lastDigitRemoved = memory.substring(0, memory.length -1);
    memory = lastDigitRemoved;
    answer = lastDigitRemoved;
    document.getElementById('displayEntries').innerHTML = answer;
  }
  else 
  {
    const lastDigitRemoved = currentEntry.substring(0, currentEntry.length -1);
    currentEntry = lastDigitRemoved;
    document.getElementById('displayEntries').innerHTML = currentEntry;
  }
};



const clearAllButtonEvent = () =>
{
  currentEntry = '';
  memory = '';
  pickedOperator = '';
  answer = '';
  document.getElementById('displayEntries').innerHTML = currentEntry;
};



const addClickEvents = () =>
{
  decimalPointButton.addEventListener("click", decimalPointEvent);
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
