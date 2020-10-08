
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
      if (answer === '')
      {
        console.log("inside the + operator if block. This means answer is empty.");
      } else
      {
        memory = answer;
        //console.log("inside the + operator else block");
        console.log(`else block: memory is ${memory}`); // this needs to be updated to the answer
        console.log(`else block: currentEntry is ${currentEntry}`);
        console.log(`else block: answer is ${answer}`);
        //console.log(` inside the + operator else block answer + memory parseInt is: ${parseInt(answer) + parseInt(memory)}`);
      }
      console.log(`memory inside addition operator: ${memory}`)

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
        memory = answer;
        console.log(`memory should be answer to question: ${memory}`)
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
