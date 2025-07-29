//how to insert new elemeent in dorm

let todo={
    id:3435435,
    title:"Todo4"
}
let ul = document.querySelector(".todolist")

function addTodo(){
    let li = document.createElement("li");
    li.setAttribute("id",'${todo.id}')
    li.innerHTML = ` <div>
                <input type = "checkbox" name ="" id = "checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class = "edit">----</button>
                    <button class = "delete">❌</button>
                    <p> Hello there </p>
                </div>
            </div>`
ul.appendChild(li);

}
addTodo(todo)
