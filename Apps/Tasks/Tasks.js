const TabList = document.querySelector("#AllTasks");

db.collection('Tasks').get().then((snapshot) => {
  console.log(snapshot.docs);
  snapshot.docs.forEach(doc => {
    console.log(doc.data().title);
    ShowTab(doc);
  });
});

function ShowTab(doc){
  console.log("We are creating all the tabs");
  //Create all the contents
  let Tab = document.createElement('div');
  let TabName = document.createElement('span');



  //Add Classes to the parts
  Tab.className = "Task";
  Tab.alt = doc.data().title;
  TabName.className = "TaskTitle";

  TabName.textContent = doc.data().title;

  Tab.appendChild(TabName);
  TabList.appendChild(Tab);
}
