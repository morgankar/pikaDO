
// function addTodo(){
//     const inpText = document.getElementById("input").value
//     const newDiv = document.createElement("div");
//     const newSpan= document.createElement("span")
//     const newBtn = document.createElement("button")

//     //Add attributes
//     newBtn.setAttribute("onclick",`deleteTodo(${ctr})`)
//     newDiv.setAttribute("id","todo-"+ctr)
//     newSpan.setAttribute("id","todoEntryText-" +ctr)

//     document.querySelector("body").appendChild(newDiv);
//     //Append span and btn to newDiv
//     newSpan.innerText = `${ctr}. ${inpText}`
//     newBtn.innerText = "Delete"
//     newDiv.appendChild(newSpan)
//     newDiv.appendChild(newBtn)
//     ctr++;
// }

// function deleteTodo(ctr){
//     const element = document.getElementById(`todo-${ctr}`)
//     element.parentNode.removeChild(element)
// }

let todos =[];
function addTodo(){
    todos.push({
        title: document.querySelector("input").value
    })
    render()
}

function deleteTodo(ctr){
    todos.splice(ctr -1,1)
    render()
}

function render(){
    let ctr = 1
    document.getElementById("todoCard").innerHTML ="";
    for(let i=0;i <todos.length ;i++){
        const newSpan= document.createElement("span")
        const newBtn = document.createElement("button")
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id",`todo-${ctr}`)
        newDiv.setAttribute("class","todoitem")
        newSpan.innerText = todos[i].title
        newBtn.innerText = "Delete"
        document.getElementById("todoCard").appendChild(newDiv);
        newDiv.appendChild(newSpan)
        newDiv.appendChild(newBtn)
        newBtn.setAttribute("onclick",`deleteTodo(${ctr})`)
        ctr++
    }
}