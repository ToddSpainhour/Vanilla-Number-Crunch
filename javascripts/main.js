
let currentNumberEntry = [];


const numberButtonEvent = (e) => 
{
  if (e.target.value  >= 0 && e.target.value <= 9) 
  {
    currentNumberEntry.push(e.target.value);
    document.getElementById('displayEntries').innerHTML = currentNumberEntry.join('');
  } 
};


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
}


const init = () =>
{
  addClickEvents();
}


init();
