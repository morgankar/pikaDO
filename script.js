let ctr = 1
function addTodo(){
    const inpText = document.getElementById("input").value
    const newDiv = document.createElement("div");
    const newSpan= document.createElement("span")
    const newBtn = document.createElement("button")

    //Add attributes
    newBtn.setAttribute("onclick",`deleteTodo(${ctr})`)
    newDiv.setAttribute("id","todo-"+ctr)
    newSpan.setAttribute("id","todoEntryText-" +ctr)

    document.querySelector("body").appendChild(newDiv);
    //Append span and btn to newDiv
    newSpan.innerText = `${ctr}. ${inpText}`
    newBtn.innerText = "Delete"
    newDiv.appendChild(newSpan)
    newDiv.appendChild(newBtn)
    ctr++;
}

function deleteTodo(ctr){
    const element = document.getElementById(`todo-${ctr}`)
    element.parentNode.removeChild(element)
}