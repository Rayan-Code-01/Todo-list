document.addEventListener("DOMContentLoaded", () => {
    const input =document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const todoList = document.getElementById("todoList");
    // work add 
    addBtn.addEventListener("click", () => {
        let task = input.value.trim();
        if (task !== "") {
            addTask(task);
            input.value = ""; //clean input 
        }
    });

    // add work function 
    function addTask(task) {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete-btn"> Delete </button>`;
        todoList.appendChild(li);
        // delete addEventListener
        li.querySelector(".delete-btn").addEventListener("click", () =>{
            li.remove();
        });
    }
});