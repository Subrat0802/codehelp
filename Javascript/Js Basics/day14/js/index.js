//user will be write something => Add todo

//catch the button
const addTodoButton = document.querySelector("#addTodo_button");

addTodoButton.addEventListener("click", handleAddTodo);

let todoArray = JSON.parse(localStorage.getItem("todos")) || [];

function handleAddTodo(){
    // alert("Hello");
    const inputValue = document.querySelector("#todoText_input").value;
    

    //code for validation
    if(!inputValue){
        alert("Type something...")
        return;
    }

    const payload = {
        todo: inputValue,
        id: Date.now(),
        status:false
    }
    // console.log(payload);
    //we need to store this payload
    todoArray.push(payload);
    localStorage.setItem("todos", JSON.stringify(todoArray));

    append(todoArray);
    
}





append(todoArray);
//get the data and show on ui

function append(todos){
    const container = document.querySelector(".allTodos_div");
    container.innerHTML = null;

    todos.map((el) => {
        //creating the html
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const updateButton = document.createElement("button");
        const deleteButton = document.createElement("button");


        //giving style or attribute
        h3.textContent = el.todo;
        deleteButton.textContent = "Delete";

        //status = of button
        if(el.status){
            updateButton.textContent = "Done";
            updateButton.style.backgroundColor="green"
            updateButton.style.color="white";
        }
        else{
            updateButton.textContent = "Not Done";
            updateButton.style.backgroundColor="red"
            updateButton.style.color="white";
        }
        
        //add Event listener
        updateButton.addEventListener("click", ()=>{
            updateTodo(el.id);
        })


        //delete button addEvent
        deleteButton.addEventListener("click", () => {
            deleteTodo(el.id);
        })


        //append
        div.append(h3,updateButton,deleteButton);
        container.append(div);
        
    })
} 



//updating todo
function updateTodo(id){
    // alert(id)
    //identify the object
    //togle the status value
    //store the final value on ls
    //append ui
        
    todoArray = todoArray.map((el) => {
        if(el.id === id){
            //we have to togle status
            return { todo: el.todo, id: el.id, status: !el.status }
        }
        else{
            return el;
        }
    })
    localStorage.setItem("todos", JSON.stringify(todoArray));
    append(todoArray)
}




function deleteTodo(id){
    // alert(id)
    //you need to check all the data from array
    // ..identify the object by
    //delete and remove 
    todoArray = todoArray.filter((el) => {
        return el.id != id
    })
    localStorage.setItem("todos", JSON.stringify(todoArray));
    append(todoArray)
}