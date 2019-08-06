const ChatButton = document.querySelector('#ChatButton');
const TasksButton = document.querySelector('#TasksButton');
const ScriptChartsButton = document.querySelector('#ScriptChartsButton');

ChatButton.addEventListener('click', (e)=>{
e.preventDefault();
ClearPage();

});

TasksButton.addEventListener('click', (e)=>{
  e.preventDefault();
  ClearPage();

});

ScriptChartsButton.addEventListener('click', (e)=>{
  e.preventDefault();
  ClearPage();

});

//Clear page
function ClearPage(){
  var allSideElements = document.getElementById("Sidebar");
  for(i = 1; i < allSideElements.length - 1; i++){
    allSideElements.removeChild([i]);
  }

  var allElements = document.getElementById("content");
  while(allElements.hasChildNodes()){
    allElements.removeChild(allElements.firstChild);
  }
}



