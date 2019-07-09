const TabList = document.querySelector("#AllTasks");
var Tabs = [];

db.collection('Tasks').get().then((snapshot) => {
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
    console.log(doc.data().title);
    Tabs[doc.data().pos] = doc;
    //ShowTab(doc);
  });
  Tabs.forEach(ShowTab);
});



function ShowTab(item){
  console.log("We are creating all the tabs");
  //Create all the contents
  let Tab = document.createElement('div');
  let TabName = document.createElement('span');



  //Add Classes to the parts
  Tab.className = "Task";
  TabName.className = "TaskTitle";

  Tab.alt = item.data().title;
  TabName.textContent = item.data().title;

  Tab.appendChild(TabName);
  TabList.appendChild(Tab);
}


function ChangeParent(current, _new, object){

}
