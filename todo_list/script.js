function updateTask(li) {

    var updatedTaskText = prompt("Enter the updated task:");
    

    if (updatedTaskText !== null && updatedTaskText.trim() !== "") {

      var span = li.querySelector("span");
      

      span.textContent = updatedTaskText;
    }
  }
  

function cleartask(updateBtn,deleteBtn,checkbtn){
    console.log(updateBtn,deleteBtn,checkbtn)
    deleteBtn.style.display = "none";
    updateBtn.style.display = "none";
    checkbtn.innerText = "Task Completed!";
    checkbtn.style.backgroundColor = "green";
    checkbtn.style.color = "white";
}


  function addTask() {

    var input = document.getElementById("taskInput");
  

    var taskText = input.value.trim();
    
    
    if (taskText !== "") {
      
      var taskList = document.getElementById("taskList");
      
      
      var li = document.createElement("li");
      
      var span = document.createElement("span");

      
      var taskTextNode = document.createTextNode(taskText);
      
      
      span.appendChild(taskTextNode);
      
      
      li.appendChild(span);
      
      
      var updateBtn = document.createElement("button");
      
      var checkbtn = document.createElement("button");
      checkbtn.appendChild(document.createTextNode('clear'));
      checkbtn.classList.add('clear');
      li.appendChild(checkbtn);
      checkbtn.onclick = function(){
        cleartask(updateBtn,deleteBtn,checkbtn);
      };
      
      
      updateBtn.appendChild(document.createTextNode("Update"));
      updateBtn.classList.add('update');
      
      updateBtn.onclick = function() {
      
        updateTask(li);
      };
  
      
      li.appendChild(updateBtn);
      
      
      var deleteBtn = document.createElement("button");
      
      
      deleteBtn.appendChild(document.createTextNode("Delete"));
      
      
      deleteBtn.classList.add("delete");
      
      
      deleteBtn.onclick = function() {
      
        li.remove();
      };
  
      
      li.appendChild(deleteBtn);
      
      
      taskList.appendChild(li);
      
      input.value = "";
      storeTasks();
    } else {
      alert("Please enter a task!");
    }
  }
  
  function storeTasks() {

    var tasks = Array.from(document.querySelectorAll("#taskList span")).map(span => span.textContent);
    console.log(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    var taskList = document.getElementById("taskList");
    
    taskList.innerHTML = "";
    
    tasks.forEach(function(taskText) {
      var li = document.createElement("li");
      var span = document.createElement("span");
      span.textContent = taskText;
      li.appendChild(span);
      var deleteBtn = document.createElement("button");
      deleteBtn.appendChild(document.createTextNode("Delete"));
      deleteBtn.classList.add("delete");
      var updateBtn = document.createElement("button");
      
      updateBtn.appendChild(document.createTextNode("Update"));
      updateBtn.classList.add('update')
      updateBtn.onclick = function() {
        updateTask(li);
      };
      li.a-ppendChild(updateBtn);
      deleteBtn.onclick = function() {
        li.remove();
        storeTasks();
      };
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  window.onload = loadTasks;