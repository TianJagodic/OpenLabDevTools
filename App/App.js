const ChatButton = document.querySelector('#ChatButton');
const TasksButton = document.querySelector('#TasksButton');
const ScriptChartsButton = document.querySelector('#ScriptChartsButton');
const TopBar = document.querySelector('#topBar');

ChatButton.addEventListener('click', (e)=>{
e.preventDefault();
ClearPage();
TopBar.className = "topBar-Chat";
});

TasksButton.addEventListener('click', (e)=>{
  e.preventDefault();
  ClearPage();
  TopBar.className = "topBar-Tasks";
});

ScriptChartsButton.addEventListener('click', (e)=>{
  e.preventDefault();
  ClearPage();
  TopBar.className = "topBar-Charts";
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



