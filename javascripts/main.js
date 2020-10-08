
let currentNumberEntry = [];
let previousNumberEntery = [];


const numberButtonEvent = (e) => 
{
  if (e.target.value  >= 0 && e.target.value <= 9) 
  {
    currentNumberEntry.push(e.target.value);
    document.getElementById('displayEntries').innerHTML = currentNumberEntry.join('');
  } 
};

const operatorButtonEvent = (e) =>
{
  console.log("You're inside the operatorButtonEvent function");
  // if (e.target.getElementsByClassName === 'operator-button')
  // {
  //   console.log("You're inside the operatorButtonEvent function")
  // }
}

// switch(x) 
// {
//   case 'additionButton':
//     console.log("You picked addition");
// }


const backspaceButtonEvent = (e) => 
{
  currentNumberEntry.splice(currentNumberEntry.length -1);
  document.getElementById('displayEntries').innerHTML = currentNumberEntry.join('');
}


const clearAllButtonEvent = (e) =>
{
  currentNumberEntry = [];
  document.getElementById('displayEntries').innerHTML = currentNumberEntry;
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
