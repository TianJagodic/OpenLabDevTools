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
  var allSideElements = document.getElementById("SideBarElements");
  while(allSideElements.hasChildNodes()) {
    allSideElements.removeChild(allSideElements.firstChild);
  }
  var allElements = document.getElementById("content");
  while(allElements.hasChildNodes()){
    allElements.removeChild(allElements.firstChild);
  }
}



